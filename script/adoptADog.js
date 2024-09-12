function infoAboutDogs(name, breed, fee) {
  alert(`name: ${name} \nbreed: ${breed} \nfee: ${fee}`);
}

let currentTotal = 0;

function runningTotal(fee) {
  currentTotal = currentTotal + fee;
  let carts = currentTotal.toFixed(2);

  document.getElementById("cartAmount").innerHTML = `$${carts}`;
  console.log(carts);
  alert(`Your current total is $${carts}`);
}

/*-------------Index----------------*/

// let dogCards = [
//   'murphy',
//   'poppy',
//   'jack',
//   'duffy',
//   'lucas',
//   'jake',
//   'angus',
//   'violet',
//   'piper',
//   'maximus',
//   'luna',
//   'stella',
// ]

// dogCards.forEach(function(learning) {
//   let practice = dogCards.indexOf(learning);
//   let more = `${practice}, ${learning}`;
//   console.log(more);
// })


let dogCards = [
  { image: 'murphy' },
  { image: 'poppy' },
  { image: 'jack' },
  { image: 'duffy' },
  { image: 'lucas' },
  { image: 'jake' },
  { image: 'angus' },
  { image: 'violet' },
  { image: 'piper' },
  { image: 'maximus' },
  { image: 'luna' },
  { image: 'stella' },
]

$(function(){
  $.each(dogCards, function(index, val){
    console.log(index, val.image);
  })
})



$(function(){
  $('#murphy').mouseenter(function(){
    $('#poppy').delay(50).fadeTo('slow', .5)
    $('#jack').delay(100).fadeTo('slow', .5)
    $('#duffy').delay(150).fadeTo('slow', .5)
    $('#lucas').delay(200).fadeTo('slow', .5)
    $('#jake').delay(250).fadeTo('slow', .5)
  }).mouseleave(function(){
    $('#poppy').delay(250).fadeTo('fast', 1)
    $('#jack').delay(200).fadeTo('fast', 1)
    $('#duffy').delay(150).fadeTo('fast', 1)
    $('#lucas').delay(100).fadeTo('fast', 1)
    $('#jake').delay(50).fadeTo('fast', 1)
  })
})

$(function(){
  $('#poppy').mouseenter(function(){
    $('#murphy').delay(50).fadeTo('slow', .5)
    $('#jack').delay(100).fadeTo('slow', .5)
    $('#duffy').delay(150).fadeTo('slow', .5)
    $('#lucas').delay(200).fadeTo('slow', .5)
    $('#jake').delay(250).fadeTo('slow', .5)
  }).mouseleave(function(){
    $('#murphy').delay(250).fadeTo('fast', 1)
    $('#jack').delay(200).fadeTo('fast', 1)
    $('#duffy').delay(150).fadeTo('fast', 1)
    $('#lucas').delay(100).fadeTo('fast', 1)
    $('#jake').delay(50).fadeTo('fast', 1)
  })
})

$(function(){
  $('#jack').mouseenter(function(){
    $('#murphy').delay(50).fadeTo('slow', .5)
    $('#poppy').delay(100).fadeTo('slow', .5)
    $('#duffy').delay(150).fadeTo('slow', .5)
    $('#lucas').delay(200).fadeTo('slow', .5)
    $('#jake').delay(250).fadeTo('slow', .5)
  }).mouseleave(function(){
    $('#murphy').delay(250).fadeTo('fast', 1)
    $('#poppy').delay(200).fadeTo('fast', 1)
    $('#duffy').delay(150).fadeTo('fast', 1)
    $('#lucas').delay(100).fadeTo('fast', 1)
    $('#jake').delay(50).fadeTo('fast', 1)
  })
})

$(function(){
  $('#duffy').mouseenter(function(){
    $('#murphy').delay(50).fadeTo('slow', .5)
    $('#poppy').delay(100).fadeTo('slow', .5)
    $('#jack').delay(150).fadeTo('slow', .5)
    $('#lucas').delay(200).fadeTo('slow', .5)
    $('#jake').delay(250).fadeTo('slow', .5)
  }).mouseleave(function(){
    $('#murphy').delay(250).fadeTo('fast', 1)
    $('#poppy').delay(200).fadeTo('fast', 1)
    $('#jack').delay(150).fadeTo('fast', 1)
    $('#lucas').delay(100).fadeTo('fast', 1)
    $('#jake').delay(50).fadeTo('fast', 1)
  })
})

