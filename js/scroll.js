let scrollInterval; // Guardará el interval

const scrollSpeed = 200; // píxeles por cada tick
const tickTime = 10;   // ms entre cada tick

const scrollDownBtn = document.querySelector('.main__down');
const scrollUpBtn = document.querySelector('.main__up');

// Función para iniciar scroll
function startScrolling(amount) {
  scrollInterval = setInterval(() => {
    window.scrollBy({ top: amount });
  }, tickTime);
}

// Función para detener scroll
function stopScrolling() {
  clearInterval(scrollInterval);
}

// Evento para bajar
scrollDownBtn.addEventListener('mousedown', () => startScrolling(scrollSpeed));
scrollDownBtn.addEventListener('mouseup', stopScrolling);
scrollDownBtn.addEventListener('mouseleave', stopScrolling); // por si se mueve el cursor fuera

// Evento para subir
scrollUpBtn.addEventListener('mousedown', () => startScrolling(-scrollSpeed));
scrollUpBtn.addEventListener('mouseup', stopScrolling);
scrollUpBtn.addEventListener('mouseleave', stopScrolling);