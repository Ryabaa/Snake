import React, { useEffect, useState, useCallback } from "react";
import { Layer, Rect, Stage, Circle } from "react-konva";

import Controls from "./Controls.jsx";
import Score from "./Score.jsx";

import createField from "../utils/createField.js";
import updateField from "../utils/updateField.js";
import randomSpawn from "../utils/randomSpawn.js";
import moveHead from "../utils/moveHead.js";

const initialField = createField(28, 28);
const pieceSize = 24;

function Game() {
    const [field, setField] = useState(initialField);
    const [score, setScore] = useState(0);
    const [direction, setDirection] = useState("right");
    const [snakeTail, setSnakeTail] = useState([{ x: 0, y: 0 }]);
    const [snakeHead, setSnakeHead] = useState({ x: 0, y: 0 });
    const [scorePosition, setScorePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let { x, y } = snakeHead;
        const gameUpdateInterval = setInterval(() => {
            moveHead(x, y, direction, setSnakeHead);
            updateField(field, setField, snakeHead);
            randomSpawn(x, y, setScorePosition);
        }, 350);
        return () => clearInterval(gameUpdateInterval);
    });

    const incrementScore = useCallback(() => {
        setScore(score + 1);
    }, [score]);

    return (
        <div className="wrapper">
            <Score score={score} />

            <Stage width={480} height={480} className="game">
                <Layer>
                    {field.map((row, y) =>
                        row.map((piece, x) => (
                            <>
                                <Rect
                                    key={"Rect " + x}
                                    x={x * pieceSize}
                                    y={y * pieceSize}
                                    width={pieceSize}
                                    height={pieceSize}
                                    strokeWidth={0.2}
                                    fill={piece === 1 ? "white" : "#263445"}
                                    stroke="#ebf2fa70"
                                />

                                {piece === 2 && (
                                    <Circle
                                        key={"Circle " + x}
                                        x={scorePosition.x * pieceSize + pieceSize / 2}
                                        y={scorePosition.y * pieceSize + pieceSize / 2}
                                        radius={6}
                                        fill="yellow"
                                    />
                                )}
                            </>
                        ))
                    )}
                </Layer>
            </Stage>

            <Controls direction={direction} setDirection={setDirection} />
        </div>
    );
}

export default Game;
