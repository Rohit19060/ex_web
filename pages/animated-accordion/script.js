"use strict";
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", toggleAccordion);
}
function toggleAccordion(e) {
    const target = e.currentTarget;
    target.classList.toggle("active");
    var panel = target.nextElementSibling;
    if (panel.style.maxHeight && panel.style.maxHeight != "0px") {
        panel.style.maxHeight = "0px";
    }
    else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}
//# sourceMappingURL=script.js.map