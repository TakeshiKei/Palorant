document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-audio");
    const musicToggle = document.getElementById("music-toggle");

    // Event listener untuk toggle musik
    musicToggle.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch(() => {
                alert("Audio tidak bisa diputar otomatis. Klik untuk mengizinkan.");
            });
            musicToggle.src = "../Images/music-on.png"; // Ubah ikon ke "musik hidup"
        } else {
            audio.pause();
            musicToggle.src = "../Images/music-off.png"; // Ubah ikon ke "musik mati"
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
