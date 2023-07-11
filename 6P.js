const prompt = require('prompt-sync')();

let A = [], B = [];

for( let i = 0; i < 12; i++){
    let a = parseInt(prompt(`Digite A${i+1}: `));
    A.push(a);
    if (a % 2 == 0) {
        B.push(a);
    } else {
        let n = a * 2;
        B.push(n);
    }
}

console.log(B);