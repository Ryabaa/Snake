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
                <p className="info__value">{(score === 0 && "000") || (score < 10 && "00" + score) || (score < 100 && "0" + score)}</p>
            </div>

            <div className="info__container">
                <p className="info__text">Speed</p>
                <p className="info__value">
                    {(score === 0 && "000") || (score < 10 && "00" + score * 10 && score < 100 && "0" + score * 10)}
                </p>
            </div>
        </div>
    );
}

export default Info;
