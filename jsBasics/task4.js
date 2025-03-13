// Завдання 4: Обчислення площі та об'єму
// 4.1 Площа кола
const radiusCircle = 5;
const areaCircle = Math.PI * Math.pow(radiusCircle, 2);
console.log(`Площа кола: ${areaCircle.toFixed(2)}`);

// 4.2 Площа прямокутника
const length = 10;
const width = 4;
const areaRectangle = length * width;
console.log(`Площа прямокутника: ${areaRectangle.toFixed(2)}`);

// 4.3 Об'єм циліндра
const radiusCylinder = 3;
const heightCylinder = 7;
const volumeCylinder = Math.PI * Math.pow(radiusCylinder, 2) * heightCylinder;
console.log(`Об'єм циліндра: ${volumeCylinder.toFixed(2)}`);