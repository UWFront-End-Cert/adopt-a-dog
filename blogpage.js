/*Blog Page*/

const mainContent = document.querySelector(
  "section.main-content:not(.sr-only)"
);
mainContent.setAttribute("id", "main");

const blogHeader = document.createElement("h1");
blogHeader.textContent = "Adoptadog Blog";
blogHeader.setAttribute("class", "blog-articles");
mainContent.appendChild(blogHeader);

const postInfo = [
  {
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/blog-1.jpg",
    alt: "Dog an owner enjoying view of the Grand Canyon",
    headline: "Traveling With Your Dog",
    blogText:
      "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    blogText1:
      "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
  },
  {
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/blog-2.jpg",
    alt: "Four dogs being walked in town",
    headline: "How To Walk Multiple Dogs",
    blogText:
      "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    blogText1:
      "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
  },
  {
    image:
      "https://anthonyjprater.github.io/html200-adopt-a-dog/images/blog-3.jpg",
    alt: "Dog and owner playing fetch in the twilight",
    headline: "Teach Your Dog To Fetch!",
    blogText:
      "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    blogText1:
      "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
  },
];

const blogPrev = document.createElement("div");
blogPrev.setAttribute("class", "blog-preview");
mainContent.appendChild(blogPrev);

for (let i = 0; i < postInfo.length; i++) {
  const imageContainer = document.createElement("figure");
  imageContainer.setAttribute("class", "blog-image");
  const image = document.createElement("img");
  image.setAttribute("src", postInfo[i].image);
  image.setAttribute("alt", postInfo[i].alt);
  imageContainer.appendChild(image);
  blogPrev.appendChild(imageContainer);

  const blogArt = document.createElement("article");
  blogPrev.appendChild(blogArt);

  const title = document.createElement("h3");
  const titleText = document.createTextNode(postInfo[i].headline);
  blogArt.appendChild(title);
  title.appendChild(titleText);

  const entry = document.createElement("p");
  const entryText = document.createTextNode(postInfo[i].blogText);
  blogArt.appendChild(entry);
  entry.appendChild(entryText);

  const entry2 = document.createElement("p");
  const entryText2 = document.createTextNode(postInfo[i].blogText1);
  blogArt.appendChild(entry2);
  entry2.appendChild(entryText2);
}

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
