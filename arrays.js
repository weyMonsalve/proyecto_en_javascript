let ciudades = ["Paris", "Milan", "Madrid", "Medellin", "Barcelona"];
console.log(ciudades);
console.log(ciudades[2]);


let paises = ["Colombia", "Brasil", "Argentina", "España"];
console.log(paises);
paises[2] = "Francia";
console.log(paises);

let animales = ["Gato", "Perro", "Ardilla", "Leon"];
console.log(animales);
animales.push("Caballo");
console.log(animales);

let numeros = [10, 20, 30, 40, 50];
console.log(numeros);
numeros.pop(); // aqui puedo poner o la pocicion en el array del numero a eliminar o el numero en si.
console.log(numeros);  

let colores = ["Azul", "Blanco", "Negro", "Rojo", "Verde"];
console.log(colores);
let cantidad = colores.length;
console.log("El array tiene:", cantidad, "colores");