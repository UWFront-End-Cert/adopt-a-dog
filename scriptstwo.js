document.addEventListener('DOMContentLoaded', () => {
    let total = 0;

    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach(container => {
        const name = container.getAttribute('data-name');
        const breed = container.getAttribute('data-breed');
        const fee = parseInt(container.getAttribute('data-fee'), 10);

        const image = container.querySelector('img');
        const button = container.querySelector('.adopt-button');

        image.addEventListener('click', () => {
            alert(`Name: ${name}\nBreed: ${breed}\nAdoption Fee: $${fee}`);
        });

        button.addEventListener('click', () => {
            total += fee;
            alert(`Total Adoption Fee: $${total}`);
        });
    });
});