document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-audio");
    const musicToggle = document.getElementById("music-toggle");

    musicToggle.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch(() => {
                alert("Can't play audio");
            });
            musicToggle.src = "./Images/music-on.png"; // Ubah ikon ke "musik hidup"
        } else {
            audio.pause();
            musicToggle.src = "./Images/music-off.png"; // Ubah ikon ke "musik mati"
        }
    });
});

document.getElementsByClassName("toggler-navbar")[0].addEventListener("click", toggleClass);

function toggleClass() {
    document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open');
    document.getElementsByClassName("sidebar")[0].classList.toggle('open');
}

// keluar dari sidebar saat menekan area luar
document.addEventListener("click", function (event) {
    const sidebar = document.querySelector(".sidebar");
    const toggler = document.querySelector(".toggler-navbar");

    if (!sidebar.contains(event.target) && !toggler.contains(event.target)) {
        sidebar.classList.remove("open");
        document.querySelector(".hamburger-menu").classList.remove("open");
    }
});

let desc = document.querySelectorAll('.desc');
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
    popup.style.display = 'none';
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