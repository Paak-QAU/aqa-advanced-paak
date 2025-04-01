// Завдання 2

function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .catch(error => console.error("Помилка отримання todo:", error));
}

function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .catch(error => console.error("Помилка отримання user:", error));
}

Promise.all([fetchTodo(), fetchUser()])
    .then(results => console.log("Promise.all:", results))
    .catch(error => console.error("Помилка Promise.all:", error));

Promise.race([fetchTodo(), fetchUser()])
    .then(result => console.log("Promise.race:", result))
    .catch(error => console.error("Помилка Promise.race:", error));