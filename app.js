// app.js
const { addNumbers } = require('./module1');
const { celsiusToFahrenheit } = require('./module2');
const { reverseString } = require('./module3');
const { getRandomNumber } = require('./module4');

const result1 = addNumbers(5, 10);
const result2 = celsiusToFahrenheit(25);
const result3 = reverseString("Hello, World!");
const result4 = getRandomNumber();

console.log(`Hasil penjumlahan: ${result1}`);
console.log(`Hasil konversi suhu: ${result2}`);
console.log(`String terbalik: ${result3}`);
console.log(`Angka acak: ${result4}`);
