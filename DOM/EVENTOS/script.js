let boton = document.getElementById("cambiarEstilos");
let titilo = document.getElementById("titulo");


boton.addEventListener("click", function() {
    titilo.classList.toggle("estiloNuevo");
})