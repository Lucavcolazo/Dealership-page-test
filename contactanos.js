document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const pais = document.getElementById("pais").value;
        const comentario = document.getElementById("comentario").value;
        const direccion = document.getElementById("direccion").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        if (nombre === "" || email === "" || pais === "" || comentario === "" || direccion === "" || fechaNacimiento === "") {
            alert("Por favor, completa todos los campos obligatorios.");
            event.preventDefault();
        }
    });
});
