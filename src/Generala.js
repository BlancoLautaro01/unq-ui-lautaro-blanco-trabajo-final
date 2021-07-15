import React, { useState } from "react";
import { Dice } from "./Dice";
import { evaluatePlay } from "./EvaluatePlay";
import { images, randomNumbers, initializeDices } from "./Randomize";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function TopButton(props) {
  return (
    <button type="button" className="clickable" onClick={props.fn}>
      {props.string}
    </button>
  );
}

export function Generala() {
  const [turnsLeft, setTurnsLeft] = useState(9);
  const [spinsLeft, setSpinsLeft] = useState(2);
  const [score, setScore] = useState(0);
  const [dices, setDices] = useState(initializeDices());
  const [plays, setPlays] = useState([]);
  const [isEvaluated, setIsEvaluated] = useState(false);

  const refresh = (isLastRefresh) => {
    const newNumbers = randomNumbers();

    setDices(
      dices.map((dice, i) =>
        dice.isFixed
          ? {
              number: dice.number,
              isFixed: dice.isFixed,
              img: dice.img,
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
    if (spinsLeft >= 2) {
      refresh(false);
      setSpinsLeft(spinsLeft - 1);
      setIsEvaluated(false);
    } else {
      refresh(true);
      setSpinsLeft(spinsLeft - 1);
      setIsEvaluated(false);
    }
  };

  const handleEvaluatePlay = () => {
    let play = evaluatePlay(dices);

    setScore(score + play.points);
    setPlays(plays.concat(play));
    setIsEvaluated(true);
  };

  const handleNextTurn = () => {
    setTurnsLeft(turnsLeft - 1);
    setDices(initializeDices());
    setSpinsLeft(2);
    setIsEvaluated(false);
  };

  const setFix = (i) => {
    setDices(
      dices.map((dice, x) =>
        x === i
          ? {
              number: dice.number,
              isFixed: true,
              img: dice.img,
            }
          : {
              number: dice.number,
              isFixed: dice.isFixed,
              img: dice.img,
            }
      )
    );
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-3">
          {!isEvaluated ? (
            <TopButton string="Anotar Jugada" fn={handleEvaluatePlay} />
          ) : null}
          <span className="badge badge-light">Turno {10 - turnsLeft}/10</span>
        </div>
        <div className="col-md-auto">
          {spinsLeft > 0 ? (
            <TopButton string="Volver a Tirar" fn={handleRefresh} />
          ) : null}
          {spinsLeft === 0 && turnsLeft > 0 ? (
            <TopButton string="Siguiente Turno" fn={handleNextTurn} />
          ) : null}
          <span className="badge badge-light">
            Tiradas Restantes: {spinsLeft}
          </span>
        </div>
        <div className="col col-lg-2"></div>
      </div>
      <div className="row top-buffer">
        {dices.map((dice, i) => (
          <div className="col-sm">
            <Dice
              number={dice.number}
              isFixed={dice.isFixed}
              img={dice.img}
              setFix={() => setFix(i)}
            />
          </div>
        ))}
      </div>
      <div className="row top-buffer">
        <div className="col col-lg-4">
          <h1>Puntaje - {score}</h1>
        </div>
        <div className="col col-lg-2">
          <h1>Jugadas: </h1>
        </div>
        <div className="col col-lg-3">
          <ul>
            {plays.map((elem, i) => (
              <li>
                {elem.play}: +{elem.points}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
