

function dogImage(name, breed, fees) {
  alert('Name: ' + name + ' Breed: ' + breed + ' Adoption Fees: $ ' + fees);
}

  
   
let total = 0;
function addDogCost(cost) {
  total = total + Number(cost);
  alert(total)
}






$(function() {
  console.log("Document ready; javascript running")
  $('#show').click(function(){
    $('.dog-box').show(500)
  })
  $('.dog-box').mouseenter(function(){
    $(this).fadeTo("slow", .7)
  }).mouseleave(function(){
    $(this).fadeTo("fast", 1)
  })
});


let CartTotal = 0;
$(function() {
  $('.green-button-adopt').click(function(){
       $('.green-button-adopt').hide().delay(500).show('slow')
       console.log("an adopt button was clicked!")
      
        CartTotal = CartTotal + Number(123.45);
        alert('This is the adoption fee total owed $' + CartTotal )


       


     })
  });

 
