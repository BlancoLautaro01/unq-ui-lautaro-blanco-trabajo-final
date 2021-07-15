import { ocurrencesList } from "./Ocurrences";

function isGenerala(numbers) {
  return ocurrencesList(numbers).includes(5);
}

function isPoker(numbers) {
  return ocurrencesList(numbers).includes(4);
}

function isFull(numbers) {
  const ocurrences = ocurrencesList(numbers);

  const case1 = [3, 2].every((n) => ocurrences.includes(n));
  const case2 = [2, 3].every((n) => ocurrences.includes(n));
  return case1 || case2;
}

function isEscalera(numbers) {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 3, 4, 5, 6];

  const case1 = arr1.every((number) => numbers.includes(number));
  const case2 = arr2.every((number) => numbers.includes(number));
  return case1 || case2;
}

export { isGenerala, isPoker, isFull, isEscalera };
