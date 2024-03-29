function Validation() {
    const form = document.getElementById("form") as HTMLFormElement;
    const emailEle = document.getElementById("email") as HTMLInputElement;
    const email = emailEle.value;
    var text = document.getElementById("text") as HTMLSpanElement;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Your Email Address in Valid";
        text.style.color = "#00ff00";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter Valid Email address";
        text.style.color = "#ff0000";
    }
    if (email == "") {
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}