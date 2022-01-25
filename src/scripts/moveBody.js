function moveBody(snakeHead, snakeBody, setSnakeBody, setGameState) {
    if (snakeBody.length !== 0) {
        let newSnakeBody = snakeBody.map((piece, i) => {
            if (i === snakeBody.length - 1) {
                return { ...snakeHead };
            }
            return { ...snakeBody[i + 1] };
        });

        setSnakeBody(newSnakeBody);

        snakeBody.forEach((piece) => {
            if (snakeHead.y === piece.y && snakeHead.x === piece.x) {
                setGameState("end");
            }
        });
    }
}

export default moveBody;
