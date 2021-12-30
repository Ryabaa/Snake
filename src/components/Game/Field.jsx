import React, { useRef, useEffect } from "react";

function Field() {
    const canvas = useRef();
    const ctx = canvas.current.getContext("2d");

    const updateCanvas = () => {
        ctx.fillRect(0, 0, 300, 300);
    };

    useEffect(() => {
        updateCanvas();
    });

    return <canvas ref={canvas} className="canvas"></canvas>;
}

export default Field;
