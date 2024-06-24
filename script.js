document.addEventListener('DOMContentLoaded', () => {
    // Blog page logic
    if (document.getElementById('blog-posts-container')) {
        // Blog post data
        const blogPosts = [
            {
                title: 'Traveling With Your Dog',
                image: 'images/blog-1.jpg',
                content: `Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
                
                Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.`
            },
            {
                title: 'How To Walk Multiple Dogs',
                image: 'images/blog-2.jpg',
                content: `Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
                
                Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.`
            },
            {
                title: 'Teach Your Dog To Fetch!',
                image: 'images/blog-3.jpg',
                content: `Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
                
                Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.`
            }
        ];

        // Get the container where blog posts will be appended
        const blogPostsContainer = document.getElementById('blog-posts-container');

        // Function to create a blog post element
        function createBlogPostElement(post) {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');

            // Blog post image
            const imageElement = document.createElement('img');
            imageElement.src = post.image;
            imageElement.alt = post.title;
            imageElement.style.width = '200px';
            imageElement.style.height = 'auto';
            imageElement.style.float = 'left';
            imageElement.style.marginRight = '20px';
            postElement.appendChild(imageElement);

            // Blog post title
            const titleElement = document.createElement('h2');
            titleElement.textContent = post.title;
            postElement.appendChild(titleElement);

            // Blog post content
            const contentElement = document.createElement('p');
            contentElement.textContent = post.content;
            postElement.appendChild(contentElement);

            // Clear fix to ensure layout consistency
            const clearFix = document.createElement('div');
            clearFix.style.clear = 'both';
            postElement.appendChild(clearFix);

            return postElement;
        }

        // Function to render all blog posts
        function renderBlogPosts() {
            blogPosts.forEach(post => {
                const postElement = createBlogPostElement(post);
                blogPostsContainer.appendChild(postElement);
            });
        }

        // Render blog posts when DOM content is loaded
        renderBlogPosts();
    }

    // Checkout page logic
    if (document.getElementById('checkout-form')) {
        const form = document.getElementById('checkout-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const street = document.getElementById('street').value;
            const city = document.getElementById('city').value;
            const zip = document.getElementById('zip').value;
            const state = document.getElementById('state').value;
            const pickup = document.getElementById('pickup').value;
            const firstTime = document.querySelector('input[name="first-time"]:checked').value;
            const totalCost = document.getElementById('total-cost').value;
            const dogsAdopted = document.getElementById('dogs-adopted').value;

            // Log form values to console
            console.log('Form Values:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Street:', street);
            console.log('City:', city);
            console.log('Zip:', zip);
            console.log('State:', state);
            console.log('Pickup:', pickup);
            console.log('First Time Adopter:', firstTime);
            console.log('Total Adoption Cost:', totalCost);
            console.log('Dogs Adopted:', dogsAdopted);

            // Display submission confirmation alert
            alert('Thank you. The form information has been received.');
        });
    }
});
