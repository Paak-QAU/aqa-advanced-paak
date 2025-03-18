function countdown(num) {
    if (num < 0) return;
    console.log(num);
    countdown(num - 1);
}

// Виклик функції з аргументом 5
countdown(5);
