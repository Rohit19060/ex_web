"use strict";
const checkbox = document.querySelector("#checkbox");
const elements = document.querySelectorAll(".element");
const selectColor = document.querySelector("#SelectColor");
let letters = "0123456789ABCDEF";
let colors = [];
checkbox.disabled = true;
elements.forEach((x) => {
    let color = "#";
    for (let index = 0; index < 6; index++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    x.style.backgroundColor = color;
    x.innerHTML = color;
    x.addEventListener("click", () => {
        if (x.innerHTML === selectColor.innerHTML) {
            checkbox.checked = true;
            alert("You are Human");
            location.reload();
        }
        else {
            alert("Please Verify You are a Human");
            location.reload();
        }
    });
    colors.push(color);
});
selectColor.innerHTML = colors[Math.floor(Math.random() * colors.length)];
//# sourceMappingURL=script.js.map