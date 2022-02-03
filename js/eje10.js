/* 
    ------------------- EJERCICIO 10 ----------------
    Usando un bucle for, invierte el arreglo o array arr e imprime el nuevo arreglo o array en la consola.
    var arr = [45,67,87,23,5,32,60];
    //Your code here.
*/


let arr = [45,67,87,23,5,32,60];
let nuevo = []

// CON FOR-EACH
console.log("---------- CON FOR EACH -------------")
arr.forEach(num => nuevo.unshift(num))
console.log(nuevo)


// CON FOR
nuevo = []
console.log("---------- CON FOR -------------")
for(let i = 0; i<arr.length; i++){
    nuevo.unshift(arr[i])
}
console.log(nuevo)


// CON WHILE
console.log("---------- CON WHILE -------------")
nuevo = []
let i = 0
while(i<arr.length){
    nuevo.unshift(arr[i])
    i++
}
console.log(nuevo)
