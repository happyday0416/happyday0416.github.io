var color = "#ffffe0";

function chooseOrange() {
    color = "orange";
}

function chooseYellow() {
    color = "yellow";
}

function chooseBlue() {
    color = "blue";
}

function chooseGreen() {
    color = "green";
}

function painting(id) {
    var block = document.getElementById(id);
    block.style.backgroundColor = color;
}
