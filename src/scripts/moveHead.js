function moveHead(snakeHead, setDirection, direction, setSnakeHead, fieldWidth, fieldHeight, difficulty, setGameState) {
    let { x, y } = snakeHead;

    const moveFunction = (direction) => {
        switch (direction) {
            case "up":
                y -= 1;
                break;
            case "left":
                x -= 1;
                break;
            case "down":
                y += 1;
                break;
            case "right":
                x += 1;
                break;

            default:
                break;
        }
        return { x, y };
    };

    const controlKeys = [
        { name: "w", value: "up", locking: "down" },
        { name: "a", value: "left", locking: "right" },
        { name: "s", value: "down", locking: "up" },
        { name: "d", value: "right", locking: "left" },
    ];

    const handleKeyDown = (event, direction) => {
        controlKeys.forEach((key) => {
            if (direction !== key.locking && event.key === key.name) {
                moveFunction(key.value);
                setDirection(key.value);
                moveHead();
            }
        });
    };

    onkeydown = (event) => handleKeyDown(event, direction);
    moveFunction(direction);

    if (difficulty === "Easy") {
        switch (x) {
            case fieldWidth:
                x = 0;
                break;
            case -1:
                x = fieldWidth - 1;
                break;

            default:
                break;
        }

        switch (y) {
            case fieldHeight:
                y = 0;
                break;
            case -1:
                y = fieldHeight - 1;
                break;

            default:
                break;
        }
    } else {
        if (x === fieldWidth + 1 || x === -2 || y === fieldHeight + 1 || y === -2) setGameState("end");
    }

    setSnakeHead({ x: x, y: y });
}

export default moveHead;
