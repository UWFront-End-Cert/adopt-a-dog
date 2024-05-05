function showDogInfo(breed, name, adoptionFee) {
    alert(`Dog Information:\nBreed: ${breed}\nName: ${name}\nAdoption Fee: $${adoptionFee}`);
}

let count = 1;

function addTotal(adoptionFee) {

    result = 123.45 * count++;

    const totalDisplay = document.getElementById('totalDisplay');
    totalDisplay.textContent = `Total: $${result}`;

    alert('Total: $'+result);
}