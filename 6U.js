/*Elaborar um programa que leia duas matrizes A e B de uma
dimensão com 12 elementos. A matriz A deve aceitar
apenas a entrada de valores divisíveis por 2 ou 3, enquanto
a matriz B deve aceitar apenas a entrada de valores que
não sejam múltiplos de 5. A entrada das matrizes deve ser
validada pelo programa, e não pelo usuário. Construir uma
matriz C que seja o resultado da junção das matrizes A e B,
de forma que contenha 24 elementos. Apresentar os
elementos da matriz C.*/

const prompt = require ('prompt-sync')();
let A = [], B = [], C = [];

//Construção da Matriz A
console.log("Digite valores divisíveis por 2 ou por 3");
for(let i = 0; i < 12; i++){
    let n = parseInt(prompt(`Digita A${i+1}: `));
    
    if (n % 2 == 0 || n % 3 == 0) {
        A.push(n);
    } else {
        console.log("Inválido");
        i--
    }
}

//Construção da Matriz B
console.log("Digite valores não múltiplos de 5");
for(let i = 0; i < 12; i++){
    let n = parseInt(prompt(`Digita B${i+1}: `));
    
    if (n % 5 != 0) {
        B.push(n);
    } else {
        console.log("Inválido");
        i--
    }
}

//Construção da matriz C, juntando os valores das matrizes A e B
C.push(A,B);

console.log(`Matriz C ${C}`);