function resetGame(resetTools, initialStates) {
    for (let i = 0; i < resetTools.length; i++) {
        resetTools[i](initialStates[i]);
    }
}

export default resetGame;
