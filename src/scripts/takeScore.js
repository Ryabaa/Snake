import getRandom from "../utils/getRandom";

function takeScore(score, setScore, snakeHead, snakeBody, scorePosition, setScorePosition, fieldWidth, fieldHeight) {
    if (scorePosition.y === snakeHead.y && scorePosition.x === snakeHead.x) {
        snakeBody.unshift({});
        setScore((score += 1));
        setScorePosition({ x: getRandom(fieldWidth), y: getRandom(fieldHeight) });
    }
}

export default takeScore;
