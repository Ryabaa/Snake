import React from "react";

export default function Info({ gameWidth, score }) {
    return (
        <div style={{ width: gameWidth }} className="info">
            <div className="info__container">
                <p className="info__text">Difficult</p>
                <p className="info__value">Easy</p>
            </div>

            <div className="info__container">
                <p className="info__text">Score</p>
                <p className="info__value">{score}</p>
            </div>
        </div>
    );
}
