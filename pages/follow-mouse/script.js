"use strict";
var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);
var xmouse = 0, ymouse = 0;
$on("mousemove", function (e) {
    xmouse = e.clientX || e.pageX;
    ymouse = e.clientY || e.pageY;
});
var ball = $("#ball");
var x = 0, y = 0, dx = 0, dy = 0, tx = 0, ty = 0, key = -1;
var followMouse = function followMouse() {
    key = requestAnimationFrame(followMouse);
    if (!x || !y) {
        x = xmouse;
        y = ymouse;
    }
    else {
        dx = (xmouse - x) * 0.125;
        dy = (ymouse - y) * 0.125;
        if (Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = xmouse;
            y = ymouse;
        }
        else {
            x += dx;
            y += dy;
        }
    }
    ball.style.left = x + "px";
    ball.style.top = y + "px";
};
//# sourceMappingURL=script.js.map