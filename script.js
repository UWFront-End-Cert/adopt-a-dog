// Function to handle dog image clicks
function showDogInfo(name, breed, adoptionFee) {
    alert(`Dog's Name: ${name}\nBreed: ${breed}\nAdoption Fee: $${adoptionFee}`);
}

// Function to handle adopt button clicks and update the total adoption cost
let totalCost = 0;

function addToTotalCost(adoptionFee) {
    totalCost += adoptionFee;
    alert(`Total Adoption Cost: $${totalCost.toFixed(2)}`);
}

// Add event listeners to dog images and buttons
document.addEventListener('DOMContentLoaded', () => {
    // Dog data
    const dogs = [
        {name: 'Murphy', breed: 'Unknown', adoptionFee: 100.00},
        {name: 'Poppy', breed: 'Unknown', adoptionFee: 100.00},
        {name: 'Jack', breed: 'Unknown', adoptionFee: 100.00},
        {name: 'Duffy', breed: 'Unknown', adoptionFee: 100.00},
        {name: 'Lucas', breed: 'Unknown', adoptionFee: 100.00},
        {name: 'Jake', breed: 'Unknown', adoptionFee: 100.00},
        {name: 'Angus', breed: 'Unknown', adoptionFee: 100.00},
        {name: 'Violet', breed: 'Unknown', adoptionFee: 100.00}
    ];

    // Add click handlers to dog images and buttons
    dogs.forEach(dog => {
        const dogImage = document.querySelector(`img[alt='${dog.name}']`);
        if (dogImage) {
            dogImage.addEventListener('click', () => showDogInfo(dog.name, dog.breed, dog.adoptionFee));
        }

        const adoptButton = document.querySelector(`button[data-dog='${dog.name}']`);
        if (adoptButton) {
            adoptButton.addEventListener('click', () => addToTotalCost(dog.adoptionFee));
        }
    });
});