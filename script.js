// Initialize the total adoption fee
let totalAdoptionFee = 0;

// Function to handle click on dog photos
function handlePhotoClick(event) {
    const dogElement = event.currentTarget.parentElement;
    const name = dogElement.querySelector('h2').innerText;
    const breed = dogElement.querySelector('p').innerText.split(':')[0];
    const fee = dogElement.querySelector('p strong').nextSibling.nodeValue.trim().slice(1);
    alert(`Name: ${name}\nBreed: ${breed}\nAdoption Fee: $${fee}`);
}

// Function to handle click on "Adopt" buttons
function handleButtonClick(event) {
    const dogElement = event.currentTarget.parentElement;
    const fee = parseFloat(dogElement.querySelector('p strong').nextSibling.nodeValue.trim().slice(1));
    totalAdoptionFee += fee;
    alert(`Total Adoption Fee: $${totalAdoptionFee.toFixed(2)}`);
}

// Add event listeners to each dog's photo and button
document.querySelectorAll('.dog-card').forEach(dogElement => {
    const photos = dogElement.querySelectorAll('img');
    const buttons = dogElement.querySelectorAll('button.checkout-button');

    // Add click event listener to each photo
    photos.forEach(photo => {
        photo.addEventListener('click', handlePhotoClick);
    });

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});
