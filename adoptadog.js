/*Pup Arrays*/
const pupInfo = [
  {
    name: "Murphy",
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/murphy-card.jpg",
    alt: "murphy's profile card",
    text: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae",
    onclick: "puppyCard(0)",
  },
  {
    name: "Poppy",
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/poppy-card.jpg",
    alt: "poppy's profile card",
    text: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae",
    onclick: "puppyCard(1)",
  },
  {
    name: "Jack",
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/jack-card.jpg",
    alt: "jack's profile card",
    text: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae",
    onclick: "puppyCard(2)",
  },
  {
    name: "Duffy",
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/duffy-card.jpg",
    alt: "duffy's profile card",
    text: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae",
    onclick: "puppyCard(3)",
  },
  {
    name: "Lucas",
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/lucas-card.jpg",
    alt: "lucas's profile card",
    text: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae",
    onclick: "puppyCard(4)",
  },
  {
    name: "Jake",
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/jake-card.jpg",
    alt: "jake's profile card",
    text: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae",
    onclick: "puppyCard(5)",
  },
  {
    name: "Angus",
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/angus-card.jpg",
    alt: "angus's profile card",
    text: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae",
    onclick: "puppyCard(6)",
  },
  {
    name: "Violet",
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/violet-card.jpg",
    alt: "violet's profile card",
    text: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae",
    onclick: "puppyCard(7)",
  },
  {
    name: "Piper",
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/piper-card.jpg",
    alt: "piper's profile card",
    text: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae",
    onclick: "puppyCard(8)",
  },
  {
    name: "Maximus",
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/maximus-card.jpg",
    alt: "maximus's profile card",
    text: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae",
    onclick: "puppyCard(9)",
  },
  {
    name: "Luna",
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/luna-card.jpg",
    alt: "luna's profile card",
    text: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae",
    onclick: "puppyCard(10)",
  },
  {
    name: "Stella",
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/stella-card.jpg",
    alt: "stella's profile card",
    text: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae",
    onclick: "puppyCard(11)",
  },
];

const pupsMain = document.getElementById("pups-main");
const dogList = document.createElement("h2");
dogList.textContent = "Here Are All Our Dogs!";
dogList.setAttribute("class", "all-our-dogs");
pupsMain.appendChild(dogList);

/*Loop Here*/
$(document).ready(function () {
  for (let i = 0; i < pupInfo.length; i++) {
    const profile = document.createElement("article");
    profile.setAttribute("class", "pup-profile");
    pupsMain.appendChild(profile);

    const profilePic = document.createElement("figure");
    profilePic.setAttribute("class", "profile-pic");
    profile.appendChild(profilePic);
    const image = document.createElement("img");
    image.setAttribute("src", pupInfo[i].image);
    image.setAttribute("alt", pupInfo[i].alt);
    image.setAttribute("onclick", pupInfo[i].onclick);
    image.setAttribute("width", "215");
    profilePic.appendChild(image);

    const pupstyle = document.createElement("div");
    pupstyle.setAttribute("class", "pup-style");
    profile.appendChild(pupstyle);

    const pupname = document.createElement("h3");
    pupname.textContent = pupInfo[i].name;
    pupstyle.appendChild(pupname);

    const costOfAdopt = document.createElement("p");
    costOfAdopt.textContent = "$123.45";
    costOfAdopt.innerHTML = "<b>Cost to Adopt</b>";
    pupstyle.appendChild(costOfAdopt);

    const cost = document.createElement("p");
    cost.textContent = "$123.45";
    costOfAdopt.appendChild(cost);

    const pupDesc = document.createElement("p");
    pupDesc.textContent = pupInfo[i].text;
    pupstyle.appendChild(pupDesc);

    const adoptButton = document.createElement("button");
    adoptButton.setAttribute("class", "adopt-this-dog");
    adoptButton.textContent = "Adopt";
    pupstyle.appendChild(adoptButton);

    console.log("done loading");
  }
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

/*Adoption Button --Add to Cart Function--*/

const dogBark = document.createElement("audio");
dogBark.setAttribute("id", "audio");
dogBark.setAttribute("src", "audio/single-bark-of-a-dog.ogg");
pupsMain.appendChild(dogBark);

let clicks = 0;

function adopt() {
  clicks += 1;

  function addToCart() {
    let adoptionCost = 123.45;
    let cartTotal = 0;
    let runner = adoptionCost * clicks;
    return runner;
  }
  console.log(addToCart());
  alert("Your cart total is: " + addToCart());
  document.getElementById("cartUpdate").innerHTML =
    "$" + addToCart().toFixed(2);
}

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

$(function () {
  $(".adopt-this-dog").click(function () {
    adopt();
    $(this).animate({
      opacity: "0.1",
    });
    play();
  });
});

/*Hover Effect on background for dog tiles*/
$(function () {
  $(".pup-profile").hover(
    function () {
      $(this).css("background-color", "gray");
      $(this).css("color", "white");
      $(".pup-style").css("border-color", "gray");
    },
    function () {
      $(this).css("background-color", "white");
      $(this).css("color", "#525252");
    }
  );
});

/*puppyCard() arrays*/
const names = [
  "Murphy",
  "Poppy",
  "Jack",
  "Duffy",
  "Lucas",
  "Jake",
  "Angus",
  "Violet",
  "Piper",
  "Maximus",
  "Luna",
  "Stella",
];
const breed = [
  "German Shepherd/Bull",
  "Cockapoo",
  "Beagle",
  "American Pitbull Terrier",
  "notaboxer",
  "Labrador Retriever",
  "Bullmastiff",
  "Labrador",
  "Golden Retriever",
  "Border Terrier",
  "Labrador Retriever",
  "Chihuahau",
];
const costToAdopt = [
  "123.45",
  "123.45",
  "123.45",
  "123.45",
  "123.45",
  "123.45",
  "123.45",
  "123.45",
  "123.45",
  "123.45",
  "123.45",
  "123.45",
];

/*Clicking on Dogs tile image will provide info on dogs*/

function puppyCard(x) {
  alert(
    names[x] +
      " is ready to meet you!\n\n Breed: " +
      breed[x] +
      "\n\n Cost to Adopt  $" +
      costToAdopt[x]
  );
}
