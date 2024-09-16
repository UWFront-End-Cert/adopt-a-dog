/* Lesson 4 Assignment 2 */

let balance = 0;

/*click handlers that alerts the dog’s information when clicking on the dog’s photo. */
function dogBark(dogName, dogBreed, fee) {
  alert("Dog name: " + dogName + "\nDog breed: " +  dogBreed + "\nAdoption fee: $" + fee);
}

/* Click Handlers on each dog's button that will add to the total. Alert total. */
// Adopt button
function btnAdder(fee) {
  balance += parseInt(fee);
  alert(balance);
}

/* Checkout submitButton - checkout.html
function submitAlert(submit) {
  alert("Thank you. Form information has been received.");
}
*/

/* Checkout form - console log values */
const fields = [
  {
    name: 'full-name',
    label: 'Full Name'
  },
  {
    name: 'email',
    label: 'Email Address'
  },
  {
    name: 'address',
    label: 'Street Address'
  },
  {
    name:  'city',
    label: 'City'
  },
  {
    name: 'state',
    label: 'ST'
  },
  {
    name: 'zip',
    label: 'Zip Code'
  },
  {
    name: 'radio',
    label: 'First Time Adopter?'
  },
  {
    name: 'location',
    label: 'Pickup Location'
  }
];

const form = document.createElement('form');
document.body.appendChild(form);


for (let f = 0; f < fields.length; f += 1) {

  const field = fields[f];

  const label = document.createElement('label');
  label.textContent = field.label;
  label.setAttribute('for', field.name);

  const input = document.createElement('input');
  input.setAttribute('id', field.name);

  form.appendChild(label);
  form.appendChild(input);
}

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);

form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you. Form information has been received.');
  /* jQuery for checkout.html form page */
  $(function() {
    console.log($('input'))
  })
});


/* jQuery for dog.html page */
$(function() {
  console.log("Document ready; javascript running")
  $('nav').hide().delay(300).show("slow")
  $('#hide').click(function(){
    $('img').hide()
  })
  $('#show').click(function(){
    $('img').show(300)
  })
  $('img').mouseenter(function(){
    $(this).fadeTo("slow", .75)
  }).mouseleave(function(){
    $(this).fadeTo("fast", 1)
  })
});
