import React, { useState, useEffect } from 'react';

function ActivityLevel({ userInfo, setResults }) {
    const [optionValue, setOptionValue] = useState('');
    const { gender, weight, height, age } = userInfo;

    const handleInputChangeOption = (option) => {
        setOptionValue(option);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        calculateAll();
    }

    const calculateAll = () => {
        let bmrValue = 0;
        if (gender === 'Male') {
            bmrValue = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
        } else if (gender === 'Female') {
            bmrValue = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
        }

        let calorieValue = 0;
        switch (optionValue) {
            case 'sedentary':
                calorieValue = bmrValue * 1.2;
                break;
            case 'lightly':
                calorieValue = bmrValue * 1.375;
                break;
            case 'moderately':
                calorieValue = bmrValue * 1.55;
                break;
            case 'very':
                calorieValue = bmrValue * 1.725;
                break;
            case 'extra':
                calorieValue = bmrValue * 1.9;
                break;
            default:
                calorieValue = 0;
                break;
        }

        const proteinValue = 1.5 * weight;
        setResults({ protein: proteinValue, calories: calorieValue });
    };

    return (
        <div className="second-page-form" id="next">
            <h6>My activity level is...</h6>
            <form onSubmit={handleFormSubmit}>
                <div className="options">
                    <button
                        className={`amount ${optionValue === 'sedentary' ? 'selected' : ''}`}
                        onClick={() => handleInputChangeOption('sedentary')}
                        type="button"
                    >
                        <span className="details">Sedentary</span>
                        <span className="sub-details">Little or no exercise</span>
                    </button>
                </div>
                <div className="options">
                    <button
                        className={`amount ${optionValue === 'lightly' ? 'selected' : ''}`}
                        onClick={() => handleInputChangeOption('lightly')}
                        type="button"
                    >
                        <span className="details">Lightly active</span>
                        <span className="sub-details">1-3 days a week</span>
                    </button>
                </div>
                <div className="options">
                    <button
                        className={`amount ${optionValue === 'moderately' ? 'selected' : ''}`}
                        onClick={() => handleInputChangeOption('moderately')}
                        type="button"
                    >
                        <span className="details">Moderately active</span>
                        <span className="sub-details">3-5 days a week</span>
                    </button>
                </div>
                <div className="options">
                    <button
                        className={`amount ${optionValue === 'very' ? 'selected' : ''}`}
                        onClick={() => handleInputChangeOption('very')}
                        type="button"
                    >
                        <span className="details">Very active</span>
                        <span className="sub-details">6-7 days a week</span>
                    </button>
                </div>
                <div className="options">
                    <button
                        className={`amount ${optionValue === 'extra' ? 'selected' : ''}`}
                        onClick={() => handleInputChangeOption('extra')}
                        type="button"
                    >
                        <span className="details">Extra active</span>
                        <span className="sub-details">Sports and physical job or 2x training</span>
                    </button>
                </div>
                <div className="radio-form-item-1">
                    <a href="#calculate">
                        <button className="button-next" type="submit">Calculate</button>
                    </a>
                </div>
            </form>
        </div>
    );
}

export default ActivityLevel;
