const mapsData = [{
        name: "Sunset",
        img: "./Images/Maps/sunset.png",
        desc: "Set in a Los Angeles-inspired cityscape at dusk, Sunset features tight chokepoints and mid control as the key to victory. A classic two-site map with a fresh aesthetic.",
        tags: ["Two Sites", "Mid Control", "Cityscape"],
        gallery: [
            "./Images/Maps/sunset.png",
            "./Images/Maps/sunset-map.png"
        ]
    },
    {
        name: "Bind",
        img: "./Images/Maps/bind.png",
        desc: "A teleport-heavy layout with no mid lane. Bind encourages fast site switches and unpredictable flanks through its unique one-way teleporters.",
        tags: ["Teleporters", "No Mid", "Fast Rotations"],
        gallery: [
            "./Images/Maps/bind.png",
            "./Images/Maps/bind-map.png"
        ]
    },
    {
        name: "Ascent",
        img: "./Images/Maps/ascent.png",
        desc: "A Venice-inspired map with a large open mid area that dominates control. Ascent rewards map awareness and strong mid-holds.",
        tags: ["Open Mid", "Two Sites", "Control-Based"],
        gallery: [
            "./Images/Maps/ascent.png",
            "./Images/Maps/ascent-map.png"
        ]
    },
    {
        name: "Lotus",
        img: "./Images/Maps/lotus.png",
        desc: "An ancient structure deep in the Western Ghats. Lotus introduces rotating doors and three sites, demanding adaptive strategies and multi-site pressure.",
        tags: ["Three Sites", "Rotating Doors", "Flexible Attack"],
        gallery: [
            "./Images/Maps/lotus.png",
            "./Images/Maps/lotus-map.png"
        ]
    },
    {
        name: "Haven",
        img: "./Images/Maps/haven.png",
        desc: "Known for being the only map with three bomb sites, Haven challenges defenders with its expansive layout and fast-paced rotations.",
        tags: ["Three Sites", "Wide Layout", "High Mobility"],
        gallery: [
            "./Images/Maps/haven.png",
            "./Images/Maps/haven-map.png"
        ]
    },
    {
        name: "Split",
        img: "./Images/Maps/split.png",
        desc: "A densely built map with vertical ropes and narrow lanes. Split rewards teams with sharp coordination and control over tight spaces.",
        tags: ["Verticality", "Narrow Chokes", "Rope Plays"],
        gallery: [
            "./Images/Maps/split.png",
            "./Images/Maps/split-map.png"
        ]
    }
];


const mapGrid = document.getElementById("mapGrid");
let currentIndex = 0;
let currentGalleryIndex = 0;

mapsData.forEach((map, index) => {
    const tagsHTML = map.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
    const card = `
    <div class="map-card" data-index="${index}">
      <img src="${map.img}" alt="${map.name}" />
      <div class="map-info">
        <div class="map-name">${map.name}</div>
        <div class="map-desc">${map.desc}</div>
        <div class="tags">${tagsHTML}</div>
      </div>
    </div>
  `;
    mapGrid.innerHTML += card;
});

function updatePopup(index, galleryIndex = 0) {
    const popupImg = document.getElementById("popup-img");
    const popupDesc = document.getElementById("popup-desc");

    const map = mapsData[index];
    popupImg.src = map.gallery[galleryIndex];
    popupDesc.textContent = map.desc;

    currentIndex = index;
    currentGalleryIndex = galleryIndex;
}

document.addEventListener("click", e => {
    const card = e.target.closest(".map-card");
    if (card) {
        const index = parseInt(card.getAttribute("data-index"));
        updatePopup(index, 0);

        const popup = document.getElementById("popup");
        popup.classList.remove("hide");
        popup.classList.add("show");
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    const gallery = mapsData[currentIndex].gallery;
    currentGalleryIndex = (currentGalleryIndex + 1) % gallery.length;
    updatePopup(currentIndex, currentGalleryIndex);
});

document.getElementById("prevBtn").addEventListener("click", () => {
    const gallery = mapsData[currentIndex].gallery;
    currentGalleryIndex = (currentGalleryIndex - 1 + gallery.length) % gallery.length;
    updatePopup(currentIndex, currentGalleryIndex);
});

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("show");
    popup.classList.add("hide");
    setTimeout(() => {
        popup.style.display = "none";
    }, 300);
}

const observer = new MutationObserver(() => {
    const popup = document.getElementById("popup");
    if (popup.classList.contains("show")) {
        popup.style.display = "flex";
    }
});

observer.observe(document.getElementById("popup"), {
    attributes: true
});

// Tutup popup jika user klik di luar popup-content
document.getElementById("popup").addEventListener("click", (e) => {
    const popupContent = document.querySelector(".popup-content");
    if (!popupContent.contains(e.target)) {
        closePopup();
    }
});

// Tutup popup jika tombol Escape ditekan
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        const popup = document.getElementById("popup");
        if (popup.classList.contains("show")) {
            closePopup();
        }
    }
});