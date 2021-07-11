import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export function Dado(props) {
  return (
    <div className="box">
      <div className="row">
        <img src={props.img} fluid="true" alt="logo" />
      </div>
      <div className="row-md">
        <button
          type="button"
          className={props.isFixed ? "notClickable" : "clickable"}
          onClick={props.setFix}
        >
          {props.isFixed ? "Fijado" : "Fijar"}
        </button>
      </div>
    </div>
  );
}
