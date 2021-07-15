function ocurrences(list) {
  let ocurrences = [];
  let set = new Set(list.sort().reverse());

  set.forEach((elem) => {
    ocurrences.push(countOcurrences(elem, list));
  });

  return ocurrences;
}

function countOcurrences(elem, list) {
  let ocurrences = 0;

  list.forEach((x) => (x === elem ? (ocurrences += 1) : null));

  return {
    number: elem,
    ocurrences: ocurrences,
  };
}

function maxOf(ocurrences) {
  let max = ocurrences[0];

  ocurrences.forEach((element) =>
    element.ocurrences > max.ocurrences ? (max = element) : null
  );

  return max;
}

export { ocurrences, maxOf };
