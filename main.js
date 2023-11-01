// Seleccionar el elemento con el ID "suiche" (botón para alternar el modo oscuro)
const btn = document.querySelector('#suiche');

// Agregar un evento de clic al botón "suiche"
btn.addEventListener('click', () => {
    // Alternar la clase "dark" en el elemento "body" para activar/desactivar el modo oscuro
    document.body.classList.toggle('dark');
    
    // Alternar la clase "active" en el botón "suiche" para cambiar su apariencia
    btn.classList.toggle('active');
});

// Seleccionar elementos relacionados al menú de navegación tipo hamburguesa
const ham = document.querySelector('.ham'); // El botón de hamburguesa
const enlaces = document.querySelector('.enlaces-menu'); // La lista de enlaces
const barras = document.querySelectorAll('.ham span'); // Las barras del botón de hamburguesa

// Variable para rastrear el estado del menú
let menuVisible = false;

// Función para cerrar el menú
function cerrarMenu() {
    enlaces.classList.remove('activado');
    barras.forEach(child => {
        child.classList.remove('animado');
    });
    ham.classList.remove('girar');
    menuVisible = false;
}

// Agregar un evento de clic al botón de hamburguesa
ham.addEventListener('click', () => {
    if (!menuVisible) {
        enlaces.classList.add('activado');
        barras.forEach(child => {
            child.classList.add('animado');
        });
        ham.classList.add('girar');
        menuVisible = true;
    } else {
        cerrarMenu();
    }
});

// Obtén una lista de todos los enlaces en el menú
const links = document.querySelectorAll('.enlaces-menu a');

// Agregar un evento de clic a cada enlace
links.forEach(link => {
    link.addEventListener('click', () => {
        cerrarMenu();
    });
});

// Agregar un evento de scroll para cerrar el menú cuando se hace scroll
window.addEventListener('scroll', () => {
    if (menuVisible) {
        cerrarMenu();
    }
});







