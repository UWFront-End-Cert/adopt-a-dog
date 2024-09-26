let mainHeader = document.getElementsByTagName("h3")[0]; //Variable for main page heading.

const container = document.createElement("div"); //Creates main container for blog page.
container.setAttribute("class", "blog-adjust"); //Sets class to 'blog-adjust'
mainHeader.appendChild(container);

let blogTraveling = () => { // Function for blog post about traveling with your dog.
  const blogPost = document.createElement("div");
  blogPost.setAttribute("class", "blog-card");
  container.appendChild(blogPost);

  let blogImg = document.createElement("img");
  blogImg.setAttribute("src", "./images/blog-1.jpg");
  blogImg.setAttribute("alt", "woman and dog looking over a cliff");
  blogPost.appendChild(blogImg);

  const blogArticle = document.createElement("div");
  blogArticle.setAttribute("class", "blog-article");
  blogPost.appendChild(blogArticle);

  let blogHeader = document.createElement("h2");
  blogHeader.innerHTML = "Traveling With Your Dog";
  blogArticle.appendChild(blogHeader);

  let articleText = document.createElement("p");
  articleText.innerHTML = "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat."; //I might want to make a variable for this to clean it up.
  blogHeader.appendChild(articleText);
};

let blogWalk = () => { // Function for blog post about traveling with your dog.
  const blogPost = document.createElement("div");
  blogPost.setAttribute("class", "blog-card");
  container.appendChild(blogPost);

  let blogImg = document.createElement("img");
  blogImg.setAttribute("src", "./images/blog-2.jpg");
  blogImg.setAttribute("alt", "woman and dog looking over a cliff");
  blogPost.appendChild(blogImg);

  const blogArticle = document.createElement("div");
  blogArticle.setAttribute("class", "blog-article");
  blogPost.appendChild(blogArticle);

  let blogHeader = document.createElement("h2");
  blogHeader.innerHTML = "multiple dogs on leashes";
  blogArticle.appendChild(blogHeader);

  let articleText = document.createElement("p");
  articleText.innerHTML = "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat."; //I might want to make a variable for this to clean it up.
  blogHeader.appendChild(articleText);
};

let blogFetch = () => { // Function for blog post about traveling with your dog.
  const blogPost = document.createElement("div");
  blogPost.setAttribute("class", "blog-card");
  container.appendChild(blogPost);

  let blogImg = document.createElement("img");
  blogImg.setAttribute("src", "./images/blog-3.jpg");
  blogImg.setAttribute("alt", "girl about to throw a ball to play fetch");
  blogPost.appendChild(blogImg);

  const blogArticle = document.createElement("div");
  blogArticle.setAttribute("class", "blog-article");
  blogPost.appendChild(blogArticle);

  let blogHeader = document.createElement("h2");
  blogHeader.innerHTML = "Traveling With Your Dog";
  blogArticle.appendChild(blogHeader);

  let articleText = document.createElement("p");
  articleText.innerHTML = "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat."; //I might want to make a variable for this to clean it up.
  blogHeader.appendChild(articleText);
};

blogTraveling();
blogWalk();
blogFetch();
