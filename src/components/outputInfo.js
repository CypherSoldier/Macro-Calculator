import React from 'react';

function ProteinCalories({ results }) {
    const { protein, calories } = results;
    //const { protein = 0, calories = 0 } = results || {};

    return (
        <div className="third-page-form" id="calculate">
            <h6>Your Protein & Calories</h6>
            <div className="output">
                <div className="results">
                    <span>Protein target (g)</span>
                    <p id="protein">{Math.round(protein)}</p>
                </div>
                <div className="results0">
                    <span>Calories target</span>
                    <p id="calorie">{Math.round(calories)}</p>
                </div>
            </div>
        </div>
    );
}

export default ProteinCalories;
