class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    detalles() {
        console.log("La marca del coche es: " + this.marca + " El modelo del coche es: " + this.modelo + " El año del coche es: " + this.año);
    };
};

let coche1 = new Coche("Mazda", "Hibrido", 2025);
let coche2 = new Coche("Toyota", "Corolla", 2024);

coche1.detalles();
coche2.detalles();



class Computadora {
    constructor(marca, procesador, ram) {
        this.marca = marca;
        this.procesador = procesador;
        this.ram = ram;
    }

    informacion() {
        console.log("La marca del PC es: " + this.marca + " El procesador es: " + this.procesador + " La ran es " + this.ram + " GB")
    };
};

let pc1 = new Computadora("Lenovo", "Intel core 8", 8, "GB");
let pc2 = new Computadora("Dell", "Intel core 11", 19, "GB");

pc1.informacion();
pc2.informacion();


class Celular {
    constructor(marca, modelo, almacenamiento) {
        this.marca = marca;
        this.modelo = modelo;
        this.almacenamiento = almacenamiento;
    }

    mostrarInfo() {
        console.log("La marcadel celular es: " + this.marca + " El modelo del celular es: " + this.modelo + " El almacenamiento del celular es: " + this.almacenamiento);
    };
};

let celular1 = new Celular("Apple", "Alta gama", 4, "GB");
let celular2 = new Celular("Motorola", "Media gama", 2, "GB");

celular1.mostrarInfo();
celular2.mostrarInfo();