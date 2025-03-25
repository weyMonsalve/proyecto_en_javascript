class DispositivoElectronico {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    informacion() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Precio: ${this.precio}`);
    }
}

class Tablet extends DispositivoElectronico {
    constructor(marca, modelo, precio, tamañoPantalla) {
        super(marca, modelo, precio);
        this.tamañoPantalla = tamañoPantalla;
    }

    informacion() {
        super.informacion();
        console.log(`Tamaño de pantalla: ${this.tamañoPantalla} pulgadas`);
    }
}

let tablet1 = new Tablet("Apple", "ipad Air", 800, 10.9);
tablet1.informacion();


class Electrodomestico {
    constructor(marca, modelo, consumoEnergia) {
        this.marca = marca;
        this.modelo = modelo;
        this.consumoEnergia = consumoEnergia;
    }

    descripcion() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}. Consumo de energía: ${this.consumoEnergia} kWh`);
    }
}

class Refrigerador extends Electrodomestico {
    constructor(marca, modelo, consumoEnergia, capacidad) {
        super(marca, modelo, consumoEnergia);
        this.capacidad = capacidad;
    }

    descripcion() {
        super.descripcion();
        console.log(`Capacidad: ${this.capacidad} litros`);
    }
}

// Crear un objeto correctamente
let refrigerador1 = new Refrigerador("Haceb", "XR-2025", 10, 50);
refrigerador1.descripcion();