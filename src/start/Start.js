import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Start.css";

export function Start() {
  const history = useHistory();

  const handleStart = () => {
    history.push("/generala");
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center top">
        <buttom className="start" onClick={handleStart} value="Start">
          Start
        </buttom>
      </div>
    </div>
  );
}
