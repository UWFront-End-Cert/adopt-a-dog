console.log("js is working");
//hide original blog content (query for articles, loop to change display state)
let articlesToHide = document.querySelectorAll("article");
for (var i = 0; i < articlesToHide.length; i++) {
  articlesToHide[i].style.display = "none";
}
console.log("hid original html content");

//create blog-jects array (sorry clean coding practices i want this name to work)
let blogjects = [
  {
    header: "Traveling with your dog",
    picture: "./images/blog-1.jpg",
    altText: "a person sitting near an overlook into the Grand Canyon",
    bodyText1: `Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do
    should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended
    declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed.
    Behaviour
    excellent middleton be as it curiosity departure ourselves.`,
    bodyText2:
      "Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and make two real miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man.",
  },
  {
    header: "How to walk multiple dogs",
    picture: "./images/blog-2.jpg",
    altText: "group of several leashed dogs in a park",
    bodyText1: `Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do
    should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended
    declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed.
    Behaviour
    excellent middleton be as it curiosity departure ourselves.`,
    bodyText2:
      "Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and make two real miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man.",
  },
  {
    header: "Teach Your Dog To Fetch!",
    picture: "./images/blog-3.jpg",
    altText:
      "silhouette image of person playing with dog against a sunset background",
    bodyText1: `Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do
    should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended
    declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed.
    Behaviour
    excellent middleton be as it curiosity departure ourselves.`,
    bodyText2:
      "Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and make two real miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man.",
  },
];

//loop through blog-ject array to create new articles and html elements inside
for (var i = 0; i < blogjects.length; i++) {
  let blogject = blogjects[i];

  //store and then set each element of the article in order of article, img, div, h3, p, p

  let articleWrapper = document.createElement("article");
  articleWrapper.className = "blog-article";

  let blogTextContainer = document.createElement("div");
  blogTextContainer.className = "blog-wrapper";

  let blogImage = document.createElement("img");
  blogImage.src = blogject.picture;
  blogImage.alt = blogject.altText;

  let blogHeader = document.createElement("h3");
  blogHeader.textContent = blogject.header;

  let blogBodyText1 = document.createElement("p");
  blogBodyText1.textContent = blogject.bodyText1;
  let blogBodyText2 = document.createElement("p");
  blogBodyText2.textContent = blogject.bodyText2;

  //need to append to div id body-wrapper not body
  //store body-wrapper div to access with appendchild
  let bodyWrapper = document.getElementById("body-wrapper");
  bodyWrapper.appendChild(articleWrapper);
  articleWrapper.appendChild(blogImage);
  articleWrapper.appendChild(blogTextContainer);
  blogTextContainer.appendChild(blogHeader);
  blogTextContainer.appendChild(blogBodyText1);
  blogTextContainer.appendChild(blogBodyText2);
  console.log("dynamically appended article content");
}
