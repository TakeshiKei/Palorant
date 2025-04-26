let desc = document.querySelectorAll('.desc')
desc.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('active')
}))

const descriptionBtn = document.getElementById('btn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Tampilkan pop-up saat tombol Description ditekan
descriptionBtn.addEventListener('click', () => {
    popup.style.display = 'flex'; // Tampilkan pop-up
});

// Sembunyikan pop-up saat tombol Close ditekan
closePopup.addEventListener('click', () => {
    popup.style.display = 'none'; // Sembunyikan pop-up
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card-inner").forEach((card) => {
        card.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}