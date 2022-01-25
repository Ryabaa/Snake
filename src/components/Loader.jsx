import React, { useState, useEffect } from "react";

function Loader({ setLoader }) {
    let [time, setTime] = useState(3);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            if (time > 1) {
                setTime((time -= 1));
            } else {
                setTime("GO");
                setTimeout(() => {
                    setLoader(false);
                }, 700);
            }
        }, 400);

        return () => clearInterval(timeInterval);
    });

    return (
        <div className="loader">
            <p className="loader__text">{time}</p>
        </div>
    );
}

export default Loader;
