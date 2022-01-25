import React from "react";

function DifficultyButton({ button, buttonIndex, editButtons, difficulty, setDifficulty, setUpdateTime }) {
    const { value } = button;

    const handleChangeDifficulty = () => {
        (value === "Easy" && setUpdateTime(500)) || (value === "Medium" && setUpdateTime(400)) || (value === "Hard" && setUpdateTime(300));
        setDifficulty(value);
        editButtons({ value: value }, buttonIndex, "Difficulty");
    };

    return (
        <button
            className={difficulty === value ? "option-card__button option-card__button_active" : "option-card__button"}
            onClick={handleChangeDifficulty}>
            {value}
        </button>
    );
}

export default DifficultyButton;
