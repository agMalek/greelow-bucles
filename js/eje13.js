/* 
    ------------------- EJERCICIO 13 ----------------
    1. Imprime cada número de la iteración en la consola del 20 al 0, pero concaténale un signo de exclamación(!) al elemento si el número es un multiplo de 5.
    2. Al final haz un console.log()de LIFTOFF
    
    let i = 20;
    do {
        // Magic goes here;
        i--;
    } while (i > 0);
*/

const divisor = 5

// CON DO-WHILE
console.log("--------------- CON DO-WHILE -------------")
let i = 20;
do {
    i % divisor == 0 ? console.log(`${i}!`) : console.log(i)
    i--;
} while (i > 0);

// CON WHILE
console.log("--------------- CON WHILE -------------")
i = 20;
while(i > 0){
    i % divisor == 0 ? console.log(`${i}!`) : console.log(i)
    i--;
}


// NO ENTIENDO PUNTO 2 