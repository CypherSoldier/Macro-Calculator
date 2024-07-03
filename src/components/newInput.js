import React, { useState, useEffect } from 'react';

function InputInfo({ setUserInfo }) {
    const [genderValue, setGenderValue] = useState('');
    const [ageValue, setAgeValue] = useState(18);
    const [heightValue, setHeightValue] = useState(130);
    const [weightValue, setWeightValue] = useState(40);

    useEffect(() => {
        const allRanges = document.querySelectorAll(".value");
        allRanges.forEach(wrap => {
            const range = wrap.querySelector(".range");
            const bubble = wrap.querySelector(".bubble");
            range.addEventListener("input", () => {
                setBubble(range, bubble);
            });
            setBubble(range, bubble);
        });
    }, []);

    function setBubble(range, bubble) {
        const val = range.value;
        bubble.innerHTML = val;
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const userInfo = {
            gender: genderValue,
            age: ageValue,
            height: heightValue,
            weight: weightValue,
        };
        setUserInfo(userInfo);
    };

    return (
        <div className="page-form">
            <form onSubmit={handleFormSubmit}>
                <h6>Gender</h6>
                <div className="male-female-row">
                    <div className="radio-form-item">
                        <button
                            id="female"
                            onClick={() => setGenderValue('Female')}
                            className={`button ${genderValue === 'Female' ? 'selected' : ''}`}
                            type="button"
                        >
                            Female
                        </button>
                    </div>
                    <div className="radio-form-item">
                        <button
                            id="male"
                            onClick={() => setGenderValue('Male')}
                            className={`button ${genderValue === 'Male' ? 'selected' : ''}`}
                            type="button"
                        >
                            Male
                        </button>
                    </div>
                </div>
                <div id="ageV" className="value">
                    <h6 className="input-form-items">
                        <span>Age</span>
                        <span><output className="bubble"></output></span>
                    </h6>
                    <div>
                        <input
                            id="age"
                            type="range"
                            className="range"
                            name="quantity"
                            min="18"
                            max="60"
                            value={ageValue}
                            onChange={(e) => setAgeValue(e.target.value)}
                        />
                    </div>
                </div>
                <div id="heightV" className="value">
                    <h6 className="input-form-items">
                        <span>Height (cm)</span>
                        <span><output className="bubble"></output></span>
                    </h6>
                    <div>
                        <input
                            id="height"
                            type="range"
                            className="range"
                            min="130"
                            max="220"
                            value={heightValue}
                            onChange={(e) => setHeightValue(e.target.value)}
                        />
                    </div>
                </div>
                <div id="weightV" className="value">
                    <h6 className="input-form-items">
                        <span>Weight (kg)</span>
                        <span><output className="bubble"></output></span>
                    </h6>
                    <div>
                        <input
                            id="weight"
                            type="range"
                            className="range"
                            name="quantity"
                            min="40"
                            max="140"
                            value={weightValue}
                            onChange={(e) => setWeightValue(e.target.value)}
                        />
                    </div>
                </div>
                <div className="radio-form-item-1">
                    <a href="#next">
                        <button className="button-next" type="submit">
                            Next
                        </button>
                    </a>
                </div>
            </form>
        </div>
    );
}

export default InputInfo;