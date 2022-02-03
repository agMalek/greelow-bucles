/* 
    ------------------- EJERCICIO 14 ----------------
    1. Escribe un script que encuentre el número entero más grande en myArray.
    2. Imprime ese número en la consola con la función console.log().
    var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34] 
*/

let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34] 


// CON FOR-EACH
const getMaximoForEach = (array) => {
    console.log("------------ CON FOR-EACH ----------")
    let maximo = array[0]
    array.forEach(num => {
        if(num > maximo){
            maximo = num
        }
    });
    return maximo
}
console.log(getMaximoForEach(myArray))


// CON FOR
const getMaximoFor = (array) => {
    console.log("------------ CON FOR ----------")
    let maximo = array[0]
    for(let i = 0; i<array.length; i++){
        if(array[i] > maximo){
            maximo = array[i]
        }
    }
    return maximo
}
console.log(getMaximoFor(myArray))


// CON WHILE
const getMaximoWhile = (array) => {
    console.log("------------ CON WHILE----------")
    let maximo = array[0]
    let i = 0
    while(i<array.length){
        if(array[i] > maximo){
            maximo = array[i]
        }
        i++
    }
    return maximo
}
console.log(getMaximoWhile(myArray))