// Function Declaration
function calculateArea1(width, height) {
    return width * height;
}

// Function Expression
const calculateArea2 = function(width, height) {
    return width * height;
};

// Arrow Function
const calculateArea3 = (width, height) => width * height;

// Виклики функцій з аргументами 5 і 10
console.log("Function Declaration:", calculateArea1(5, 10));
console.log("Function Expression:", calculateArea2(5, 10));
console.log("Arrow Function:", calculateArea3(5, 10));
