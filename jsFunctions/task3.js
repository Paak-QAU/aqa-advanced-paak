function checkOrder(available, ordered) {
    if (ordered === 0) {
        return "Your order is empty";
    } else if (ordered > available) {
        return "Your order is too large, we don’t have enough goods.";
    } else {
        return "Your order is accepted";
    }
}

// Тестові виклики функції
console.log(checkOrder(50, 60)); // Your order is too large, we don’t have enough goods.
console.log(checkOrder(50, 0));  // Your order is empty
console.log(checkOrder(50, 20)); // Your order is accepted
