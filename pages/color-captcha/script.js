var checkbox = document.querySelector("#checkbox");
var elements = document.querySelectorAll(".element");
var selectColor = document.querySelector("#SelectColor");
var letters = "0123456789ABCDEF";
var colors = [];
checkbox.disabled = true;
elements.forEach(function (x) {
    var color = "#";
    for (var index = 0; index < 6; index++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    x.style.backgroundColor = color;
    x.innerHTML = color;
    x.addEventListener("click", function () {
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
