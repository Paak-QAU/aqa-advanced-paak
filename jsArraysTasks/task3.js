// Завдання 3: Обчислення суми елементів масиву
const sumArray = [10, 20, 30, 40, 50];
const sum = sumArray.reduce((acc, num) => acc + num, 0);
console.log(sum);