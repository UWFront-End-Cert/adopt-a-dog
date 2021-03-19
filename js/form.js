//On the form page, display an alert that says "Thank you. The form information has been received" when the form has been submitted.
const form = document.getElementById('dogdataForm');

$('#dogdataForm button').click(function(e){
  //On the form page, display an alert that says "Thank you. The form information has been received" when the form has been submitted.
  event.preventDefault();
  alert('Thank you. The form information has been received.');

  //store data in an array or object
  const checkoutFormData = form.elements;
  const submitData = {};

  for(i = 0; i < checkoutFormData.length-1; i++){
    const fieldData = form[i].value;
    const fieldName = form[i].id;
    console.log(`${fieldName}: ${fieldData}`);
    submitData[fieldName] = fieldData;   //Console log the values inside the form, you can build a string or build an object.
  }
console.log(submitData);
});
