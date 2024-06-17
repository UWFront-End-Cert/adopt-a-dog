let totalPrice = 0;

function dogInfo(tag, name, breed, fee) {
    let html = document.getElementById(tag).innerHTML;
    if (html == "") {
        document.getElementById(tag).innerHTML = name + " is a " + breed + ". Adoption fee is $" + fee.toString();
    } else {
        document.getElementById(tag).innerHTML = "";
    }
}

function dogAdopt(tag, fee) {
    let buttonAction = document.getElementById(tag).innerText;
    if (buttonAction == "Adopt") {
        document.getElementById(tag).innerText = "Remove";
        totalPrice = totalPrice + fee;
    } else {
        document.getElementById(tag).innerText = "Adopt";
        totalPrice = totalPrice - fee;
    }
    document.getElementById("total").innerHTML = "$" + totalPrice.toString();
}