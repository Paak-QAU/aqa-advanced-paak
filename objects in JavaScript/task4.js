// Завдання 4
const person = {
    firstName: "Марія",
    lastName: "Іваненко",
    age: 25
};
person.email = "maria.ivanenko@example.com";
delete person.age;
console.log(person);
