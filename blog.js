/*Define fields*/
const fields = [
    {
        name: 'blog-title',
        label: 'Blog Title',
    },
    {
        name: 'content',
        label: 'Content Paragraphs',
        type: 'textarea'
    },
    {
        name: 'image-link',
        label: 'Image Link'
    },
    {
        name: 'email',
        label: 'Your Email Address'
    }
];

/*Form Container*/
const formContainer = document.getElementById('blog-form-container');
const form = document.createElement('form');
formContainer.appendChild(form);

fields.forEach(field => {
    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);

    let input; 
    if (field.type === 'textarea') {
        input = document.createElement('textarea');
    } else {
        input = document.createElement('input');
        input.setAttribute('type', field.name === 'email' ? 'email' : 'text');
    }

    input.setAttribute('id', field.name);
    input.setAttribute('name', field.name);
    input.setAttribute('required', true);

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(document.createElement('br'));
});

/*After form submission*/ 
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('content').value;
    const imageLink = document.getElementById('image-link').value;
    const email = document.getElementById('email').value;

    const recapContainer = document.getElementById('blog-recap');
    recapContainer.innerHTML = `
        <h2>Recap</h2>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Content:</strong> ${content}</p>
        <p><strong>Image Link:</strong> <a href="${imageLink}" target="_blank">${imageLink}</a></p>
        <img src="${imageLink}" alt="Blog Image Submitted by User" style="max-width: 100%; height: auto;">
    `;

    /*Sends the user an alert after submission*/
    alert('Your blog post submission has been received and will be reviewed soon for publishing.')
}
);