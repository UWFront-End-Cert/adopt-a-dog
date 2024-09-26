let currentTotal = 0;

function doginfo(name, breed1, breed2, fee){
  alert(name+", "+breed1+" "+breed2+", "+fee);
}

$(document).ready(function(){
  $('a').click(function(){
    currentTotal = currentTotal+123.45;
    alert('Your current total is '+currentTotal);
  });
});

$(document).ready(function(){
  $('.img').mouseenter(function(){
    $(this).fadeTo('fast', .5);
  }).mouseleave(function(){
    $(this).fadeTo('fast', 1);
  })
})
