import React, { useState } from "react";
import { Dado } from "./Dado";
import { images, randomNumbers, initializeDados } from "./Randomize";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function TopButtom(props) {
  return (
    <button type="button" className="clickable" onClick={props.fn}>
      {props.string}
    </button>
  );
}

export function Generala() {
  const [turnsLeft, setTurnsLeft] = useState(2);
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
    if (turnsLeft == 2) {
      refresh(false);
      setTurnsLeft(turnsLeft - 1);
    } else if (turnsLeft == 1) {
      refresh(true);
      setTurnsLeft(turnsLeft - 1);
      //endTurn()
    }
  };

  const stay = () => {
    setTurnsLeft(0);

    setDados(
      dados.map((dado) => ({
        number: dado.number,
        isFixed: true,
        img: dado.img,
      }))
    );

    //endTurn()
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

  const endTurn = () => {};

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">
          {turnsLeft > 0 ? <TopButtom string="Plantarse" fn={stay} /> : null}
        </div>
        <div className="col-md-auto">
          {turnsLeft > 0 ? (
            <TopButtom string="Volver a Tirar" fn={handleRefresh} />
          ) : null}
        </div>
        <div className="col col-lg-2">
          <span className="badge badge-light">
            Tiradas Restantes: {turnsLeft}
          </span>
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
      <div className="row top-buffer"></div>
    </div>
  );
}
