import React, { useState } from "react";
import { Dado } from "./Dado";
import { TopButton, SpinsLeft } from "./SecondaryComponents";
import { images, randomNumbers, initializeDados } from "./Randomize";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export function Generala() {
  const [turnsLeft, setTurnsLeft] = useState(9);
  const [spinsLeft, setSpinsLeft] = useState(2);
  const [dados, setDados] = useState(initializeDados());

  const refresh = (isLastRefresh) => {
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
              isFixed: isLastRefresh,
              img: images[newNumbers[i] - 1],
            }
      )
    );
  };

  const handleRefresh = () => {
    console.log(turnsLeft);
    if (spinsLeft >= 2) {
      refresh(false);
      setSpinsLeft(spinsLeft - 1);
    } else {
      refresh(true);
      setSpinsLeft(spinsLeft - 1);
      //evaluatePlay()
    }
  };

  const handleEvaluatePlay = () => {
    //evaluatePlay
  };

  const handleNextTurn = () => {
    setTurnsLeft(turnsLeft - 1);
    setDados(initializeDados());
    setSpinsLeft(2);
  };

  const endTurn = () => {};

  const setFix = (i) => {
    setDados(
      dados.map((dado, x) =>
        x === i
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
        <div className="col col-lg-2">
          {spinsLeft > 0 ? (
            <TopButton string="Anotar Jugada" fn={handleEvaluatePlay} />
          ) : null}
          {spinsLeft === 0 && turnsLeft > 0 ? (
            <TopButton string="Siguiente Turno" fn={handleNextTurn} />
          ) : null}
          <span className="badge badge-light">Turno {10 - turnsLeft}/10</span>
        </div>
        <div className="col-md-auto">
          {spinsLeft > 0 ? (
            <TopButton string="Volver a Tirar" fn={handleRefresh} />
          ) : null}
          {turnsLeft > 0 ? <SpinsLeft spins={spinsLeft} /> : null}
        </div>
        <div className="col col-lg-2"></div>
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
      <div className="row top-buffer"></div>
    </div>
  );
}
