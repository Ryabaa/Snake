import React from "react";

function Controls({ direction, setDirection }) {
    const handleKeyDown = (event, direction) => {
        const keys = [
            { name: "w", value: "up" },
            { name: "a", value: "left" },
            { name: "s", value: "down" },
            { name: "d", value: "right" },
        ];

        keys.forEach((key) => {
            if (key.name === event.key) {
                direction = key.value;
            }
        });

        setDirection(direction);
    };

    onkeydown = (event) => handleKeyDown(event, direction);

    return <div className="controls"></div>;
}

export default Controls;
