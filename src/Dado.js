import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Dado.css";

export function Dado(props) {
  return (
    <div className="box">
      <div className="row">
        <img
          className={props.isFixed ? "dadoFijo" : "dado"}
          src={props.img}
          fluid="true"
          alt="logo"
        />
      </div>
      <div className="row-md">
        <button
          type="button"
          className={props.isFixed ? "fixed" : "fix"}
          onClick={props.setFix}
        >
          {props.isFixed ? "Fijado" : "Fijar"}
        </button>
      </div>
    </div>
  );
}
