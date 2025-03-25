let frutas = ["Manzana", "Pera", "Banana", "Mango"];

frutas.forEach(frutas => {
    console.log(frutas)
});

let precios = [100, 200, 300];

let preciosDescuento = precios.map(precio => precio * 0.9);

console.log("Precios con 10% de descuento:", preciosDescuento);


let edades = [12, 17, 22, 30, 15];

let mayoresEdad = edades.filter(num => num > 18);

console.log(mayoresEdad);


let numeros = [15, 27, 42, 89, 50];

let primerPar = numeros.find(num => num % 2 === 0);
console.log("Primer número par:", primerPar);


let numeros1 = [10, 50, 90, 120, 5];

let hayMayorA100 = numeros1.some(num => num > 100);

console.log("¿Hay un número mayor a 100?", hayMayorA100);


let precios1 = [200, 150, 300, 100];

let totalCompra = precios1.reduce((acumulador, precio) => acumulador + precio, 0);

console.log("Total de la compra:", totalCompra);