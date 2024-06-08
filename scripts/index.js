/*
for dog cards:
"create click handlers that alert the dog's info when the image is clicked"

classify all dog profiles' images

when clicked, seek the p element child to the parent dog profile OR create attributes in the img file, less desirable

alert the formatted values of the elements or attributes

*/

console.log("The javascript has begun as intended");

let dogCards = document.querySelectorAll(".dog-card img");
console.log(dogCards.length);

for (var i = 0; i < dogCards.length; i++) {
  (function (i) {
    dogCards[i].addEventListener(
      "click",
      (e) => {
        let dogName = e.target.getAttribute("dog-name");
        let dogBreed = e.target.getAttribute("dog-breed");
        let dogCost = e.target.getAttribute("dog-cost");
        let alertString =
          "Dog Name, breed, and cost: " +
          dogName +
          ", " +
          dogBreed +
          ", $" +
          dogCost +
          ". Click the button below the dog to add them to your cart.";
        alert(alertString);
        console.log(dogName);
      },
      false
    );
  })(i);
}

/*

make buttons function to add to cart total
make cart total alert
*/
console.log("script finished");
