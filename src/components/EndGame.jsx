import React from "react";
import resetGame from "../utils/resetGame";

export default function EndGame({ difficulty, fieldWidth, fieldHeight, score, resetTools, initialStates }) {
    const handleResetGame = () => {
        resetGame(resetTools, initialStates);
    };

    return (
        <div className="end">
            <p className="end__title">Game end</p>
            <p className="end__score">{score}</p>
            <div className="end__container">
                <div className="end__card">
                    <p className="end__text">Difficulty</p>
                    <div className="end__line"></div>
                    <p className="end__value">{difficulty}</p>
                </div>
                <div className="end__card">
                    <p className="end__text">Field size</p>
                    <div className="end__line"></div>
                    <p className="end__value">{`${fieldWidth}x${fieldHeight}`}</p>
                </div>
            </div>
            <button onClick={handleResetGame} className="end__button">
                Try again!
            </button>
        </div>
    );
}
