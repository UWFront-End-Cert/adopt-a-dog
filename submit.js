
// document.getElementById("submit").addEventListener("click", submit);

// var formVals = [];

// function submit() {
//     alert("Thank you. The form information has been received");
//     formVals.push(document.getElementById("fname").value);
//     formVals.push(document.getElementById("eaddress").value);
//     formVals.push(document.getElementById("address").value);
//     formVals.push(document.getElementById("city").value);
//     formVals.push(document.getElementById("state").value);
//     formVals.push(document.getElementById("zcode").value);
//     formVals.push(document.getElementById("yes").value);
//     formVals.push(document.getElementById("no").value);
//     formVals.push(document.getElementById("loc").value);
//     console.log("Javascript garthered this info -> " + formVals);
// }


// set handler for counter button
$(".btn2").click(onClickIncrementCount)

function handleFormSubmit() {
    // get text for first and last name inputs then console.log the output
    // note - have to use .val() to get text content of input fields
      let firstName = $('#fname').val()
      let eaddress = $('#eaddress').val()
      let address = $('#address').val()
      let city = $('#city').val()
      let state = $('#state').val()
      let zip = $('#zcode').val()
      let firstTimeAdopterYes = $("#yes").prop("checked")
      let firstTimeAdopterNo = $("#no").prop("checked")
      let pickUpLoc = $('#loc').val()

      console.log('firstName = ' + firstName)
      console.log('email address = ' + eaddress)
      console.log('Street address = ' + address)
      console.log('city = ' + city)
      console.log('state = ' + state)
      console.log('zip = ' + zip)
      console.log('firstTimeAdopterYes = ' + firstTimeAdopterYes)
      console.log('firstTimeAdopterNo = ' + firstTimeAdopterNo)
      console.log('Pickup Location = ' + pickUpLoc)
  }
  
  // set handler for form data
  $('#submit').click(handleFormSubmit)