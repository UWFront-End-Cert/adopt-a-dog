const form = document.createElement('form');

const fields = ['Your Name Here', 'Your Email Here'];
for (let i = 0; i < fields.length; i += 1) {
const label = document.createElement('label');
label.textContent = fields[i];
label.setAttribute('for', fields[i]);
const input = document.createElement('input');
input.setAttribute('id', fields[i]);
form.appendChild(label);
form.appendChild(input);
}

document.body.appendChild(form);

const submitButton = document.createElement('button');
submitButton.setAttribute('type' , 'submit');
submitButton.textContent = 'Submit'

form.appendChild(submitButton);

form.addEventListener('submit' , function(event) {
    event.preventDefault();
    alert('Form submitted');
});



let fullName = document.getElementById('Name').value
console.log(fullName);

let fullEmail = document.getElementById('Email').value
console.log(fullEmail);

let streetAddress = document.getElementById('AddressHome').value
console.log(AddressHome);

let cityHome = document.getElementById('City').value
console.log(cityHome);

let stateName = document.querySelector('#State').value;
console.log(stateName);

let zipCode = document.getElementById('ZipcodeHome').value
console.log(zipCode);

let adopterStatus = document.querySelector('input[ name="special"]:checked').value;
console.log(adopterStatus);

let pickupLocation = document.querySelector('#Pickup').value;
console.log(pickupLocation);





$(function() {   
  
    console.log($('#Name').val())
    console.log($('#Email').val())
    console.log($('#AddressHome').val())
    console.log($('#City').val())
    console.log($('#State').val())
    console.log($('#ZipcodeHome').val())
    console.log($('input[type=radio]').is())
    console.log($('#Pickup').is())
})
  





















