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