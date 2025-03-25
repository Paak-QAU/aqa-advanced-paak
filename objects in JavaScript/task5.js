// Завдання 5
const users = [
    { name: "Олег", email: "oleg@mail.com", age: 30 },
    { name: "Анастасія", email: "nastya@mail.com", age: 25 },
    { name: "Максим", email: "max@mail.com", age: 27 }
];

console.log("З використанням деструктуризації:");
for (const { name, email, age } of users) {
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}

console.log("Без використання деструктуризації:");
for (const user of users) {
    console.log(`Ім'я: ${user.name}, Email: ${user.email}, Вік: ${user.age}`);
}