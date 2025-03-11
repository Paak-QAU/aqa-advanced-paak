const number = 5; // Можна змінити значення

console.log(`Таблиця множення для числа ${number} (for loop):`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

console.log(`\nТаблиця множення для числа ${number} (while loop):`);
let i = 1;
while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}
