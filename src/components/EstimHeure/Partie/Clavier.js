import React from "react";
import H0 from "./img/0.png";
import H1 from "./img/1.png";
import H2 from "./img/2.png";
import H3 from "./img/3.png";
import H4 from "./img/4.png";
import H5 from "./img/5.png";
import H6 from "./img/6.png";
import H7 from "./img/7.png";
import H8 from "./img/8.png";
import H9 from "./img/9.png";
import H10 from "./img/10.png";
import H11 from "./img/11.png";
import { useRef, useEffect, useState } from "react";

const horloges = [H0, H1, H2, H3, H4, H5, H6, H7, H8, H9, H10, H11];

function Horloge({ heure, handleReponse }) {
    const [loading, setLoading] = useState(true);
    const refHorloge = useRef(null);

    function handleClick(e) {
        e.preventDefault();
        handleReponse(e.target.dataset.reponse);
    }
    useEffect(() => {
        refHorloge.current.onload = () => setLoading(false);
    });
    return (
        <img
            ref={refHorloge}
            data-reponse={heure}
            className={loading ? "touche invisible" : "touche visible"}
            onClick={handleClick}
            src={horloges[heure]}
            alt={heure}
        />
    );
}

function Clavier({ handleReponse }) {
    return (
        <div className="d-flex justify-content-around">
            {Array.from({ length: 12 }).map((_, heure) => (
                <Horloge
                    key={heure}
                    heure={heure}
                    handleReponse={handleReponse}
                />
            ))}
        </div>
    );
}

export default Clavier;
