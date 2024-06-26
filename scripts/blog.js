// Blog Posts
let fields = [
    {
        title: 'Traveling with your dog',
        photo: 'images/blog-1.jpg',
        content: 'Suspendisse sit amet iaculis purus, quis tempus est. Quisque auctor mattis diam et tempus. Vestibulum faucibus et eros et ultrices. Maecenas vulputate risus eu tortor sodales, et ultrices sem iaculis. Cras ac volutpat felis, ut aliquam arcu. Phasellus lectus odio, accumsan non pharetra vitae, commodo id diam. Pellentesque porttitor turpis ac metus rutrum, vulputate ornare nulla bibendum. In eu euismod nibh. Suspendisse malesuada mi eu congue pellentesque. Cras hendrerit purus eget quam consectetur facilisis.'
    },
    {
        title: 'How to walk multiple dogs',
        photo: 'images/blog-2.jpg',
        content: 'Suspendisse sit amet iaculis purus, quis tempus est. Quisque auctor mattis diam et tempus. Vestibulum faucibus et eros et ultrices. Maecenas vulputate risus eu tortor sodales, et ultrices sem iaculis. Cras ac volutpat felis, ut aliquam arcu. Phasellus lectus odio, accumsan non pharetra vitae, commodo id diam. Pellentesque porttitor turpis ac metus rutrum, vulputate ornare nulla bibendum. In eu euismod nibh. Suspendisse malesuada mi eu congue pellentesque. Cras hendrerit purus eget quam consectetur facilisis.'
    },
    {
        title: 'Teach your dog to fetch!',
        photo: 'images/blog-3.jpg',
        content: 'Suspendisse sit amet iaculis purus, quis tempus est. Quisque auctor mattis diam et tempus. Vestibulum faucibus et eros et ultrices. Maecenas vulputate risus eu tortor sodales, et ultrices sem iaculis. Cras ac volutpat felis, ut aliquam arcu. Phasellus lectus odio, accumsan non pharetra vitae, commodo id diam. Pellentesque porttitor turpis ac metus rutrum, vulputate ornare nulla bibendum. In eu euismod nibh. Suspendisse malesuada mi eu congue pellentesque. Cras hendrerit purus eget quam consectetur facilisis.'
    }
];

const blogs = document.createElement('div');
document.body.appendChild(blogs);

for (let i = 0; i < fields.length; i ++) {
    let field = fields[i];

    let title = document.createElement('h3');
    title.textContent = field.title;

    let photo = document.createElement('img');
    photo.src = field.photo;

    let content = document.createElement('p');
    content.textContent = field.content;

    blogs.appendChild(title);
    blogs.appendChild(photo);
    blogs.appendChild(content);
}