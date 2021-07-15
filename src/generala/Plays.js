function generala() {
  return {
    play: "Generala",
    points: 60,
  };
}

function poker() {
  return {
    play: "Poker",
    points: 45,
  };
}

function full() {
  return {
    play: "Full House",
    points: 30,
  };
}

function escalera() {
  return {
    play: "Escalera",
    points: 20,
  };
}

function sumaDe(number, ocurrences) {
  return {
    play: "Suma de " + number,
    points: number * ocurrences,
  };
}

export { generala, poker, full, escalera, sumaDe };
