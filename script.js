function information(name, breed, adoptionFees) {
    alert(`Name: ${name}\nBreed: ${breed}\nFees: $${adoptionFees}`);
}
let total = 0;
function adopt(name) {
    total += 123.45;
    alert(`You added ${name} to your cart for adoption!\nTotal: $${total.toFixed(2)}`);
}