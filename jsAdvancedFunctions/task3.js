function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both arguments must be numbers.");
    }
    if (denominator === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return numerator / denominator;
}

// Тестові виклики
try {
    console.log("Result:", divide(10, 2));
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log("Result:", divide(10, 0));
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log("Result:", divide(10, "a"));
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Робота завершена");
}
