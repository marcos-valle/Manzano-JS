const prompt = require('prompt-sync')();
let nome = [];

for(var i = 0; i < 10; i++){
    var N = prompt(`Digita o ${i+1} nome: `);
    nome.push(N);
}

console.log(nome);