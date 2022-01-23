import React, { useEffect, useState } from "react";

import Game from "./Game.jsx";
import StartGame from "./StartGame.jsx";
import EndGame from "./EndGame.jsx";
import Info from "./Info.jsx";
import Controls from "./Controls.jsx";

import updateGame from "../scripts/updateGame.js";
import createField from "../utils/createField.js";
import getRandom from "../utils/getRandom.js";

const pieceSize = 32;
const scoreRadius = 4;
const fieldWidth = 17;
const fieldHeight = 17;
const gameUpdateTime = 200;

const initialScore = 0;
const initialDirection = "right";
const initialBody = [];
const initialHead = { x: Math.floor(fieldWidth / 2), y: Math.floor(fieldHeight / 2) };
const initialDifficult = "Easy";
const initialGameState = "start";
const initialField = createField(fieldWidth, fieldHeight);
const initialScorePosition = { x: getRandom(fieldWidth), y: getRandom(fieldHeight) };

function Main() {
    const [gameState, setGameState] = useState(initialGameState);
    const [difficult, setDifficult] = useState(initialDifficult);
    const [field, setField] = useState(initialField);
    const [score, setScore] = useState(initialScore);
    const [direction, setDirection] = useState(initialDirection);
    const [snakeBody, setSnakeBody] = useState(initialBody);
    const [snakeHead, setSnakeHead] = useState(initialHead);
    const [scorePosition, setScorePosition] = useState(initialScorePosition);

    useEffect(() => {
        const gameUpdateInterval = setInterval(() => {
            updateGame(
                score,
                setScore,
                setField,
                direction,
                setSnakeBody,
                setSnakeHead,
                snakeHead,
                snakeBody,
                scorePosition,
                setScorePosition,
                fieldWidth,
                fieldHeight
            );
        }, gameUpdateTime);

        return () => clearInterval(gameUpdateInterval);
    });

    return (
        <>
            {(gameState === "start" && <StartGame difficult={difficult} />) ||
                (gameState === "game" && (
                    <div className="wrapper">
                        <Info gameWidth={fieldWidth * pieceSize} score={score} />
                        <Game
                            field={field}
                            pieceSize={pieceSize}
                            scoreRadius={scoreRadius}
                            fieldWidth={fieldWidth}
                            fieldHeight={fieldHeight}
                            scorePosition={scorePosition}
                        />
                        <Controls direction={direction} setDirection={setDirection} />
                    </div>
                )) ||
                (gameState === "end" && <EndGame />)}
        </>
    );
}

export default Main;
