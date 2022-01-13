function moveHead(x, y, direction, setSnakeHead) {
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
        case 14:
            x = 0;
            break;
        case -1:
            x = 14;
            break;

        default:
            break;
    }

    switch (y) {
        case 14:
            y = 0;
            break;
        case -1:
            y = 14;
            break;

        default:
            break;
    }

    setSnakeHead({ x: x, y: y });
}

export default moveHead;
