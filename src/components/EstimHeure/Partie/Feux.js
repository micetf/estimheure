import React from "react";

function Feux({ correction }) {
    return (
        <div className="d-flex justify-content-around">
            {correction.map((couleur, index) => (
                <div key={index} className={"feux " + couleur}></div>
            ))}
        </div>
    );
}

export default Feux;
