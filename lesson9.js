/* Lesson 9 Assignment */

let balance = 0;

/*click handlers that alerts the dog’s information when clicking on the dog’s photo. */
function dogBark(dogName, dogBreed, fee) {
  alert("Dog name: " + dogName + "\nDog breed: " +  dogBreed + "\nAdoption fee: $" + fee);
}

/* Click Handlers on each dog's button that will add to the total. Alert total. */
// Adopt button
function btnAdder(fee) {
  balance += parseInt(fee);
  alert(balance);
}
$('button').click(function(e) {
  $('img').toggleClass('image-border')
});

/* jQuery for dog.html page */
$(function() {
  console.log("Document ready; javascript running")
  $('nav').hide().delay(300).show("slow")
  $('#hide').click(function(){
    $('img').hide()
  })
  $('#show').click(function(){
    $('img').show(300)
  })
  $('img').mouseenter(function(){
    $(this).fadeTo("slow", .75)
  }).mouseleave(function(){
    $(this).fadeTo("fast", 1)
  })
});
