function editInfo() {
    const today = new Date();

    const currentYear = today.getFullYear();

    document.getElementById('currentyear').textContent = currentYear

    document.getElementById('lastmodified').textContent = document.lastModified;
}

editInfo();

const videos = ["videos/burst-bait.mp4", "videos/calculated.mp4"];

function loadRandomClip() {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const clipbox = document.getElementById("clip");

    if (clipbox) {
        clipbox.src = videos[randomIndex];
        clipbox.load();
    }
}

window.addEventListener('DOMContentLoaded', loadRandomClip);

function randomButton() {
    const button = document.createElement("button");
    const box = document.getElementById("container");

    button.textContent = "Randomizer clip";

    button.onclick = loadRandomClip;
    box.appendChild(button);
}

randomButton();