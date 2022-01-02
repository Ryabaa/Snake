import React, { useRef, useEffect } from "react";

function Field() {
    const canvasRef = useRef(null);

    const updateCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        for (var x = 0.5; x < 400; x += 10) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, 400);
        }

        for (var y = 0.5; y < 400; y += 10) {
            ctx.moveTo(0, y);
            ctx.lineTo(400, y);
        }

        ctx.strokeStyle = "#888";
        ctx.stroke();
    };

    useEffect(() => {
        updateCanvas();
    });

    return (
        <>
            <canvas ref={canvasRef} className="canvas"></canvas>
        </>
    );
}

export default Field;
