function drawField(initialField, setField, snakeHead, snakeBody, scorePosition, fieldWidth, fieldHeight) {
    let newField = initialField;

    newField[scorePosition.y][scorePosition.x] = 3;

    newField.forEach((row, y) => {
        snakeBody.forEach((piece, i) => {
            if (y === piece.y) {
                row.forEach((el, x) => {
                    if (x === piece.x) {
                        newField[y][x] = 2;
                    }
                });
            }
        });
    });

    newField[snakeHead.y][snakeHead.x] = 1;

    setField(newField);
}

export default drawField;
