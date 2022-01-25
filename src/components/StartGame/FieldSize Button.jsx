import React from "react";

function FieldSizeButton({ button, buttonIndex, editButtons, fieldWidth, fieldHeight, setFieldWidth, setFieldHeight }) {
    const { name, value } = button;

    const handleChangeFieldSize = () => {
        setFieldWidth(value.width);
        setFieldHeight(value.height);
        editButtons({ name: name, value: value }, buttonIndex, "FieldSize");
    };

    return (
        <button
            className={
                fieldWidth === value.width && fieldHeight === value.height
                    ? "option-card__button option-card__button_active"
                    : "option-card__button"
            }
            onClick={handleChangeFieldSize}>
            {name}
        </button>
    );
}

export default FieldSizeButton;
