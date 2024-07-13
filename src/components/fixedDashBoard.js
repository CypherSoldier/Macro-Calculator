import React, { useState } from 'react';
import ActivityLevel from './aLevel';
import InputInfo from './newInput';
import ProteinCalories from './outputInfo';

function FixedDashBoard() {
    const [userInfo, setUserInfo] = useState({});
    const [results, setResults] = useState({});

    return (
        <div>
            <header>
                <nav id="navbar">
                    <ul>
                        <li>
                            <a href="#workout_templates">Workout</a>
                        </li>
                        <li>
                            <a href="#transformations">Transformations</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="page-title">Macro Calculator</div>
            <div className="page-subtitle">based on the Harris Benedict Formula</div>
            <div className="calculator">
                <InputInfo setUserInfo={setUserInfo} />
                <ActivityLevel userInfo={userInfo} setResults={setResults} />
                <ProteinCalories results={results} />
            </div>
        </div>
    );
}

export default FixedDashBoard;
