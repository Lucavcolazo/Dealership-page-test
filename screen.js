// Hacer la pantalla de carga
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        // Agrega la clase "hidden" para iniciar la transición de desvanecimiento
        document.querySelector(".cargascreen").classList.add("hidden");
        // Muestra el contenido de la página después de la animación
        document.querySelector(".content").style.display = "block";
    }, 1000); // Espera 1 segundo
});

function closeMenu() {
    document.getElementById('menu').style.clipPath = 'circle(0% at top right)';
}

// Hacer que al tocar un link se cierre el menu
var links = document.querySelectorAll('.nav_links a');
links.forEach(function (link) {
    link.addEventListener('click', closeMenu);
});
