import { sumaDe } from "./Plays.js";

export function max(numbers) {
  let ocurrences = [];
  let numberSet = new Set(numbers.sort().reverse());

  numberSet.forEach((number) => {
    ocurrences.push(countOcurrences(number, numbers));
  });

  return maxOf(ocurrences);
}

function maxOf(ocurrences) {
  let max = ocurrences[0];

  ocurrences.forEach((element) =>
    element.ocurrences > max.ocurrences ? (max = element) : null
  );

  return sumaDe(max.number, max.ocurrences);
}

function countOcurrences(elem, list) {
  let ocurrences = 0;

  list.forEach((x) => (x === elem ? (ocurrences += 1) : null));

  return {
    number: elem,
    ocurrences: ocurrences,
  };
}
