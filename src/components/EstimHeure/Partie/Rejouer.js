import React from "react";

function Rejouer({ rejouer }) {
    function handleClick(e) {
        e.preventDefault();
        rejouer();
    }
    return (
        <div className="row text-center">
            <button className="btn btn-primary btn-lg" onClick={handleClick}>
                Rejouer
            </button>
        </div>
    );
}

export default Rejouer;
