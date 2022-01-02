import React, { useState, useCallback } from "react";

import Field from "./Field.jsx";
import Score from "./Score.jsx";

export default function Game() {
    const [score, setScore] = useState(0);

    const incrementScore = useCallback(() => {
        setScore(score + 1);
    }, [score]);

    return (
        <div className="game">
            <Score score={score} />
            <Field incrementScore={incrementScore} />
        </div>
    );
}
