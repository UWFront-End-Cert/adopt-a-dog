function formLog() {
  let name = $("#name").val();
  let email = $("#email").val();
  let address = $("#address").val();
  let city = $("#City").val();
  let state = $("#State").val();
  let zip = $("#Zip").val();
  let firstTime = $('input[name="firstAdopter"]:checked').val();

  let pickupLocation = $("#location").val();

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Address: " + address + ", " + city + ", " + state + " " + zip);
  console.log("First Time Adopter?: firstTime.toUpperCase()");
  console.log("Pickup At: " + pickupLocation);

  alert("Thank you. The form information has been received.");

/* Use this code to test that everything is logged correctly
  alert("Name: " + name);
  alert("Email: " + email);
  alert("Address: " + address + ", " + city + ", " + state + " " + zip);
  alert("First Time Adopter?: " + firstTime.toUpperCase());
  alert("Pickup At: " + pickupLocation);
*/
}
