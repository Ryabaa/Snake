import React, { useState } from "react";

import { BsFullscreen } from "react-icons/bs";
import { BsFullscreenExit } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useEffect } from "react/cjs/react.development";

const initialFullscreen = false;

function Fullscreen({ difficulty, resetTools, initialStates }) {
    const [fullscreenActive, setFullscreenActive] = useState(initialFullscreen);

    const handleFullscreen = () => {
        fullscreenActive ? setFullscreenActive(false) : setFullscreenActive(true);
    };

    useEffect(() => {
        fullscreenActive ? document.documentElement.requestFullscreen() : document.exitFullscreen();
    });

    return (
        <div className="fullscreen-container">
            <button onClick={handleFullscreen} className="fullscreen-button">
                {fullscreenActive ? (
                    <IconContext.Provider value={{ className: "fullscreen-icon" }}>
                        <BsFullscreenExit />
                    </IconContext.Provider>
                ) : (
                    <IconContext.Provider value={{ className: "fullscreen-icon" }}>
                        <BsFullscreen />
                    </IconContext.Provider>
                )}
            </button>
        </div>
    );
}

export default Fullscreen;
