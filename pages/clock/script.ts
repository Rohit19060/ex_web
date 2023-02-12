function showTime() {
    const userName = "Rohit Jain";
    const user = document.querySelector("#user") as HTMLDivElement;
    const clock = document.querySelector("#displayClock") as HTMLDivElement;
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = h < 12 ? "AM" : "PM";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
    }
    if (h < 8 && session === "AM") {
        user.innerHTML = `Good Morning ${userName}`;
    } else if (h < 11 && session === "AM") {
        user.innerHTML = `Good Day ${userName}`;
    } else if (h < 8 && session === "PM") {
        user.innerHTML = `Good afternoon ${userName}`;
    } else {
        user.innerHTML = `Good Morning ${userName}`;
    }
    clock.innerHTML = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}<small>.${s < 10 ? "0" + s : s}|${session}</small>`;
    setTimeout(showTime, 1000);
}

showTime();
