let currentTotal = 0;

function doginfo(name, breed1, breed2, fee){
  alert(name+", "+breed1+" "+breed2+", "+fee);
}

function total(fee){
  currentTotal = currentTotal+fee;
  alert('Your current total is '+currentTotal);
}

$(document).ready(function(){
  $('.submit').click(function(){
    var nameValue = document.getElementById('formName').value;
    var emailValue = document.getElementById('formEmail').value;
    var addressValue = document.getElementById('formAddress').value;
    var cityValue = document.getElementById('formCity').value;
    var stateValue = document.getElementById('formState').value;
    var zipValue = document.getElementById('formZip').value;

    console.log(nameValue + ", " + emailValue + ", " + addressValue + ", " + cityValue + ", " + stateValue + ", " + zipValue);

    alert('Thank you.  The form information has been received.');

  })
})
