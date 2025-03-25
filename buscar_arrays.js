// let paises = ["Colombia", "Italia", "Portugal", "Marruecos", "Japon"];
// console.log(paises);

let paisBusacado = prompt("Ingrese un pais");
let posicion = paises.indexOf(paisBusacado);

if (posicion !== -1) {
    console.log(`${paisBusacado} esta en la posicion ${posicion}.`);
} else {
    console.log("El pais no esta en la lista");
}


let numeros = [5, 10, 15, 20, 25];
console.log(numeros);

let numeroBuscado = parseInt(prompt("Ingrese un numero:"));

if (numeros.includes(numeroBuscado)) {
    console.log(`El numero, ${numeroBuscado}, esta en el array`);
} else {
    console.log("El numero no se encuentra en el array");
}


let numeros1 = [12, 7, 8, 21, 30, 15, 42];
 let numerosPares = numeros1.filter(num => num % 2 === 0);
 console.log("Los numeros pares dentro del array son:", numerosPares);