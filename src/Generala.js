import React, { useState } from "react";
import { Dado } from "./Dado";
import { images, randomNumbers, initializeDados } from "./Randomize";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export function Generala() {
  const [turnsLeft, setTurnsLeft] = useState(3);
  const [dados, setDados] = useState(initializeDados());

  const handleRefresh = () => {
    if (turnsLeft > 0) {
      const newNumbers = randomNumbers();

      setDados(
        dados.map((dado, i) =>
          dado.isFixed
            ? {
                number: dado.number,
                isFixed: dado.isFixed,
                img: dado.img,
              }
            : {
                number: newNumbers[i],
                isFixed: false,
                img: images[newNumbers[i] - 1],
              }
        )
      );

      setTurnsLeft(turnsLeft - 1);
    }
  };

  const setFix = (i) => {
    setDados(
      dados.map((dado, x) =>
        x == i
          ? {
              number: dado.number,
              isFixed: true,
              img: dado.img,
            }
          : {
              number: dado.number,
              isFixed: dado.isFixed,
              img: dado.img,
            }
      )
    );
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-2"></div>
        <div className="col-md-auto">
          <button
            type="button"
            className={turnsLeft > 0 ? "reload" : "dontReload"}
            onClick={handleRefresh}
          >
            {turnsLeft > 0 ? "Volver a tirar" : "Turnos agotados"}
          </button>
        </div>
        <div className="col col-lg-2">
          <span className="badge badge-light">Turnos: {turnsLeft}</span>
        </div>
      </div>
      <div className="row top-buffer">
        {dados.map((dado, i) => (
          <div className="col-sm">
            <Dado
              number={dado.number}
              isFixed={dado.isFixed}
              img={dado.img}
              setFix={() => setFix(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
