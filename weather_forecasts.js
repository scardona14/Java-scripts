// This program will convert Kelvin to Celsius, then to Fahrenheit
// Also, it will convert Celsius to Newton



// Constant variable named kelvin equal to 293 degrees
const kelvin = 0;
// Substracting 273 from kelvin and storing it in celcius
let celsius = (kelvin - 273);
// Calculating the Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Converting from Celsius to Farenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Convert to Newton
let newton = celsius * (33 / 100);
// Round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);