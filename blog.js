const blogPosts = [
    {
        headline: "Understanding Your Dog's Moods",
        imageUrl: "images/blog-1.jpg",
        blogText: "Every dog owner knows what ears down and a tucked tail means. But how well do you know some of your dog's subtler signs?"
    },
    {
        headline: "Dog Park Etiquette",
        imageUrl: "images/blog-2.jpg",
        blogText: "No one wants to get side eye from other owners at the dog park. Scan this checklist to see if you're minding your p's and q's at the dog park."
    },
    {
        headline: "5 Dog Training Hacks",
        imageUrl: "images/blog-3.jpg",
        blogText: "Want to know the most effective methods for training your dog? Look no further."
    }
];

function createBlogPost(post) {
    const postDiv = document.createElement('div');
    
    const headline = document.createElement('h2');
    headline.textContent = post.headline;
    postDiv.appendChild(headline);
    
    const image = document.createElement('img');
    image.src = post.imageUrl;
    postDiv.appendChild(image);
    
    const text = document.createElement('p');
    text.textContent = post.blogText;
    postDiv.appendChild(text);
    
    return postDiv;
}

function displayBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    blogContainer.innerHTML = '';  // Clear existing content
    blogPosts.forEach(post => {
        const postElement = createBlogPost(post);
        blogContainer.appendChild(postElement);
    });
}

// Display initial blog posts
displayBlogPosts();

document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const headline = document.getElementById('headline').value;
    const imageUrl = document.getElementById('image-url').value;
    const blogText = document.getElementById('blog-text').value;
    
    console.log({
        headline: headline,
        imageUrl: imageUrl,
        blogText: blogText
    });
    
    // Add the new post to the blogPosts array
    blogPosts.push({
        headline: headline,
        imageUrl: imageUrl,
        blogText: blogText
    });
    
    // Clear form inputs
    document.getElementById('headline').value = '';
    document.getElementById('image-url').value = '';
    document.getElementById('blog-text').value = '';
    
    // Display the updated list of blog posts
    displayBlogPosts();
    
    // Alert the user
    alert("Thank you. The form information has been received.");
});
