//Dynamic Blog Posts
const blogInfo =[
  {
    name: 'Traveling With Your Dog',
    info: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga.  Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explan sus am aut amet ant fugiatum, utem non reptat.',
    info2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit',
    image: 'images/blog-1.jpg'
  },

  {
    name: 'How To Walk Multiple Dogs',
    info: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga.  Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explan sus am aut amet ant fugiatum, utem non reptat.',
    info2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit',
    image: 'images/blog-2.jpg'
  },

  {
    name: 'Teach Your Dog To Fetch',
    info: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga.  Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explan sus am aut amet ant fugiatum, utem non reptat.',
    info2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit',
    image: 'images/blog-3.jpg'
  }
];

const container = document.getElementById('blogposts');

for(i=0; i<blogInfo.length; i++){
  const blog = blogInfo[i];

  const title = document.createElement('h4');
  title.textContent = blog.name;
  title.classList.add("bloglabel");

  const paragraph = document.createElement('p');
  paragraph.textContent = blog.info;
  paragraph.classList.add("blogparagraph");

  const paragraph2 = document.createElement('p');
  paragraph2.textContent = blog.info2;
  paragraph2.classList.add("blogparagraph1");

  const newimage = document.createElement("img");
  newimage.src = blog.image;
  newimage.classList.add("blogimage");

  container.appendChild(newimage);
  container.appendChild(title);
  container.appendChild(paragraph);
  container.appendChild(paragraph2);

}
