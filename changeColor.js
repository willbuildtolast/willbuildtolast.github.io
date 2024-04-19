function colorByday() {
    let day = new Date().getDay();
    console.log("Day:", day);

    let background = document.querySelector("body");

    if (day == 1) {
        background.style.backgroundColor = "#A9D6E5"
    }

    else if (day == 2) {
        background.style.backgroundColor = "#89C2D9"
    }
    else if (day == 3) {
        background.style.backgroundColor = "#61A5C2"
    }
    else if (day == 4) {
        background.style.backgroundColor = "#468FAF"
    }
    else if (day == 5) {
        background.style.backgroundColor = "#2C7DA0"
    }
    else if (day == 6) {
        background.style.backgroundColor = "#2A6F97"
    }

    else {
        background.style.backgroundColor = "#014F86"
    }
}
colorByday();