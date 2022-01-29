import React, { useState, useCallback } from "react";

import DifficultyButton from "./Difficulty Button";
import FieldSizeButton from "./FieldSize Button";

import { BsPlayCircle } from "react-icons/bs";
import { IconContext } from "react-icons";

const initialDifficultyButtons = [{ value: "Easy" }, { value: "Medium" }, { value: "Hard" }];
const initialFieldSizeButtons = [
    { name: "10x10", value: { width: 10, height: 10 } },
    { name: "15x15", value: { width: 15, height: 15 } },
    { name: "25x25", value: { width: 25, height: 25 } },
];

function StartGame({
    difficulty,
    setDifficulty,
    fieldWidth,
    fieldHeight,
    setFieldWidth,
    setFieldHeight,
    setGameState,
    setLoader,
    setUpdateTime,
}) {
    const [difficultyButtons, setDifficultyButtons] = useState(initialDifficultyButtons);
    const [fieldSizeButtons, setFieldSizeButtons] = useState(initialFieldSizeButtons);

    const handleChangeGameState = () => {
        setLoader(true);
        setGameState("game");
    };

    const editButtons = useCallback(
        (newButton, buttonIndex, buttonsName) => {
            if (buttonsName === "Difficulty") {
                let newButtons = [...difficultyButtons];
                newButtons.splice(buttonIndex, 1, newButton);
                setDifficultyButtons(newButtons);
            }
            if (buttonsName === "FieldSize") {
                let newButtons = [...fieldSizeButtons];
                newButtons.splice(buttonIndex, 1, newButton);
                setFieldSizeButtons(newButtons);
            }
        },
        [difficultyButtons, fieldSizeButtons]
    );

    return (
        <div className="start">
            <div className="start__play-container" onClick={handleChangeGameState}>
                <IconContext.Provider value={{ className: "start__icon" }}>
                    <BsPlayCircle />
                </IconContext.Provider>
                <p className="start__text">Play</p>
            </div>

            <div className="start__options-container">
                <div className="option-card">
                    <p className="option-card__text">Difficulty</p>
                    <div className="option-card__line"></div>
                    <div className="option-card__menu">
                        {difficultyButtons.map((button, buttonIndex) => (
                            <DifficultyButton
                                key={buttonIndex}
                                button={button}
                                buttonIndex={buttonIndex}
                                editButtons={editButtons}
                                difficulty={difficulty}
                                setDifficulty={setDifficulty}
                                setUpdateTime={setUpdateTime}
                            />
                        ))}
                    </div>
                    <p className="option-card__description-title">Description: </p>
                    <p className="option-card__description">
                        {(difficulty === "Easy" && "No death from the walls, slow snake speed") ||
                            (difficulty === "Medium" && "Death by the walls, medium snake speed") ||
                            (difficulty === "Hard" && "Death by the walls, quick snake speed")}
                    </p>
                </div>

                <div className="option-card">
                    <p className="option-card__text">Field Size</p>
                    <div className="option-card__line"></div>
                    <div className="option-card__menu">
                        {fieldSizeButtons.map((button, buttonIndex) => (
                            <FieldSizeButton
                                key={buttonIndex}
                                button={button}
                                buttonIndex={buttonIndex}
                                editButtons={editButtons}
                                fieldWidth={fieldWidth}
                                fieldHeight={fieldHeight}
                                setFieldWidth={setFieldWidth}
                                setFieldHeight={setFieldHeight}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartGame;
