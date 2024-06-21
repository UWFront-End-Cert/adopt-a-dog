const blogPosts = [
    {
        title: 'Traveling With Your Dog',
        text: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.'
    }
];

const blogContainer = document.getElementById('b-container');
const article = document.createElement('article');
blogContainer.appendChild(article);

for (let i = 0; i < blogPosts.length; i += 1) {
    const blogPost = blogPosts[i];

    const blogTitle = document.createElement('h2');
    blogTitle.textContent = blogPost.title;
    //bogTitle.setAttribute('class', blogPost.title);

    const blogText = document.createElement('p');
    blogText.textContent = blogPost.text;

    article.appendChild(blogTitle);
    article.appendChild(blogText);
}