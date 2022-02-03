/* 
    ------------------- EJERCICIO 3 ----------------
    var arr = [4,5,734,43,45]; Agrega 2 números enteros aleatorios a la lista arr (no necesitas un loop o bucle) 
    e imprime el array en la consola.
*/

let arr = [4,5,734,43,45]

arr.push(Math.floor(Math.random()*100))
arr.push(Math.floor(Math.random()*100))

console.log(arr)