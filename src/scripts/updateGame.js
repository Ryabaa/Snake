import moveHead from "./moveHead.js";
import moveBody from "./moveBody.js";
import takeScore from "./takeScore.js";
import drawField from "./drawField.js";

function updateGame(
    score,
    setScore,
    setField,
    direction,
    setSnakeBody,
    setSnakeHead,
    snakeHead,
    snakeBody,
    scorePosition,
    setScorePosition,
    fieldWidth,
    fieldHeight
) {
    moveHead(snakeHead, direction, setSnakeHead, fieldWidth, fieldHeight);
    takeScore(score, setScore, snakeHead, snakeBody, scorePosition, setScorePosition, fieldWidth, fieldHeight);
    moveBody(snakeHead, snakeBody, setSnakeBody);
    drawField(setField, snakeHead, snakeBody, scorePosition);
}

export default updateGame;
