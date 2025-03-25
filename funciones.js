function mostrarMensaje() {
    console.log("Este es un mensaje desde una función.");
}
mostrarMensaje();


function multiplicar(x, y) {
    console.log("El resultado de la multiplicación es:", x * y);
}
multiplicar(4, 5);


function dividir(a, b) {
    return a / b;
}
let resultadoDivision = dividir(10, 2);
console.log("El resultado de la división es:", resultadoDivision);
  

function mostrarHora () {
    console.log("La hora actual es:11:30 AM");
}
mostrarHora();

function calcularAreaRectangulo (base , altura) {

    let area = base * altura;
    console.log("El área del rectángulo es:", area);
}
calcularAreaRectangulo(5, 5);


function convertirCelsiusAFahrenheit (celsius) {
    let Fahrenheit = (celsius * 9/5) + 32;
    return Fahrenheit;
}
let resultado = convertirCelsiusAFahrenheit(0);
console.log("0°C en Fahrenheit es:", resultado);


function mostrarFechaActual() {
    let fecha = new Date(); 
    let dia = fecha.getDate(); 
    let mes = fecha.getMonth() + 1; 
    let año = fecha.getFullYear(); 

    console.log("La fecha de hoy es:", dia + "/" + mes + "/" + año);
}


mostrarFechaActual();


function calcularPerimetroRectangulo (base, altura) {
    let perimetro = 2 * (base + altura);
    console.log("El perimetro del rectangulo es:", perimetro);
}
calcularAreaRectangulo(4, 8);


function calcularIMC (peso, altura) {
    let IMC = peso / (altura * altura);
    return IMC;
}
let miIMC = calcularIMC(70, 1.75);
console.log("Tu IMC es:", miIMC);