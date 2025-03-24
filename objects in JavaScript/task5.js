// Завдання 5
const users = [
    { name: "Олег", email: "oleg@mail.com", age: 30 },
    { name: "Анастасія", email: "nastya@mail.com", age: 25 },
    { name: "Максим", email: "max@mail.com", age: 27 }
];
for (const { name, email, age } of users) {
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}
