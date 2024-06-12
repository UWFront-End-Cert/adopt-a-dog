/*Form Submit*/
function drop() {
  alert("Thank you. The form information has been received");
}

const form = document.getElementById("form");
form.addEventListener("submit", drop);

$("form").submit(function (event) {
  event.preventDefault();
  let x = document.getElementById("form").elements;
  console.log("Username: ", x["name"].value);
  console.log("Email: ", x["email"].value);
  console.log("Address: ", x["address"].value);
  console.log("City: ", x["city"].value);
  console.log("State: ", x["state"].value);
  console.log("Zipcode: ", x["zipCode"].value);
  console.log("First Time Adopter: ", x["firstTimeAdopter"].value);
  console.log("Pickup Location: ", x["dropdown"].value);
  console.log("Submit: ", x["submit"].value);
});

/*---------- Toggle Mobile Nav Menu -----------*/

const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenuClose = document.getElementById("menu-close");
const mainNav = document.querySelector(".main-nav");

function mobileToggle() {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
    mobileMenu.style.visibility = "hidden";
    mobileMenuToggle.style.display = "flex";
    mobileMenuClose.style.display = "none";
    mobileMenuClose.style.visibility = "hidden";
    mainNav.style.justifyContent = "flex-end";
  } else {
    mobileMenu.style.display = "block";
    mobileMenu.style.visibility = "visible";
    mobileMenuToggle.style.display = "none";
    mobileMenuClose.style.display = "flex";
    mobileMenuClose.style.visibility = "visible";
    mainNav.style.justifyContent = "space-between";
  }
}

mobileMenuToggle.addEventListener("click", mobileToggle);
mobileMenuClose.addEventListener("click", mobileToggle);

/*--------------- End Mobile Nav Menu -------------*/
