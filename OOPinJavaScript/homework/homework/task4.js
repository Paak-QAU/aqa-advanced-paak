// Завдання 4
class DataFetcher {
    async fetchTodo() {
        return await fetchTodoAsync();
    }
    async fetchUser() {
        return await fetchUserAsync();
    }
}

class PromiseHandler {
    async handleAll() {
        return await Promise.all([fetchTodoAsync(), fetchUserAsync()]);
    }
    async handleRace() {
        return await Promise.race([fetchTodoAsync(), fetchUserAsync()]);
    }
}

(async () => {
    const dataFetcher = new DataFetcher();
    const promiseHandler = new PromiseHandler();

    console.log("DataFetcher:", await dataFetcher.fetchTodo(), await dataFetcher.fetchUser());
    console.log("PromiseHandler:", await promiseHandler.handleAll(), await promiseHandler.handleRace());
})();
