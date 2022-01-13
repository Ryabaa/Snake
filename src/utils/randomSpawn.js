function randomSpawn(x, y, setScorePosition) {
    x = Math.floor(Math.random() * x + 1);
    y = Math.floor(Math.random() * y + 1);
    setScorePosition({ x: x, y: y });
}

export default randomSpawn;
