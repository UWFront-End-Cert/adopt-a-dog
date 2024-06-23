function information(name, breed, adoptionFees) {
    alert(`Name: ${name}\nBreed: ${breed}\nFees: $${adoptionFees}`);
}
let total = 0;
function adopt(name) {
    total += 123.45;
    alert(`You added ${name} to your cart for adoption!\nTotal: $${total.toFixed(2)}`);
}
const posts = [
    {
        headline: "Traveling with your dog",
        image: "images/blog-1.jpg",
        text1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
        text2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    },
    {
        headline: "How to Walk Multiple Dogs",
        image: "images/blog-2.jpg",
        text1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
        text2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    },
    {
        headline: "Teach Your Dog to Fetch!",
        image: "images/blog-3.jpg",
        text1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
        text2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    }
];

const dogs = [
    {
        name: "Murphy",
        image: "images/murphy-card.jpg",
        breed: "American Staffordshire Terrier"
    },
    {
        name: "Poppy",
        image: "images/poppy-card.jpg",
        breed: "Shih Tzu"
    },
    {
        name: "Jack",
        image: "images/jack-card.jpg",
        breed: "Beagle"
    },
    {
        name: "Duffy",
        image: "images/duffy-card.jpg",
        breed: "Pit Bull"
    },
    {
        name: "Lucas",
        image: "images/lucas-card.jpg",
        breed: "Borador"
    },
    {
        name: "Jake",
        image: "images/jake-card.jpg",
        breed: "Labrador Retriever"
    },
    {
        name: "Angus",
        image: "images/angus-card.jpg",
        breed: "Boxer"
    },
    {
        name: "Violet",
        image: "images/violet-card.jpg",
        breed: "Labrador Retriever"
    },
    {
        name: "Piper",
        image: "images/piper-card.jpg",
        breed: "Nova Scotia Duck Tolling Retriever"
    },
    {
        name: "Maximus",
        image: "images/maximus-card.jpg",
        breed: "Miniature Schnauzer"
    },
    {
        name: "Luna",
        image: "images/luna-card.jpg",
        breed: "Labrador Retriever"
    },
    {
        name: "Stella",
        image: "images/stella-card.jpg",
        breed: "Chihuahua"
    }
]

const article = document.querySelector("article");
if (article.getAttribute("id") == "blog") {
    const heading = document.createElement("h1");
    heading.textContent = "Dynamically Generated Posts:";
    article.appendChild(heading);
    for (let i = 0; i < posts.length; i++) {
        const blogPost = document.createElement("div");
        blogPost.setAttribute("class", "blog");
        const blogImg = document.createElement("div");
        blogImg.setAttribute("class", "blog-img");
        const img = document.createElement("img");
        img.setAttribute("src", posts[i].image);
        img.setAttribute("alt", "Dog on cliff");
        img.setAttribute("style", "width: 328px");
        blogImg.appendChild(img);
        blogPost.appendChild(blogImg);
        const section = document.createElement("section");
        section.setAttribute("class", "column");
        const header = document.createElement("h2");
        header.textContent = posts[i].headline;
        section.appendChild(header);
        const paragraph1 = document.createElement("p");
        paragraph1.textContent = posts[i].text1;
        section.appendChild(paragraph1);
        const paragraph2 = document.createElement("p");
        paragraph2.textContent = posts[i].text2;
        section.appendChild(paragraph2);
        blogPost.appendChild(section);
        article.appendChild(blogPost);
    }
} else if (article.getAttribute("id") == "index" || article.getAttribute("id") == "dogs") {
    const heading = document.createElement("h1");
    heading.textContent = "Dynamically Generated Tiles:";
    article.appendChild(heading);
    const dogsContainer = document.createElement("div");
    dogsContainer.setAttribute("class", "dogs");
    article.appendChild(dogsContainer);
    for (let i = 0; i < dogs.length; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        let j = i;
        while (j < i + 4 && j < dogs.length) {
            const dog = document.createElement("div");
            dog.setAttribute("class", "dog");
            const img = document.createElement("img");
            img.setAttribute("src", dogs[j].image);
            img.setAttribute("alt", dogs[j].name);
            img.setAttribute("onclick", `information("${dogs[j].name}", "${dogs[j].breed}", 123.45)`);
            dog.appendChild(img);
            const nameHeading = document.createElement("h3");
            nameHeading.textContent = dogs[j].name;
            dog.appendChild(nameHeading);
            const cost = document.createElement("p");
            cost.textContent = "Cost to adopt: $123.45";
            dog.appendChild(cost);
            const description = document.createElement("p");
            description.textContent = "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae";
            dog.appendChild(description);
            const adoptButton = document.createElement("button");
            adoptButton.setAttribute("type", "button");
            adoptButton.setAttribute("onclick", `adopt("${dogs[j].name}")`);
            adoptButton.textContent = `Adopt ${dogs[j].name}`;
            dog.appendChild(adoptButton);
            row.appendChild(dog);
            j++;
        }
        i = j - 1;
        dogsContainer.appendChild(row);
    }
}

const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let object= {};
        if (form.getAttribute("name") == "contact") {
            const firstName = form.elements["firstName"].value;
            if (!firstName) {
                alert ("Missing first name!");
                return;
            }
            const lastName = form.elements["lastName"].value;
            if (!lastName) {
                alert("Missing last name!");
                return;
            }
            const phone = form.elements["phone"].value;
            if (!phone) {
                alert("Missing phone!");
                return;
            }
            const email = form.elements["email"].value;
            if (!email) {
                alert("Missing email!");
                return;
            }
            if (!email.includes("@")) {
                alert("Invalid email!");
                return;
            }
            const interestDogs = form.elements["interestDogs"].checked;
            const interestCats = form.elements["interestCats"].checked;
            const interestRabbits = form.elements["interestRabbits"].checked;
            if (!interestDogs && !interestCats && !interestRabbits) {
                alert("You forgot to choose a type of pet to adopt!");
                return;
            }
            object = {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                interestDogs: interestDogs,
                interestCats: interestCats,
                interestRabbits: interestRabbits
            };
        } else {
            const name = form.elements["name"].value;
            if (!name) {
                alert("Missing name!");
                return;
            }
            const email = form.elements["email"].value;
            if (!email) {
                alert("Missing email!");
                return;
            }
            if (!email.includes("@")) {
                alert("Invalid email!");
                return;
            }
            const street = form.elements["street"].value;
            if (!street) {
                alert("Missing street!");
                return;
            }
            const city = form.elements["city"].value;
            if (!city) {
                alert("Missing city!");
                return;
            }
            const state = form.elements["state"].value;
            if (!state) {
                alert("Missing state!");
                return;
            }
            const zip = form.elements["zip"].value;
            if (!zip) {
                alert("Missing zip code!");
                return;
            }
            const yes = form.elements["yes"].checked;
            const no = form.elements["no"].checked;
            if (!yes && !no) {
                alert("First time adopter?");
                return;
            }
            const pickup = form.elements["pickup"].value;
            if (!pickup) {
                alert("Please choose pickup location!");
                return;
            }
            object = {
                name: name,
                email: email,
                street: street,
                city: city,
                state: state,
                zip: zip,
                firstTimeAdopter: yes ? true : no ? false : true,
                pickup: pickup
            };
        }
        console.log(object);
        alert("Thank you. The form information has been received!");
    });
}
