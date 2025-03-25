let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Rojo"
};

console.log("Modelo del coche:", coche.modelo);

coche.color = "Azul"; // Modificamos el color
coche.kilometraje = 5000; // Agregamos una nueva propiedad

console.log(coche);

delete coche.año;

console.log(coche);


let usuario = {
    nombre: "Wbeimar",
    correo: "Wmar@gmail.com",
    edad: 41,

    saludar: function() {
        console.log("Hola, soy " + this.nombre, "y tengo " + this.edad, "años");
    }
};
usuario.saludar();

usuario.cambiarEdad = function(nuevaEdad) {
    this.edad = nuevaEdad;
    console.log("Edad actualizada a:", this.edad);
};

// Usamos el nuevo método
usuario.cambiarEdad(30);
usuario.saludar();