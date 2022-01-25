import React from "react";

function Info({ difficulty, score, updateTime }) {
    return (
        <div className="info">
            <div className="info__container">
                <p className="info__text">Difficulty</p>
                <p className="info__value">{difficulty}</p>
            </div>

            <div className="info__container">
                <p className="info__text">Score</p>
                <p className="info__value">{score}</p>
            </div>

            <div className="info__container">
                <p className="info__text">Speed</p>
                <p className="info__value">{score * 10}</p>
            </div>
        </div>
    );
}

export default Info;
