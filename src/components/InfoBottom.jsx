import React from "react";

import resetGame from "../utils/resetGame";

import { VscDebugRestart } from "react-icons/vsc";
import { IconContext } from "react-icons";

function InfoBottom({ difficulty, resetTools, initialStates }) {
    const handleRestart = () => {
        resetGame(resetTools, initialStates);
    };

    return (
        <div className="bottom-info">
            <div className="bottom-info__container">
                <div className="option-card__description">
                    <p className="option-card__description-title">Description: </p>
                    {(difficulty === "Easy" && "No death from the walls, slow snake speed") ||
                        (difficulty === "Medium" && "Death by the walls, medium snake speed") ||
                        (difficulty === "Hard" && "Death by the walls, quick snake speed")}
                </div>
            </div>
            <button onClick={handleRestart} className="bottom-info__restart-btn">
                <IconContext.Provider value={{ className: "bottom-info__restart-icon" }}>
                    <VscDebugRestart />
                </IconContext.Provider>
                <p className="bottom-info__restart-text">Restart</p>
            </button>
        </div>
    );
}

export default InfoBottom;
