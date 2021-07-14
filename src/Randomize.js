import dice1 from "./images/dice1.jpeg";
import dice2 from "./images/dice2.jpeg";
import dice3 from "./images/dice3.jpeg";
import dice4 from "./images/dice4.jpeg";
import dice5 from "./images/dice5.jpeg";
import dice6 from "./images/dice6.jpeg";

const images = [dice1, dice2, dice3, dice4, dice5, dice6];

const randomNumbers = () =>
  [...new Array(5)].map(() => Math.floor(Math.random() * 6) + 1);

const initializeDices = () =>
  randomNumbers().map((n) => ({
    number: n,
    isFixed: false,
    img: images[n - 1],
  }));

export { images, randomNumbers, initializeDices };
