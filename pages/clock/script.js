function showTime() {
    var userName = "Rohit Jain";
    var user = document.querySelector("#user");
    var clock = document.querySelector("#displayClock");
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = h < 12 ? "AM" : "PM";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
    }
    if (h < 8 && session === "AM") {
        user.innerHTML = "Good Morning ".concat(userName);
    }
    else if (h < 11 && session === "AM") {
        user.innerHTML = "Good Day ".concat(userName);
    }
    else if (h < 8 && session === "PM") {
        user.innerHTML = "Good afternoon ".concat(userName);
    }
    else {
        user.innerHTML = "Good Morning ".concat(userName);
    }
    clock.innerHTML = "".concat(h < 10 ? "0" + h : h, ":").concat(m < 10 ? "0" + m : m, "<small>.").concat(s < 10 ? "0" + s : s, "|").concat(session, "</small>");
    setTimeout(showTime, 1000);
}
showTime();
