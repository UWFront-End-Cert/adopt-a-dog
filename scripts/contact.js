//store and listen for the form submission, the listener must be a function or object
let form = document.getElementById("contact-form");
form.addEventListener("submit", submitLog);
console.log("Logging all user inputs upon receipt...");

//listener function is to make an alert that the form is submitted, and to console log the submitted values
function submitLog(e) {
  //alert form submission
  alert("Thank you. The form information has been received.");
  //this line stops the page from refreshing?
  e.preventDefault();
  //crude variable for text formatting:
  let br = "\n";
  //store and log values of each form field
  let firstName = document.getElementById("first-name");
  let firstNameLog = [firstName.id, firstName.value, br];
  console.log(firstNameLog.toString());
  let lastName = document.getElementById("last-name");
  let lastNameLog = [lastName.id, lastName.value, br];
  console.log(lastNameLog.toString());
  let email = document.getElementById("email");
  let emailLog = [email.id, email.value, br];
  console.log(emailLog.toString());
  //radio buttons account type
  //document.querySelector('input[name="rate"]:checked').value;
  let catButton = document.getElementById("cat-account");
  let catButtonState = [catButton.id, catButton.checked, br];
  console.log(catButtonState.toString());
  let dogButton = document.getElementById("dog-account");
  let dogButtonState = [dogButton.id, dogButton.checked, br];
  console.log(dogButtonState.toString());
  let otherButton = document.getElementById("other-account");
  let otherButtonState = [otherButton.id, otherButton.checked, br];
  console.log(otherButtonState.toString());
  //pet age
  let petAge = document.getElementById("pet-age");
  let petAgeLog = [petAge.id, petAge.value, br];
  console.log(petAgeLog.toString());
  //referrer- make sure to return text selection, not internal value
  let referrer = document.getElementById("referrer");
  let referrerLog = [
    referrer.id,
    referrer.options[referrer.selectedIndex].innerHTML,
    br,
  ];
  console.log(referrerLog.toString());
  //textarea
  let bio = document.getElementById("bio");
  let bioContent = [bio.id, bio.value, br];
  console.log(bioContent.toString());
  //t and c checkbox
  let termsCheckbox = document.getElementById("terms-and-conditions");
  let termsState = [termsCheckbox.id, termsCheckbox.checked, br];
  console.log(termsState.toString());

  let mergedLog = firstNameLog.concat(
    lastNameLog,
    emailLog,
    catButtonState,
    dogButtonState,
    otherButtonState,
    petAgeLog,
    referrerLog,
    bioContent,
    termsState
  );
  console.log(mergedLog.join(" "));
}
