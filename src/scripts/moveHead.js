function moveHead(snakeHead, direction, setSnakeHead, fieldWidth, fieldHeight, difficulty, setGameState) {
    let { x, y } = snakeHead;

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

    switch (x) {
        case fieldWidth:
            difficulty === "Easy" ? (x = 0) : setGameState("end");
            break;
        case -1:
            difficulty === "Easy" ? (x = fieldWidth - 1) : setGameState("end");
            break;
        default:
            break;
    }

    switch (y) {
        case fieldHeight:
            difficulty === "Easy" ? (y = 0) : setGameState("end");
            break;
        case -1:
            difficulty === "Easy" ? (y = fieldHeight - 1) : setGameState("end");
            break;
        default:
            break;
    }

    setSnakeHead({ x: x, y: y });
}

export default moveHead;
