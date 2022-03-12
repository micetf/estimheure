import React from "react";

function SelectMoment({ plage = "am", changerPlage }) {
    function handleSelect(e) {
        e.preventDefault();
        changerPlage(e.target.value);
    }
    return (
        <div className="row">
            <div className="col form-floating my-3">
                <select
                    className="form-select form-select-lg"
                    name="moment"
                    value={plage}
                    onChange={handleSelect}
                >
                    <option value="am">Matin</option>
                    <option value="pm">Après-midi</option>
                    <option value="journee">Journée entière</option>
                </select>
                <label htmlFor="moment">Choisis le moment de la journée.</label>
            </div>
        </div>
    );
}

export default SelectMoment;
