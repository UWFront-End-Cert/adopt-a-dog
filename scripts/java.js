function dogAlert(name, breed, price) {
    alert('Name: ' + name +'\n' + 'Breed: ' + breed + '\n' + 'Price: ' + price);
}



let dogPrice = 0
let cartTotal = 0
function clickAdopt(price, quantity) {
    dogPrice = (price * quantity)
    cartTotal = dogPrice + cartTotal;
    alert('Cart total: $' + cartTotal)
}