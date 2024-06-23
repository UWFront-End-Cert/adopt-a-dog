// Function to display dog information when a dog's photo is clicked
function displayDogInfo(element) {
  const name = element.getAttribute("data-name");
  const breed = element.getAttribute("data-breed");
  const fee = element.getAttribute("data-fee");

  alert(`Dog's Name: ${name}\nBreed: ${breed}\nAdoption Fee: $${fee}`);
}

// Function to add the adoption fee to the total each time a dog's Adopt button is clicked
let totalAdoptionFee = 0;

function addAdoption(event, element) {
  event.preventDefault();
  const fee = +element.getAttribute("data-fee");
  totalAdoptionFee += fee;

  alert(`Total adoption fees: $${totalAdoptionFee.toFixed(2)}`);
}

// Function to check if a blog post has been read
function isPostRead(postId) {
  return localStorage.getItem(postId) === "read";
}

// Function to mark a blog post as read
function markPostAsRead(postId) {
  localStorage.setItem(postId, "read");
}

// Function to add a blog post
function addBlogPost(post) {
  const blogContainer = document.querySelector("#blog-content");
  if (!blogContainer) {
    console.error("#blog-content not found");
    return;
  }

  const section = document.createElement("div");
  section.classList.add("intro-section");

  const img = document.createElement("img");
  img.src = post.imageUrl;
  img.alt = `A picture related to ${post.headline}`;
  img.classList.add("intro-image");
  section.appendChild(img);

  const textDiv = document.createElement("div");
  textDiv.classList.add("intro-text");

  const h2 = document.createElement("h2");
  h2.textContent = post.headline;

  if (!isPostRead(post.id)) {
    const newLabel = document.createElement("span");
    newLabel.textContent = " New!";
    newLabel.style.color = "red";
    newLabel.style.fontStyle = "italic";
    h2.appendChild(newLabel);

    section.addEventListener("click", () => {
      newLabel.remove();
      markPostAsRead(post.id);
    });
  }

  textDiv.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = post.text;
  textDiv.appendChild(p);

  section.appendChild(textDiv);
  blogContainer.appendChild(section);
  console.log("Blog post added:", post.headline);
}

// Array of new blog posts to be added dynamically
const newBlogPosts = [
  {
    id: "post-1",
    headline: "Adding Enrichment Activities",
    imageUrl: "images/blog-1.jpg",
    text: `When you have led me to where the great man is, what do you want?
      He will tend to you, where is the pain of your flight? Fresh water
      and then, when he wills, he is recuperated, or
      You are like a fan of the rumpled arum, which is seen as an office
      with the lips of a corporeal face, you are the one who exclaims the spirit
      whether or not ant has fled, let him not crawl to the castle
      they would like to run away from the unsettled, and to lead those who are as important or
      the labor of autatia ad is the work of the acca and all cus, od qui ate`
  },
  {
    id: "post-2",
    headline: "Scheduling Playtime",
    imageUrl: "images/blog-2.jpg",
    text: `When you have led me to where the great man is, what do you want?
      He will tend to you, where is the pain of your flight? Fresh water
      and then, when he wills, he is recuperated, or
      You are like a fan of the rumpled arum, which is seen as an office
      with the lips of a corporeal face, you are the one who exclaims the spirit
      whether or not ant has fled, let him not crawl to the castle
      they would like to run away from the unsettled, and to lead those who are as important or
      the labor of autatia ad is the work of the acca and all cus, od qui ate`
  },
  {
    id: "post-3",
    headline: "Feeding Your Dog for Optimal Health",
    imageUrl: "images/blog-3.jpg",
    text: `When you have led me to where the great man is, what do you want?
      He will tend to you, where is the pain of your flight? Fresh water
      and then, when he wills, he is recuperated, or
      You are like a fan of the rumpled arum, which is seen as an office
      with the lips of a corporeal face, you are the one who exclaims the spirit
      whether or not ant has fled, let him not crawl to the castle
      they would like to run away from the unsettled, and to lead those who are as important or
      the labor of autatia ad is the work of the acca and all cus, od qui ate`
  }
];

document.addEventListener("DOMContentLoaded", () => {
  console.log("IIFE started");

  if (document.querySelector("#blog-content")) {
    console.log("#blog-content found");
    newBlogPosts.forEach((post) => addBlogPost(post));
  } else {
    console.log("#blog-content not found");
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    console.log("Contact form found");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Form submission triggered");

      const formData = {
        name: contactForm.applicantName.value.trim(),
        email: contactForm.applicantEmail.value.trim(),
        phone: contactForm.applicantPhone.value.trim(),
        contactMethod: contactForm.contactMethod.value.trim(),
        contactReason: contactForm.contactReason.value.trim(),
        message: contactForm.applicantMessage.value.trim(),
        bestTime: contactForm.bestTime.value.trim(),
        dogPreferences: Array.from(contactForm.querySelectorAll('input[name="dogPreference"]:checked')).map(checkbox => checkbox.value)
      };

      if (!formData.name || !formData.email || !formData.phone || !formData.contactMethod || !formData.contactReason || !formData.message || !formData.bestTime) {
        alert("Please fill out all fields.");
        console.log("Validation failed: missing fields");
        return;
      }

      if (formData.contactReason === "adoption-information" && formData.dogPreferences.length === 0) {
        alert("Please select at least one dog preference.");
        console.log("Validation failed: missing dog preferences");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        alert("Please enter a valid email address.");
        console.log("Validation failed: invalid email");
        return;
      }

      const phonePattern = /^\d{10}$/;
      if (!phonePattern.test(formData.phone)) {
        alert("Please enter a valid 10-digit phone number (numbers only).");
        console.log("Validation failed: invalid phone number");
        return;
      }

      alert("Thank you! We've received your information, and we will be in touch shortly.");

      console.log("Form Data:", formData);
      contactForm.reset();
      console.log("Form submitted");
    });
  } else {
    console.error("Contact form not found");
  }
});