$(function(){
  $('#lucas').mouseenter(function(){
    $('#murphy').delay(50).fadeTo('slow', .5)
    $('#poppy').delay(100).fadeTo('slow', .5)
    $('#jack').delay(150).fadeTo('slow', .5)
    $('#duffy').delay(200).fadeTo('slow', .5)
    $('#jake').delay(250).fadeTo('slow', .5)
  }).mouseleave(function(){
    $('#murphy').delay(250).fadeTo('fast', 1)
    $('#poppy').delay(200).fadeTo('fast', 1)
    $('#jack').delay(150).fadeTo('fast', 1)
    $('#duffy').delay(100).fadeTo('fast', 1)
    $('#jake').delay(50).fadeTo('fast', 1)
  })
})

$(function(){
  $('#jake').mouseenter(function(){
    $('#murphy').delay(50).fadeTo('slow', .5)
    $('#poppy').delay(100).fadeTo('slow', .5)
    $('#jack').delay(150).fadeTo('slow', .5)
    $('#duffy').delay(200).fadeTo('slow', .5)
    $('#lucas').delay(250).fadeTo('slow', .5)
  }).mouseleave(function(){
    $('#murphy').delay(250).fadeTo('fast', 1)
    $('#poppy').delay(200).fadeTo('fast', 1)
    $('#jack').delay(150).fadeTo('fast', 1)
    $('#duffy').delay(100).fadeTo('fast', 1)
    $('#lucas').delay(50).fadeTo('fast', 1)
  })
})

/*--------------Blogs---------------*/
let blogsArray = [
  {
    image: 'images/blog-1.jpeg',
    heading: 'Traveling with your dog',
    p0: 'But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
    p1: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?'
  },
  {
    image: 'images/blog-2.jpeg',
    heading: 'How to walk multiple dogs',
    p0: 'But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
    p1: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.'
  },
  {
    image: 'images/blog-3.jpeg',
    heading: 'Teach your dog to fetch!',
    p0: 'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammeled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
    p1: 'But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'
  }
];

/*------------First blog post----------*/
function blogBlog0(blogginOut) {
  const blog0 = blogsArray[0];

  const gridContainer0 = document.createElement('div');
  const section0 = document.createElement('section');
  const image0 = document.createElement('img');
  const div0 = document.createElement('div');
  const heading0 = document.createElement('h4');
  const p00 = document.createElement('p');
  const p10 = document.createElement('p');

  gridContainer0.setAttribute('id', 'grid-container');
  section0.setAttribute('id', 'blogPost0');
  heading0.setAttribute('id', 'heading0');
  p00.setAttribute('id', 'p00');
  p10.setAttribute('id', 'p10');

  image0.src = blog0.image;

  heading0.textContent = blog0.heading;
  p00.textContent = blog0.p0;
  p10.textContent = blog0.p1;

  gridContainer0.classList.add('grid-container');
  section0.classList.add('blog-grid-1-js');
  div0.classList.add('blog');
  heading0.classList.add('h4-blog');
  p00.classList.add('blog-p');
  p10.classList.add('blog-p');

  document.body.appendChild(gridContainer0);
  gridContainer0.appendChild(section0);
  section0.appendChild(image0);
  section0.appendChild(div0);
  div0.appendChild(heading0);
  div0.appendChild(p00);
  div0.appendChild(p10);
}

/*------------Second blog post----------*/
function blogBlog1(blogginOut) {
  const blog1 = blogsArray[1];

  const gridContainer1 = document.createElement('div');
  const section1 = document.createElement('section');
  const image1 = document.createElement('img');
  const div1 = document.createElement('div');
  const heading1 = document.createElement('h4');
  const p01 = document.createElement('p');
  const p11 = document.createElement('p');

  gridContainer1.setAttribute('id', 'grid-container');
  section1.setAttribute('id', 'blogPost1');
  heading1.setAttribute('id', 'heading1');
  p01.setAttribute('id', 'p01');
  p11.setAttribute('id', 'p11');

  image1.src = blog1.image;

  heading1.textContent = blog1.heading;
  p01.textContent = blog1.p0;
  p11.textContent = blog1.p1;

  gridContainer1.classList.add('grid-container');
  section1.classList.add("blog-grid-2-js");
  div1.classList.add('blog');
  heading1.classList.add('h4-blog');
  p01.classList.add('blog-p');
  p11.classList.add('blog-p');

  document.body.appendChild(gridContainer1);
  gridContainer1.appendChild(section1);
  section1.appendChild(image1);
  section1.appendChild(div1);
  div1.appendChild(heading1);
  div1.appendChild(p01);
  div1.appendChild(p11);
}

