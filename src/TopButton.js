import { React } from "react";
import "./App.css";

export function TopButton(props) {
  return (
    <button type="button" className="clickable" onClick={props.fn}>
      {props.string}
    </button>
  );
}
