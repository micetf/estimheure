import React, { useState } from "react";
import Clavier from "./Clavier.js";
import Question from "./Question.js";
import Feux from "./Feux.js";
import Resultats from "./Resultats.js";
import Rejouer from "./Rejouer.js";
import SelectMoment from "./SelectMoment.js";

const minutes = [5, 10, 15, 20, 25, 35, 40, 45, 50, 55];
function getHoraire(precedent, plage) {
    const start = plage !== "pm" ? 0 : 12;
    const amplitude = plage !== "journee" ? 12 : 24;
    do {
        const h = start + Math.floor(Math.random() * amplitude);
        const min = minutes[Math.floor(Math.random() * minutes.length)];
        if (precedent.min !== min)
            return {
                h,
                min,
            };
    } while (true);
}
const partieInitiale = getHoraire({ h: 0, min: 0 }, "am");
const correctionInitiale = Array.from({ length: 10 }).fill("");
function index() {
    const [correction, setCorrection] = useState(correctionInitiale);
    const [partie, setPartie] = useState(partieInitiale);
    const [parties, setParties] = useState([]);
    const [plage, setPlage] = useState(12);

    function handleReponse(reponse) {
        const h = parseInt(partie.h, 10);
        const min = parseInt(partie.min, 10);
        const pm = h < 12 ? 0 : 12;
        const presque = min < 30 ? h : h + 1;

        const indexPartie = correction.findIndex((c) => c === "");
        if (indexPartie !== -1) {
            if (
                presque === parseInt(reponse, 10) + pm ||
                presque === parseInt(reponse, 10) + pm + 12
            ) {
                setCorrection([
                    ...correction.slice(0, indexPartie),
                    "vert",
                    ...correction.slice(indexPartie + 1),
                ]);
            } else {
                setCorrection([
                    ...correction.slice(0, indexPartie),
                    "rouge",
                    ...correction.slice(indexPartie + 1),
                ]);
            }
            setParties([
                ...parties,
                {
                    ...partie,
                    presque,
                    reponse: parseInt(reponse, 10) + pm,
                },
            ]);
            if (indexPartie !== 9) {
                setPartie(getHoraire({ h, min }, plage));
            }
        }
    }
    function rejouer() {
        setParties([]);
        setPartie(getHoraire({ h: 0, min: 0 }, plage));
        setCorrection(correctionInitiale);
    }
    function changerPlage(nextPlage) {
        setPlage(nextPlage);
        setParties([]);
        setPartie(getHoraire({ h: 0, min: 0 }, nextPlage));
        setCorrection(correctionInitiale);
    }
    return (
        <div className="container fixed-bottom mb-5">
            <SelectMoment plage={plage} changerPlage={changerPlage} />
            <Feux correction={correction} />
            {parties.length !== 10 ? (
                <>
                    <Question
                        plage={plage}
                        changerPlage={changerPlage}
                        {...partie}
                    />
                    <Clavier handleReponse={handleReponse} />
                </>
            ) : (
                <>
                    <Resultats parties={parties} />
                    <Rejouer rejouer={rejouer} />
                </>
            )}
        </div>
    );
}

export default index;
