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

console.log("the javascript has made it to the cart loop");
// create global variables for the checkout price, price to add, and dynamic value at top right
let total = 0;
displayedCart = document.getElementById("displayed-cart");

//query document for all buttons child of .dog-card
let dogButtons = document.querySelectorAll(".dog-card button");
console.log(dogButtons.length);

//loop to watch for click to button
for (var i = 0; i < dogButtons.length; i++) {
  (function (i) {
    dogButtons[i].addEventListener(
      "click",
      (e) => {
        let dogCost = e.target.parentElement
          .querySelector(".dog-card img")
          .getAttribute("dog-cost");
        //add new dog cost to existing total (starts at 0 hopefully)
        total = Number(dogCost) + total;
        //alert the dog cost and show the addition to the user, update the total
        alert(
          "This dog is $" +
            dogCost +
            " and when added, your total is now: $" +
            total
        );
        //update the html for the dynamic cart
        displayedCart.innerHTML = "$" + total;
        return total;
      },
      false
    );
  })(i);
}

console.log("script finished");
