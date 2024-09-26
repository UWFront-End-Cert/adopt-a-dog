let adoptionCost = 0;

function info(name, breed, adoptionFee) {
  alert(name + "\nBreed: " + breed + "\nAdoption Fee: $" + adoptionFee);
}

function cost(fee){
  adoptionCost += fee;
  alert(`Total adoption fee is ${adoptionCost}`);
  $('#adoptionFeeCart').html(adoptionCost);
}
