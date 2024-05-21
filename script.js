document.addEventListener('DOMContentLoaded', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;

  function updateCartInfo() {
    const checkoutInfo = document.getElementById('checkout-info');
    let infoHTML = '';

    if (cart.length > 0) {
      infoHTML += '<h2>Cart:</h2>';

      cart.forEach((dog) => {
        infoHTML += `
          <p>Adopted Dog: ${dog.dogName}</p>
          <p>Breed: ${dog.breed}</p>
          <p>Adoption Fee: $${dog.adoptionFee}</p>
          <hr>
        `;
      });

      infoHTML += `<p>Total: $${total}</p>`;
    } else {
      infoHTML = '<p>No dogs in the cart.</p>';
    }

    checkoutInfo.innerHTML = infoHTML;
  }

  const adoptButtons = document.querySelectorAll('.adoptbutton');

  adoptButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const dogContainer = button.closest('.dog-container');
      const dogName = dogContainer.querySelector('.dogsname').textContent;
      const breed = dogContainer.querySelector('p:nth-child(3)').textContent;
      const adoptionFee = 150;

      cart.push({ dogName, breed, adoptionFee });
      total += adoptionFee;

      alert(`Added ${dogName} to cart. Total: $${total}`);
      updateCartInfo();

      // Store cart in localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
    });
  });

  // Load cart info on page load
  updateCartInfo();

  const urlParams = new URLSearchParams(window.location.search);
  const checkoutInfo = document.getElementById('checkout-info');

  if (urlParams.has('dogName') && urlParams.has('breed') && urlParams.has('total')) {
    const dogName = urlParams.get('dogName');
    const breed = urlParams.get('breed');
    total = parseInt(urlParams.get('total'));

    const infoHTML = `
      <p>Adopted Dog: ${dogName}</p>
      <p>Breed: ${breed}</p>
      <p>Total: $${total}</p>
    `;
    checkoutInfo.innerHTML = infoHTML;
  } else {
    checkoutInfo.textContent = 'No dog information available.';
  }
});
// Show Dogs Name on Click of Photo
function showDogName(dogName) {
  alert(`Clicked on ${dogName}'s photo!`);
}
// Java Blog Posts
const blogPosts = [
  {
    headline: "Traveling with your Dog",
    imageSrc: "images/blog-1.jpg",
    blogText: "Traveling with your dog can be splendid, unless you have a big dog that does not get along with others. A word of advice for traveling with your dog: pack water for your four-legged friend! Ensure you do not need to leave him/her in your car especially on a hot summer day. ",
  },
  {
    headline: "Teach Your Dog Fetch",
    imageSrc: "images/blog-2.jpg",
    blogText: "Some dogs love to fetch and it comes as an instinct, while others need a bit of training. To train your pal use treats and positive reinforcement.",
  },
  {
    headline: "How to Walk Multiple Dogs",
    imageSrc: "images/blog-3.jpg",
    blogText: "Walking mutltiple dogs can be a challenge. A harness for all dogs is recommended. To prevent the dogs from overlapping their leashes on a walk - good luck! It takes a special talent and patience to walk multiple dogs.",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const blogContainer = document.querySelector(".blog-container");

   for (const blogPost of blogPosts) {
    // A container div for each blog post and add Flexbox classes
    const blogPostContainer = document.createElement("div");
    blogPostContainer.classList.add("blog-post-container");

    // A separate divs for image and text
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("blog-post-image");
    const imageElement = document.createElement("img");
    imageElement.src = blogPost.imageSrc;
    imageContainer.appendChild(imageElement);

    const textContainer = document.createElement("div");
    textContainer.classList.add("blog-post-text");
    const headlineElement = document.createElement("p");
    headlineElement.classList.add("blogtitles");
    headlineElement.textContent = blogPost.headline;
    const blogTextElement = document.createElement("p");
    blogTextElement.textContent = blogPost.blogText;
    textContainer.appendChild(headlineElement);
    textContainer.appendChild(blogTextElement);

    // Append image and text divs to the blog post container
    blogPostContainer.appendChild(imageContainer);
    blogPostContainer.appendChild(textContainer);

    // Append the blog post container to the blog container
    blogContainer.appendChild(blogPostContainer);
  }
});
// Checkout Form
    document.addEventListener("DOMContentLoaded", function() {
      // Handle form submission
      document.querySelector("form").addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the form values
        var name = document.querySelector("input[name='Name']").value;
        var email = document.querySelector("input[name='E-mail']").value;
        var address = document.querySelector("input[name='address']").value;
        var city = document.querySelector("input[name='City']").value;
        var state = document.querySelector("input[name='State']").value;

        // Form information string
        var formInfo = "Name: " + name + "\n" +
                       "E-mail: " + email + "\n" +
                       "Street Address: " + address + "\n" +
                       "City: " + city + "\n" +
                       "State: " + state;

        // New DOM element for the message
        var messageDiv = document.createElement("div");
        messageDiv.classList.add("alert", "alert-success");
        messageDiv.textContent = "Thank you. The form information has been received\n\n" + formInfo;

        // Append message on form
        document.querySelector(".form").appendChild(messageDiv);

        console.log(formInfo);
      });
    });

    // Dog Container
    document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function() {
      $('.dog-container').hover(
          function() {
              $(this).css({
                  'transform': 'scale(1.1)',
                  'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)'
              });
          },
          function() {
              $(this).css({
                  'transform': 'scale(1)',
                  'box-shadow': 'none'
              });
          }
      );
  });
});
  //Adopt Button
document.addEventListener("DOMContentLoaded", function() {
  $(document).ready(function() {
    var total = 0;
    
    $('.adoptbutton').click(function() {
        total += 150;
        $('#checkout-total').text('$' + total);
    });
});
});
  // Form Submission
  
  document.addEventListener("DOMContentLoaded", function() {
  $(document).ready(function() {
    $('#form').submit(function(event) {
        event.preventDefault();
        
        var formData = $(this).serialize();
        console.log(formData);
    });
});
});

document.addEventListener("DOMContentLoaded", function() {
$(document).ready(function() {
   var total = 0;
  $(".adoptbutton").click(function() {
         var price = parseInt($(this).data("price"));
         total += price;

      // Update the checkout total display
      $(".checkout-total").text("Total: $" + total.toFixed(2)); 
      $(".cart-total").text(total);
  });
});
});
