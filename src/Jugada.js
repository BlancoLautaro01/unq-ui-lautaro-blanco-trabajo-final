import React, { useState } from "react";
import { Dado } from './dado/Dado.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export function Jugada() {

    const [turnsLeft, setTurnsLeft] = useState(3);

    const dado1 = <Dado/>;
    const dado2 = <Dado/>;
    const dado3 = <Dado/>;
    const dado4 = <Dado/>;
    const dado5 = <Dado/>;

    const handleVolverATirar = () => {
        if(turnsLeft > 0) {
            setTurnsLeft(turnsLeft - 1);
            //dado1.refresh();
        }
    }

    return(
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col col-lg-2"></div>
                <div className="col-md-auto">
                    <button type="button" className={turnsLeft > 0 ? "reload" : "dontReload"} onClick={handleVolverATirar}>
                        {turnsLeft > 0 ? "Volver a tirar" : "Turnos agotados"}
                    </button>
                </div>
                <div className="col col-lg-2">
                    <span className="badge badge-light">Turnos: {turnsLeft}</span>
                </div>
            </div>
            <div className="row top-buffer">
                <div className="col-sm">
                    {dado1}
                </div>
                <div className="col-sm">
                    {dado2}
                </div>
                <div className="col-sm">
                    {dado3}
                </div>
                <div className="col-sm">
                    {dado4}
                </div>
                <div className="col-sm">
                    {dado5}
                </div>
            </div>
        </div>
    )
}