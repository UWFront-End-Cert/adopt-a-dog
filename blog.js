document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = [
        {
            title: "Traveling with your dog",
            image: "images/blog-1.jpg",
            text: "Dog ipsum dolor sit amet, find something else more interesting, so puppy ipsum mesmerizing birds sleep on my human's feet. Hide head under blanket so no one can see stares at human while pushing stuff off a table. Pup not dog around claws in your leg puppy puppy but and sometimes switches in French and say “ruff” just because well why not."
        },
        {
            title: "How to walk Multiple dogs",
            image: "images/blog-2.jpg",
            text: "Dog ipsum dolor sit amet, find something else more interesting, so puppy ipsum mesmerizing birds sleep on my human's feet. Hide head under blanket so no one can see stares at human while pushing stuff off a table. Pup not dog around claws in your leg puppy puppy but and sometimes switches in French and say “ruff” just because well why not."
        },
        {
            title: "Teach Your Dog to Fetch",
            image: "images/blog-3.jpg",
            text: "Dog ipsum dolor sit amet, find something else more interesting, so puppy ipsum mesmerizing birds sleep on my human's feet. Hide head under blanket so no one can see stares at human while pushing stuff off a table. Pup not dog around claws in your leg puppy puppy but and sometimes switches in French and say “ruff” just because well why not."
        }
    ];

    function generateBlogPosts(posts) {
        const blogSection = document.getElementById('blog-posts');
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('image-container');

            const img = document.createElement('img');
            img.src = post.image;
            img.alt = post.title;

            const h3 = document.createElement('h3');
            h3.textContent = post.title;

            const p = document.createElement('p');
            p.textContent = post.text;

            postDiv.appendChild(img);
            postDiv.appendChild(h3);
            postDiv.appendChild(p);

            blogSection.appendChild(postDiv);
        });
    }

    generateBlogPosts(blogPosts);
});
