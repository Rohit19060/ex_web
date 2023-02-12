function validation() {
    var aEle = document.getElementById("fname") as HTMLInputElement;
    let a = aEle.value;
    var bEle = document.getElementById("lname") as HTMLInputElement;
    var b = bEle.value;
    var cEle = document.getElementById("mob") as HTMLInputElement;
    var c = cEle.value;
    var dEle = document.getElementById("code") as HTMLInputElement;
    var d = dEle.value;
    if (a == " " || b == " " || c == " " || d == " ") {
        alert("Form Should not be empty");
        return false;
    }
    // Validation for First Name
    if (a.length < 3) {
        alert("First Name should be minimum 3 characters");
        return false;
    }
    if (c.length != 10) {
        alert("Mobile Number should be 10 digits");
        return false;
    }
    if (typeof c === "string" && !Number.isNaN(Number(c))) {
        alert("Mobile Number should be a number");
        return false;
    }

}