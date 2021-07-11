import { React } from "react";
import "./App.css";

export function TopButton(props) {
  return (
    <button type="button" className="clickable" onClick={props.fn}>
      {props.string}
    </button>
  );
}

export function SpinsLeft(props) {
  return (
    <span className="badge badge-light">Tiradas Restantes: {props.spins}</span>
  );
}
