/* 
    ------------------- EJERCICIO 11  ----------------
   Escribe una función que imprima un arreglo en la consola que contenga los tipos de valores (data-types) que contiene el array mix en cada posición.
    var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
    //your code here

*/


let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// CON FOR-EACH
const getTypesForEach = (array) => {
    console.log("---------- CON FOR-EACH ----------")
    let aux = []
    array.forEach(element => {
        aux.push(typeof element)
    });
    console.log(aux)
}
getTypesForEach(mix)


// CON FOR
const getTypesFor = (array) => {
    console.log("---------- CON FOR ----------")
    let aux = []
    for(let i = 0; i<array.length; i++){
        aux.push(typeof array[i])

    }
    console.log(aux)
}
getTypesFor(mix)


// CON WHILE
const getTypesWhile = (array) => {
    console.log("---------- CON WHILE ----------")
    let aux = []
    let i = 0
    while(i<array.length){
        aux.push(typeof array[i])
        i++
    }
    console.log(aux)
}
getTypesWhile(mix)