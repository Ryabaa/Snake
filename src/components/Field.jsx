import React, { useRef, useEffect } from "react";

function Field({ incrementScore }) {
    const canvasRef = useRef(null);

    const updateCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "#c7a7e7";
        ctx.fillRect(0, 0, 360, 360);

        for (let x = 30; x < 360; x += 30) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, 360);
        }
        for (let y = 30; y < 360; y += 30) {
            ctx.moveTo(0, y);
            ctx.lineTo(360, y);
        }

        ctx.strokeStyle = "#5d346d";
        ctx.stroke();
    };

    useEffect(() => {
        updateCanvas();
    });

    return (
        <>
            <canvas width="360px" height="360px" ref={canvasRef} className="field"></canvas>
        </>
    );
}

export default Field;
