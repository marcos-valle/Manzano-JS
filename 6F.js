const prompt = require('prompt-sync')();
let A = [], B = [], C = [];

for(var i = 0; i < 15; i++){
    var a = parseInt(prompt(`digita o valor A${i+1}: `));
    var b = parseInt(prompt(`digita o valor B${i+1}: `));
    A.push(a);
    A.push(b);
    C.push(a, b);
}

console.log(C);
