import { generala, poker, full, escalera, sumaDe } from "./Plays";
import { isGenerala, isPoker, isFull, isEscalera } from "./PlaysLogic";
import { ocurrences, maxOf } from "./Ocurrences";

export function evaluatePlay(dices) {
  let numbers = dicesToList(dices);

  if (isGenerala(numbers)) {
    return generala;
  } else if (isPoker(numbers)) {
    return poker;
  } else if (isFull(numbers)) {
    return full;
  } else if (isEscalera(numbers)) {
    return escalera;
  } else {
    return max(numbers);
  }
}

function dicesToList(dices) {
  let numbers = [];
  dices.forEach((dice) => {
    numbers.push(dice.number);
  });

  return numbers;
}

function max(numbers) {
  let max = maxOf(ocurrences(numbers));

  return sumaDe(max.number, max.ocurrences);
}
