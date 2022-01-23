import React from "react";

import { BsPlayCircle } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function StartGame({ difficult }) {
    return (
        <div className="start">
            <div className="start__play-container">
                <IconContext.Provider value={{ className: "start__icon" }}>
                    <BsPlayCircle />
                </IconContext.Provider>
                <p className="start__text">Play</p>
            </div>

            <div className="start__options-container">
                <div className="option-card">
                    <p className="option-card__text">Difficult</p>
                    <div className="option-card__line"></div>
                    <div className="option-card__menu">
                        <button className="option-card__button">Easy</button>
                        <button className="option-card__button">Hard</button>
                    </div>
                </div>

                <div className="option-card">
                    <p className="option-card__text">Field Size</p>
                    <div className="option-card__line"></div>
                    <div className="option-card__menu">
                        <button className="option-card__button">7x7</button>
                        <button className="option-card__button">15x15</button>
                        <button className="option-card__button">25x25</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
