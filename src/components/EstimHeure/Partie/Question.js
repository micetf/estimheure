import React from "react";

function Question({ h, min }) {
    return (
        <div className="text-center question px-4">
            {new Intl.NumberFormat("fr-FR", {
                minimumIntegerDigits: 2,
            }).format(h)}
            :
            {new Intl.NumberFormat("fr-FR", {
                minimumIntegerDigits: 2,
            }).format(min)}
        </div>
    );
}

export default Question;
