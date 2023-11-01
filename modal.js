 
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
 