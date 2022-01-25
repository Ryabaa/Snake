import React, { useEffect, useState } from "react";

import Game from "./Game.jsx";
import StartGame from "./StartGame/StartGame.jsx";
import EndGame from "./EndGame.jsx";
import Loader from "./Loader.jsx";
import Info from "./Info.jsx";
import Controls from "./Controls.jsx";

import moveHead from "../scripts/moveHead.js";
import moveBody from "../scripts/moveBody.js";
import takeScore from "../scripts/takeScore.js";
import drawField from "../scripts/drawField.js";
import createField from "../utils/createField.js";
import getRandom from "../utils/getRandom.js";

const pieceSize = 32;
const scoreRadius = 4;

const initialScore = 0;
const initialLoader = false;
const initialGameState = "start";
const initialDifficulty = "Easy";
const initialUpdateTime = 500;
const initialFieldWidth = 10;
const initialFieldHeight = 10;
const initialDirection = "right";
const initialHead = { x: 0, y: 0 };
const initialBody = [];

function Main() {
    const [gameState, setGameState] = useState(initialGameState);
    const [loader, setLoader] = useState(initialLoader);
    const [difficulty, setDifficulty] = useState(initialDifficulty);
    const [updateTime, setUpdateTime] = useState(initialUpdateTime);
    const [fieldWidth, setFieldWidth] = useState(initialFieldWidth);
    const [fieldHeight, setFieldHeight] = useState(initialFieldHeight);
    const [direction, setDirection] = useState(initialDirection);
    const [score, setScore] = useState(initialScore);
    const [snakeBody, setSnakeBody] = useState(initialBody);
    const [snakeHead, setSnakeHead] = useState(initialHead);

    const initialField = createField(fieldWidth, fieldHeight);
    const initialScorePosition = { x: getRandom(fieldWidth), y: getRandom(fieldHeight) };

    const [field, setField] = useState(initialField);
    const [scorePosition, setScorePosition] = useState(initialScorePosition);

    const [initialStates, setInititalStates] = useState([
        initialGameState,
        initialDifficulty,
        initialUpdateTime,
        initialFieldWidth,
        initialFieldHeight,
        initialDirection,
        initialScore,
        initialBody,
        initialHead,
        initialField,
        initialScorePosition,
    ]);
    const [resetTools, setResetTools] = useState([
        setGameState,
        setDifficulty,
        setUpdateTime,
        setFieldWidth,
        setFieldHeight,
        setDirection,
        setScore,
        setSnakeBody,
        setSnakeHead,
        setField,
        setScorePosition,
    ]);

    useEffect(() => {
        if (gameState === "game") {
            const gameUpdateInterval = setInterval(() => {
                moveHead(snakeHead, direction, setSnakeHead, fieldWidth, fieldHeight, difficulty, setGameState);
                takeScore(
                    updateTime,
                    setUpdateTime,
                    score,
                    setScore,
                    snakeHead,
                    snakeBody,
                    scorePosition,
                    setScorePosition,
                    fieldWidth,
                    fieldHeight
                );
                moveBody(snakeHead, snakeBody, setSnakeBody, setGameState);
                drawField(initialField, setField, snakeHead, snakeBody, scorePosition, fieldWidth, fieldHeight);
            }, updateTime);

            return () => clearInterval(gameUpdateInterval);
        }
    });

    return (
        <>
            {(gameState === "start" && (
                <StartGame
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    fieldWidth={fieldWidth}
                    fieldHeight={fieldHeight}
                    setFieldWidth={setFieldWidth}
                    setFieldHeight={setFieldHeight}
                    setGameState={setGameState}
                    setLoader={setLoader}
                    setUpdateTime={setUpdateTime}
                />
            )) ||
                (gameState === "game" && (
                    <>
                        {loader === true && <Loader setLoader={setLoader} />}
                        <div className="wrapper">
                            <div className="wrapper__container">
                                <Game
                                    field={field}
                                    pieceSize={pieceSize}
                                    scoreRadius={scoreRadius}
                                    fieldWidth={fieldWidth}
                                    fieldHeight={fieldHeight}
                                    scorePosition={scorePosition}
                                />
                                <Info difficulty={difficulty} score={score} updateTime={updateTime} />
                            </div>
                            <Controls direction={direction} setDirection={setDirection} />
                        </div>
                    </>
                )) ||
                (gameState === "end" && (
                    <EndGame
                        difficulty={difficulty}
                        fieldWidth={fieldWidth}
                        fieldHeight={fieldHeight}
                        score={score}
                        resetTools={resetTools}
                        initialStates={initialStates}
                    />
                ))}
        </>
    );
}

export default Main;
