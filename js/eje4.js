/* 
    ------------------- EJERCICIO 4 ----------------
    var arr = [4,5,734,43,45]; Agrega 10 enteros aleatorios a la lista arr e imprime el array o arreglo en
    la consola

*/


let arr = [4,5,734,43,45]
const cantAgregados = 10

// CON FOR
console.log("---------- CON FOR ------------")
for(let i = 0; i<=cantAgregados; i++){
    arr.push(Math.floor(Math.random()*100)) 
    // el número agregado será de entre 0 y 99
}
console.log(arr)


// CON WHILE
console.log("---------- CON WHILE ------------")
arr = [4,5,734,43,45]
let contador = 0
while(contador<=cantAgregados){
    arr.push(Math.floor(Math.random()*100))
    contador++
    // el número agregado será de entre 0 y 99
}
console.log(arr)