const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const images = document.querySelectorAll(".carousel-slide img");
let currentIndex = 0;

nextButton.addEventListener("click", () => {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
});

prevButton.addEventListener("click", () => {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add("active");
});

// Mostrar la primera imagen al iniciar
images[currentIndex].classList.add("active");
