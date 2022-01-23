function moveHead(snakeHead, direction, setSnakeHead, fieldWidth, fieldHeight) {
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
            x = 0;
            break;
        case -1:
            x = fieldWidth;
            break;

        default:
            break;
    }

    switch (y) {
        case fieldHeight:
            y = 0;
            break;
        case -1:
            y = fieldHeight;
            break;

        default:
            break;
    }

    setSnakeHead({ x: x, y: y });
}

export default moveHead;