/*------------Third blog post----------*/
function blogBlog2(blogginOut) {
  const blog2 = blogsArray[2];

  const gridContainer2 = document.createElement('div');
  const section2 = document.createElement('section');
  const image2 = document.createElement('img');
  const div2 = document.createElement('div');
  const heading2 = document.createElement('h4');
  const p02 = document.createElement('p');
  const p12 = document.createElement('p');

  gridContainer2.setAttribute('id', 'grid-container');
  section2.setAttribute('id', 'blogPost2');
  heading2.setAttribute('id', 'heading2');
  p02.setAttribute('id', 'p02');
  p12.setAttribute('id', 'p12');

  image2.src = blog2.image;

  heading2.textContent = blog2.heading;
  p02.textContent = blog2.p0;
  p12.textContent = blog2.p1;

  gridContainer2.classList.add('grid-container')
  section2.classList.add('blog-grid-3-js');
  div2.classList.add('blog');
  heading2.classList.add('h4-blog');
  p02.classList.add('blog-p');
  p12.classList.add('blog-p');

  document.body.appendChild(gridContainer2);
  gridContainer2.appendChild(section2);
  section2.appendChild(image2);
  section2.appendChild(div2);
  div2.appendChild(heading2);
  div2.appendChild(p02);
  div2.appendChild(p12);
}

// all blogs loop
// function blogBlog2(blogginOut) {
//   const blog2 = blogsArray[2];

//   const gridContainer[i] = document.createElement('div');
//   const section[i] = document.createElement('section');
//   const image[i] = document.createElement('img');
//   const div[i] = document.createElement('div');
//   const heading[i] = document.createElement('h4');
//   const p[i] = document.createElement('p');
//   const p[i] = document.createElement('p');

//   gridContainer[i].setAttribute('id', 'grid-container');
//   section[i].setAttribute('id', 'blogPost2');
//   heading[i].setAttribute('id', 'heading2');
//   p[i].setAttribute('id', 'p[i]');
//   p[i+1].setAttribute('id', 'p[i+1]');

//   image[i].src = blog[i].image;

//   heading[i].textContent = blog2.heading;
//   p[i].textContent = blog2.p0;
//   p[i+1].textContent = blog2.p1;

//   gridContainer2.classList.add('grid-container')
//   section2.classList.add('blog-grid-3-js');
//   div2.classList.add('blog');
//   heading2.classList.add('h4-blog');
//   p02.classList.add('blog-p');
//   p12.classList.add('blog-p');

//   document.body.appendChild(gridContainer2);
//   gridContainer2.appendChild(section2);
//   section2.appendChild(image2);
//   section2.appendChild(div2);
//   div2.appendChild(heading2);
//   div2.appendChild(p02);
//   div2.appendChild(p12);
// }

/*--------------Checkout--------------*/
// function thankYou(thanks) {
//   const adopter = {
//     name: document.getElementById('name').value,
//     email: document.getElementById('email').value,
//     street: document.getElementById('street').value,x
//     city: document.getElementById('city').value,
//     state: document.getElementById('state').value,
//     firstAdopt: document.querySelector("input[name=adopter]:checked").value,
//     zipcode: document.getElementById('zipCode').value,
//     pickupLocation: document.getElementById('pickup').value
//   };
//   console.log(adopter);
//
//   alert(`Thank you. ${adopter.name} \nThe form information has been received`);
// };

$(function () {
  $('form').on("submit", function(event) {

  const adopter = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    street: document.getElementById('street').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    firstAdopt: document.querySelector("input[name=adopter]:checked").value,
    zipcode: document.getElementById('zipCode').value,
    pickupLocation: document.getElementById('pickup').value
  };
  console.log(adopter);

  alert(`Thank you. ${adopter.name} \nThe form information has been received`);
  });
});








//
