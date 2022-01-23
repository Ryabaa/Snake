import React from "react";

function Controls({ direction, setDirection }) {
    const handleKeyDown = (event, direction) => {
        if (event.key === "w" && direction !== "down") direction = "up";
        if (event.key === "a" && direction !== "right") direction = "left";
        if (event.key === "s" && direction !== "up") direction = "down";
        if (event.key === "d" && direction !== "left") direction = "right";

        setDirection(direction);
    };

    onkeydown = (event) => handleKeyDown(event, direction);

    return <div className="controls"></div>;
}

export default Controls;
