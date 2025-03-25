let nombres = ["Adriana", "Monica", "Elizabeth", "Mary", "Jeison"];
for (let i = 0; i < nombres.length; i++) {
    console.log("Nombres:", nombres[i]);
};



let edades = [53, 52, 49, 47, 36];
edades.forEach (function(edad) {
    console.log("Edad", edad);
});

let precios = [100, 200, 300, 400, 500];
console.log(precios);
for (let i = 0; i < precios.length; i++) {
    precios[i] = Math.round(precios[i] * 1.10);
    console.log("Precio actualizado", precios[i]);
};