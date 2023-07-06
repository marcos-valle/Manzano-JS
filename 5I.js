let atual = 0;
let anterior = 1;
let proximo;
var i;

for (i = 0; i < 15; i++){
console.log(atual);
proximo = anterior + atual;
anterior = atual;
atual = proximo;
}