import dado1 from "./images/dado1.jpeg";
import dado2 from "./images/dado2.jpeg";
import dado3 from "./images/dado3.jpeg";
import dado4 from "./images/dado4.jpeg";
import dado5 from "./images/dado5.jpeg";
import dado6 from "./images/dado6.jpeg";

const images = [dado1, dado2, dado3, dado4, dado5, dado6];

const randomNumbers = () =>
  [...new Array(5)].map(() => Math.floor(Math.random() * 6) + 1);

const initializeDados = () =>
  randomNumbers().map((n) => ({
    number: n,
    isFixed: false,
    img: images[n - 1],
  }));

export { images, randomNumbers, initializeDados };
