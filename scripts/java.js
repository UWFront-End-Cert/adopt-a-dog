// Dog cards
function dogAlert(name, breed, price) {
    alert('Name: ' + name +'\n' + 'Breed: ' + breed + '\n' + 'Price: ' + price);
}


// Cart math
let dogPrice = 0
let cartTotal = 0
function clickAdopt(price, quantity) {
    dogPrice = (price * quantity)
    cartTotal = dogPrice + cartTotal;
    alert('Cart total: $' + cartTotal)
}


// Form alert
const form = document.getElementById('contactForm');

const submitButton = document.createElement('button');
submitButton.setAttribute('type','submit');
submitButton.textContent = 'Submit' ;

form.appendChild(submitButton);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you. The form information has been received.')
})


//Form console.log
let textInput = document.getElementById('text-input');
let textInputLog = [textInput.name, textInput.value];

let radioInput = document.getElementById('radio-input');
let radioInputLog = [radioInput.name, radioInput.checked];

let checkInput = document.getElementById('check-input');
let checkInputLog = [checkInput.name, checkInput.checked];

let message = document.getElementById('contact-message');

console.log(textInputLog);
console.log(radioInputLog);
console.log(checkInputLog);
console.log(message);