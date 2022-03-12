import React from "react";

function Reponse({ h, min, presque, reponse }) {
    const correction =
        presque === reponse || presque === reponse + 12
            ? { alert: " list-group-item-success", reponse: null }
            : {
                  alert: " list-group-item-warning",
                  reponse: (
                      <span className="text-danger text-decoration-line-through">
                          ({reponse + "h"})
                      </span>
                  ),
              };

    return (
        <li className={"list-group-item" + correction.alert}>
            {Intl.NumberFormat("fr-FR", { minimumIntegerDigits: 2 }).format(h)}:
            {Intl.NumberFormat("fr-FR", { minimumIntegerDigits: 2 }).format(
                min
            )}{" "}
            c'est près de {presque}h {correction.reponse}
        </li>
    );
}
function Resultats({ parties }) {
    return (
        <div className="correction row">
            <div className="col">
                <ul className="list-group">
                    {parties.slice(0, 5).map((partie, index) => (
                        <Reponse key={index} {...partie} />
                    ))}
                </ul>
            </div>
            <div className="col">
                <ul className="list-group">
                    {parties.slice(5).map((partie, index) => (
                        <Reponse key={index} {...partie} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Resultats;
