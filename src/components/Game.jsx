import React from "react";
import { Layer, Rect, Stage, Circle } from "react-konva";

function Game({ field, pieceSize, scoreRadius, fieldWidth, fieldHeight, scorePosition }) {
    return (
        <Stage width={fieldWidth * pieceSize} height={fieldHeight * pieceSize} className="game">
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
                                strokeWidth={0.1}
                                fill={(piece === 1 && "#e63946") || (piece === 2 && "#e6c742") || "#1c222b"}
                                stroke={(piece === 1 && "#00000000") || (piece === 2 && "#00000000") || "#ebf2fa85"}
                            />

                            {piece === 3 && (
                                <Circle
                                    key={"Circle " + x}
                                    x={scorePosition.x * pieceSize + pieceSize / 2}
                                    y={scorePosition.y * pieceSize + pieceSize / 2}
                                    radius={scoreRadius}
                                    fill="#e63946"
                                />
                            )}
                        </>
                    ))
                )}
            </Layer>
        </Stage>
    );
}

export default Game;
