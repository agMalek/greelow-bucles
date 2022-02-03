/* 
    ------------------- EJERCICIO 9 ----------------
   Nuestro cliente necesita un programa que cuente las repeticiones de las letras en un string dado. 
   Sé que es extraño, pero son muy testarudo ¡ Lo necesitamos lo antes posible!
    
   let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
    
    let counts = {};
    // your code here
    console.log(counts);

    Crea un objeto donde las letras son las propiedades y los valores son el número de veces que esa letra se repite en toda la cadena.
*/



let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let array = par.split("")

// CON FOR-EACH
console.log("--------- CON FOR-EACH ---------------")
let counts = {};
array.forEach(letra => {
    if(counts[letra] === undefined){
        counts[letra] = 1
    }
    else{
        counts[letra]++
    }
})
console.log(counts);


// CON FOR
console.log("--------- CON FOR ---------------")
counts = {};
for(let i = 0; i<array.length; i++){
    if(counts[array[i]] === undefined){
        counts[array[i]] = 1
    }
    else{
        counts[array[i]]++
    }
}
console.log(counts);



// CON WHILE
console.log("--------- CON WHILE ---------------")
counts = {};
let i = 0
while(i<array.length){
    if(counts[array[i]] === undefined){
        counts[array[i]] = 1
    }
    else{
        counts[array[i]]++
    }
    i++
}
console.log(counts);