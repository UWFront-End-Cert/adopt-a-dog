/* Dog Info */
function showInfo(name,breed,fee) {
  let result = (name + ' is a ' + breed + ' and can be adopted for ' + fee + '.');
  alert(result);
}

let total = 0;
function addTotal(fee) {
  let result = ('Your total is $' + (total += fee));
  alert(result);
}


/* Checkout Form */
function submitInfo() {
  let entries = document.getElementsByTagName('input', 'option');
  alert('Thank you! The form information has been received.');

  let i;
  for (i = 0; i < entries.length; i++) {
  console.log(entries[i].value);
  }
}
