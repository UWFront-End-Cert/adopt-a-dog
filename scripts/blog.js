const blogs = [
    {
        name: 'Traveling With Your Dog',
        p1: `Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem
        quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium
        hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium
        faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.`,
        p2: `Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con
        et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad
        qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam
        voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit
        ulparume nonseca estorer spernam.`,
        img_src: 'images/blog-1.jpg',
        img_alt: 'woman sitting with dog looking at mesas'
    },
    {
        name: 'How To Walk Multiple Dogs',
        p1: `Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem
        quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium
        hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium
        faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.`,
        p2: `Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con
        et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad
        qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam
        voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit
        ulparume nonseca estorer spernam.`,
        img_src: 'images/blog-2.jpg',
        img_alt: "Several dogs on leashes all held by one person's hand"
    },
    {
        name: 'Teach Your Dog To Fetch!',
        p1: `Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem
        quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium
        hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium
        faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.`,
        p2: `Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con
        et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad
        qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam
        voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit
        ulparume nonseca estorer spernam.`,
        img_src: 'images/blog-3.jpg',
        img_alt: "Woman about to throw ball to dog during sunset"
    }
];


const container = document.getElementById('blog-section');

for (i = 0; i < blogs.length; i++) {
    const article = document.createElement('article');
    article.setAttribute('class', 'blog-article');
    
    const left_div = document.createElement('div');
    left_div.setAttribute('class', 'left-blog-div');
    const image = document.createElement('img');
    image.setAttribute('src', blogs[i].img_src);
    console.log(`Image src: ${blogs[i].img_src}`)
    image.setAttribute('alt', blogs[i].img_alt);
    console.log(`Image alt text: ${blogs[i].img_alt}`)
    left_div.appendChild(image);

    const right_div = document.createElement('div');
    right_div.setAttribute('class', 'right-blog-div');
    const title = document.createElement('h3');
    title.textContent = blogs[i].name;
    console.log(`Blog title: ${blogs[i].name}`)
    const p1 = document.createElement('p');
    p1.textContent = blogs[i].p1;
    const p2 = document.createElement('p');
    p2.textContent = blogs[i].p2;
    right_div.appendChild(title);
    right_div.appendChild(p1);
    right_div.appendChild(p2);

    article.appendChild(left_div);
    article.appendChild(right_div);
    container.appendChild(article);
};
alert("Thank you. The form information has been received");






