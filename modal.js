 
// Obtén elementos del DOM
const modal = document.getElementById("video-modal");
const modalBtns = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.getElementById("close-modal");
const videoFrame = document.getElementById("video-frame");

// Función para abrir el modal
function openModal(videoUrl) {
    videoFrame.src = videoUrl;
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    videoFrame.src = "";
    modal.style.display = "none";
}

// Event listener para abrir el modal cuando se hace clic en el botón
modalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const videoUrl = btn.getAttribute("data-video");
        openModal(videoUrl);
    });
});

// Event listener para cerrar el modal cuando se hace clic en la "x"
closeModalBtn.addEventListener("click", closeModal);

// Event listener para cerrar el modal cuando se presiona la tecla Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const botonMostrarTextos = document.getElementById('mostrarTextos');
    const titulo = document.getElementById('titulo');
    const subtitulo = document.getElementById('subtitulo');

    function mostrarTextos() {
        titulo.classList.toggle('mostrado');
        subtitulo.classList.toggle('mostrado');
    }
    function mostrarTextos() {
        titulo.classList.toggle('mostrado');
        subtitulo.classList.toggle('mostrado');
    }
    
    function ocultarTexto() {
        titulo.classList.toggle('mostrado');
        subtitulo.classList.toggle('mostrado');
    }
    
    botonMostrarTextos.addEventListener('mouseenter', function() {
        mostrarTextos();
    });
    
    titulo.addEventListener('transitionend', function() {
        if (!titulo.classList.contains('mostrado')) {
            titulo.classList.add('oculto');
            subtitulo.classList.add('oculto');
        }
    });
    
    // Puedes agregar un evento 'mouseleave' para ocultar los textos cuando el mouse sale del botón
    botonMostrarTextos.addEventListener('mouseleave', function() {
        ocultarTexto();
    });
    
});


document.addEventListener('DOMContentLoaded', function () {
    // Función para abrir el modal
    function abrirModalPdf(modal, contenido, url) {
      modal.style.display = 'flex';
      contenido.src = url;
      document.body.style.overflow = 'hidden'; // Evita el desplazamiento de fondo cuando el modal está abierto
    }
  
    // Función para cerrar el modal
    function cerrarModalPdf(modal, contenido) {
      modal.style.display = 'none';
      contenido.src = '';
      document.body.style.overflow = ''; // Restaura el desplazamiento de fondo al cerrar el modal
    }
  
    // Botón del PDF y modal
    const verPdfModalBtn = document.getElementById('verPdfModalBtn');
    const modalPdf = document.getElementById('modalPdf');
    const cerrarModalPdfBtn = document.getElementById('cerrarModalPdf');
    const pdfViewerModal = document.getElementById('pdfViewerModal');
    const modalOverlayPdf = document.createElement('div'); // Agrega un overlay para cerrar el modal haciendo clic fuera de él
  
    // URL de tu PDF
    const pdfURL = './img/HV-desarrollador-web-Santiago-Mnotoya.pdf';
  
    verPdfModalBtn.addEventListener('click', function () {
      abrirModalPdf(modalPdf, pdfViewerModal, pdfURL);
      document.body.appendChild(modalOverlayPdf);
    });
  
    cerrarModalPdfBtn.addEventListener('click', function () {
      cerrarModalPdf(modalPdf, pdfViewerModal);
      document.body.removeChild(modalOverlayPdf);
    });
  
    // Cierra el modal al presionar la tecla "Escape" (ESC)
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalPdf.style.display === 'flex') {
        cerrarModalPdf(modalPdf, pdfViewerModal);
        document.body.removeChild(modalOverlayPdf);
      }
    });
  
    // Cierra el modal haciendo clic fuera de él
    modalOverlayPdf.addEventListener('click', function () {
      cerrarModalPdf(modalPdf, pdfViewerModal);
      document.body.removeChild(modalOverlayPdf);
    });
  });
  
   // Función para aplicar el efecto de brillo cada 3 segundos
   function aplicarBrillo() {
    const boton = document.getElementById('verPdfModalBtn');

    // Agrega la clase que activa el efecto de brillo
    boton.classList.add('brillo-activo');

    // Elimina la clase después de 1 segundo
    setTimeout(function() {
      boton.classList.remove('brillo-activo');
    }, 1000);
  }

  // Llama a la función cada 3 segundos
  setInterval(aplicarBrillo, 2000);