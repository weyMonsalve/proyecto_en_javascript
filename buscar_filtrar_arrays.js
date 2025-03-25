let colores = ["Rojo", "Verde", "Azul", "Amarillo", "Negro"];

let posicion = colores.indexOf("Azul");

if (posicion !== -1) {
    console.log(`El color Azul está en la posición ${posicion}.`);
} else {
    console.log("El color no está en la lista.");
}


let animales = ["Perro", "Gato", "Elefante", "Tigre", "León"];


if (animales.includes("Tigre")) {
    console.log("El animal Tigre está en la lista.");
} else {
    console.log("El animal Tigre no está en la lista.")
}


let numeros = [30, 55, 12, 80, 45, 100, 60];

let numerosMayores = numeros.filter(num => num > 50);

console.log("Números mayores a 50:", numerosMayores);