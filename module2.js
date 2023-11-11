// module2.js
const celsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

module.exports = { celsiusToFahrenheit };
