/*Elaborar um programa que leia uma matriz A de uma
dimensão com seis elementos do tipo real. Construir uma
matriz B, em que cada posição de índice ímpar da matriz B
deve ser atribuída com um elemento de índice par existente
na matriz A e cada posição de índice par da matriz B deve
ser atribuída com um elemento de índice ímpar existente na
matriz A. Apresentar os elementos das duas matrizes.*/

const prompt = require ('prompt-sync')();

let A = [], B = [];

for(let i = 0; i < 6; i++){
    A[i] = parseFloat(prompt(`Digita A${i+1}: `));
    if (i %2 == 0) {
        B[i+1] = A[i];
    } else {
        B[i-1] = A[i];
    }
    
}

console.log(A);
console.log(B);