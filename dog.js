let totalPrice = 0;

function dogInfo(tag, name, breed, fee) {
    let html = document.getElementById(tag).innerHTML;
    if (html === "") {
        document.getElementById(tag).innerHTML = name + " is a " + breed + ". Adoption fee is $" + fee.toString();
    } else {
        document.getElementById(tag).innerHTML = "";
    }
}

function dogAdopt(tag, fee) {
    let button = document.getElementById(tag);
    let buttonAction = button.innerText;
    if (buttonAction === "Adopt") {
        button.innerText = "Remove";
        button.classList.add('button-remove');
        totalPrice += fee;
    } else {
        button.innerText = "Adopt";
        button.classList.remove('button-remove');
        totalPrice -= fee;
    }
    document.getElementById("total").innerHTML = "$" + totalPrice.toString();
}
