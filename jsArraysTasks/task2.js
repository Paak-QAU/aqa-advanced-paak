// Завдання 2: Копіювання з мутацією
const initialArray = [1, 2, 3, 4, 5];
const mutatedArray = initialArray.map((num, index) => num * index);
console.log(mutatedArray);