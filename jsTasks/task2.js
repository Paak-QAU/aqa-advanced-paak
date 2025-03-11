const averageGrade = 85; // Можна змінити значення для перевірки
let result = "";

switch (true) {
    case (averageGrade < 60):
        result = "Незадовільно";
        break;
    case (averageGrade <= 70):
        result = "Задовільно";
        break;
    case (averageGrade <= 80):
        result = "Добре";
        break;
    case (averageGrade <= 90):
        result = "Дуже добре";
        break;
    case (averageGrade <= 100):
        result = "Відмінно";
        break;
    default:
        result = "Некоректна оцінка";
}

console.log(result);
