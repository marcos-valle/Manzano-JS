const prompt = require('prompt-sync')();
var i, maior, menor;

    var valor = parseInt(prompt('Digita um valor: '));
    maior = valor;
    menor = valor;

    while(valor >= 0){
        if(valor > maior){
            maior = valor;
        }
        if(valor < menor){
            menor = valor;
        }
        valor = parseInt(prompt('Digita um valor: '));
    }

    console.log(`o maior é: ${maior}`);
    console.log(`o menor é: ${menor}`);
