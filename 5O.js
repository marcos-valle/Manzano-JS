var fat;

// for(var i = 1; i<=10; i+2){
//     for(var c = i; c > 1; c--){
//         fat *= c;
//     }
//     console.log(`O fatorial de ${i} é: ${fat}`);
// }

for(var i = 1; i <= 10; i++){

    if (i % 2 != 0) {
        fat = 1;
        for(var c = i; c > 1; c--){
            fat *= c;
        }
        console.log(`O fatorial de ${i} é: ${fat}`);
    } 

}