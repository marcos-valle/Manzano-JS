const prompt = require('prompt-sync')();

let divisor = parseInt(prompt('Digita o valor do divisor: '));
let dividendo = parseInt(prompt('Digita o valor do dividendo: '));

for(var c = 0; dividendo >= divisor; c++) {
    dividendo -= divisor;
}

console.log(`Quociente: ${c}`);