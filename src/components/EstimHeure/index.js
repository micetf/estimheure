import { useState } from "react";
import Aide from "./Aide.js";
import AideButton from "./AideButton.js";
import Partie from "./Partie";

function HestimHeure() {
    const [visibiliteAide, setVisibiliteAide] = useState(false);
    function ouvrirAide() {
        setVisibiliteAide(true);
    }
    function fermerAide() {
        setVisibiliteAide(false);
    }
    return (
        <div className="container">
            <AideButton ouvrirAide={ouvrirAide} />
            <Partie />
            <Aide visibiliteAide={visibiliteAide} fermerAide={fermerAide} />
        </div>
    );
}

export default HestimHeure;
