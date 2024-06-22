const blogPosts = [
    {
        image: 'images/blog-1.jpg',
        imageAlt: 'woman with her arm around her black dog with their backs to the camera sitting on a rock looking out over a canyon landscape',
        imageWidth: '328',
        imageHeight: '310',
        title: 'Traveling With Your Dog',
        text1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        text2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alitulparume nonseca estorer spernam.'
    },
    {
        image: 'images/blog-2.jpg',
        imageAlt: 'a human hand is holding a leash that is connected to 4 dogs standing in a row on a brick floor patio',
        imageWidth: '328',
        imageHeight: '310',
        title: 'How To Walk Multiple Dogs',
        text1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        text2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alitulparume nonseca estorer spernam.'
    },
    {
        image: 'images/blog-3.jpg',
        imageAlt: 'silhouttes of a girl holding up a ball to a patiently waiting dog up against a background of a sunset',
        imageWidth: '328',
        imageHeight: '310',
        title: 'Teach Your Dog To Fetch!',
        text1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        text2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alitulparume nonseca estorer spernam.'
    }
];


for (let i = 0; i < blogPosts.length; i += 1) {
    const blogPost = blogPosts[i];

    const blogImage = document.createElement('img');
    blogImage.src = blogPost.image;
    blogImage.alt = blogPost.imageAlt;
    blogImage.width = blogPost.imageWidth;
    blogImage.height = blogPost.imageHeight;

    const blogTitle = document.createElement('h2');
    blogTitle.textContent = blogPost.title;

    const blogTextP1 = document.createElement('p');
    blogTextP1.textContent = blogPost.text1;
    
    const blogTextP2 = document.createElement('p');
    blogTextP2.textContent = blogPost.text2;


    const blogSection = document.getElementById('blog-section');
    const article = document.createElement('article');
    article.setAttribute('class', 'blog-container');
    blogSection.appendChild(article);
    
    const divBlogImage = document.getElementsByClassName('blog-image');
    const div1 = document.createElement('div');
    div1.setAttribute('class', 'blog-image');
    article.appendChild(div1);
    div1.appendChild(blogImage);
    
    const divBlogText = document.getElementsByClassName('blog-text');
    const div2 = document.createElement('div');
    div2.setAttribute('class', 'blog-text');
    article.appendChild(div2);
    div2.appendChild(blogTitle);
    div2.appendChild(blogTextP1);
    div2.appendChild(blogTextP2);


}