// Завдання 3

async function fetchTodoAsync() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        return await response.json();
    } catch (error) {
        console.error("Помилка отримання todo:", error);
    }
}

async function fetchUserAsync() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        return await response.json();
    } catch (error) {
        console.error("Помилка отримання user:", error);
    }
}

(async () => {
    try {
        const [todo, user] = await Promise.all([fetchTodoAsync(), fetchUserAsync()]);
        console.log("Promise.all (async/await):", { todo, user });

        const firstResolved = await Promise.race([fetchTodoAsync(), fetchUserAsync()]);
        console.log("Promise.race (async/await):", firstResolved);
    } catch (error) {
        console.error("Помилка async/await:", error);
    }
})();
