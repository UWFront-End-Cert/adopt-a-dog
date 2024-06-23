addEventListener('submit', function(event) {
    event.preventDefault();
    this.alert('Thank you. The form information has been received.');
});


function formInfo() {
    //const firstName = document.getElementById('firstName');
    //const firstNameValue = firstName.value;
    //console.log(firstNameValue);

    //const lastName = document.getElementById('lastName');
    //const lastNameValue = lastName.value;
    //console.log(lastNameValue);

    //const email = document.getElementById('email');
    //const emailValue = email.value;
    //console.log(emailValue);

    //const phone = document.getElementById('phone');
    //const phoneValue = phone.value;
    //console.log(phoneValue);

    //const contactMethod = document.getElementById('method');
    //const contactMethodValue = contactMethod.value;
    //console.log(contactMethodValue);

    const form = document.getElementById('contactForm')
    const formValues = new FormData(form);
    const firstName = formValues.get('applicantFirstName');
    const lastName = formValues.get('applicantLastName');
    const email = formValues.get('applicantEmail');
    const phone = formValues.get('applicantPhone');
    const method = formValues.get('method');
    const howHear = formValues.get('howHear');
    const helpQuestion = formValues.get('helpQuestion');

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phone);
    console.log(method);
    console.log(howHear);
    console.log(helpQuestion);
}