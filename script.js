const danceFloor = document.getElementById("dance-floor");
const panel1 = document.getElementById("panel1");
const panel2 = document.getElementById("panel2");
const dancer = document.getElementById("dancer");

function randomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}

setInterval(function () {
    panel1.style.backgroundColor = randomColor();
    panel2.style.backgroundColor = randomColor();
}, 1500);

danceFloor.addEventListener("click", function () {
    danceFloor.style.backgroundColor = randomColor();
});

dancer.addEventListener("click", function (event) {
    event.stopPropagation();

    dancer.textContent = "💃";
});