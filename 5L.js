const prompt = require('prompt-sync')();

var soma = 0;

for( i = 0; i < 15; i++){
 const valor = prompt("Digite um valor: ");
 var fat = 1
for( var c = valor; c > 1; c-=1){
    
    fat *= c;
    
}
soma += fat;

}

console.log(`Somatório dos fatoriais: ${soma}`);