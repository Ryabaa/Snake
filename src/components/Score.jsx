import React from "react";

export default function Score({ score }) {
    return (
        <div className="score">
            <p className="score__text">Score: {score}</p>
        </div>
    );
}
