const kelvin = 0; //constant
const celcius = kelvin - 273; //celcius
let fahrenheit = celcius * (9 / 5) + 32; //convertinng to farenheit
fahrenheit = Math.floor(fahrenheit);//to round down
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celcius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);