import React, { useEffect, useState } from "react";
import dado1 from './images/dado1.jpeg';
import dado2 from './images/dado2.jpeg';
import dado3 from './images/dado3.jpeg';
import dado4 from './images/dado4.jpeg';
import dado5 from './images/dado5.jpeg';
import dado6 from './images/dado6.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import './Dado.css';

export function Dado() {

    const [number, setNumber] = useState(Math.floor(Math.random() * 6) + 1);
    const [img, setImg] = useState();
    const [isFixed, setFix] = useState(false);

    useEffect(() => {

            setImgSwitch();
        },[]
    );

    const setImgSwitch = () => {

        switch(number) {
            case 1:
                setImg(dado1);
                break;
            case 2:
                setImg(dado2);
                break;
            case 3:
                setImg(dado3);
                break;
            case 4:
                setImg(dado4);
                break;
            case 5:
                setImg(dado5);
                break;
            case 6:
                setImg(dado6);
                break;
            default:
                setImg();
          }
    };

    const handleClick = () => {
        setFix(true);
    }

    const refresh = () => {
        if(!isFixed) {
            setNumber(Math.floor(Math.random() * 6) + 1);
            setImgSwitch();
        }
    }

    return(
        <div className="box">
            <div className="row">
                <img className={isFixed ? "dadoFijo" : "dado"} src={img} fluid="true" alt="logo"/>
            </div>
            <div className="row-md">
                <button type="button" className={isFixed ? "fixed" : "fix"} onClick={handleClick}>
                    {isFixed ? "Fijado" : "Fijar"}
                </button>
            </div>
        </div>
    )
}
