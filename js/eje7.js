/* 
    ------------------- EJERCICIO 7 ----------------
    Este código está reproduciendo todo el conjunto, uno por uno, e imprime los elementos en la consola.
    
    var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
    for(var i = 0; i<mySampleArray.length; i = i + 1){
       console.log(mySampleArray[i]);
    }

    Cambia el bucle para que se repita de dos en dos en lugar de uno por uno
*/

let mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

//CON FOR
console.log("---------- CON FOR -----------")
for(let i = 0; i<mySampleArray.length; i+=2){
    console.log(mySampleArray[i]);
}


//CON WHILE
console.log("---------- CON WHILE -----------")
let i = 0
while(i<mySampleArray.length){
    console.log(mySampleArray[i]);
    i+=2
}