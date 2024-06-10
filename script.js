
const infoMurphy = ['Murphy', 'Mix', 120.00];
const infoPoppy = ['Poppy', 'Havanese', 123.45];
const infoJack = ['Jack', 'Beagle', 110.20];
const infoDuffy = ['Duffy', 'Pit Bull', 125.35];
const infoLucas = ['Lucas', 'Dutch Shepherd', 105.00];
const infoJake = ['Jake', 'Yellow Lab', 100.00];
const infoAngus = ['Angus', 'Boxer', 107.00];
const infoViolet = ['Violet', 'Chocolate Lab', 140.50];
const infoPiper = ['Piper', 'American Shepherd', 130.15];
const infoMaximus = ['Maximus', 'Russell Terrier', 122.80];
const infoLuna = ['Luna', 'Yellow Lab', 123.40];
const infoStella = ['Stella', 'Chihuahua', 80.00];

let currentTotal = null;



function getInfo(infoDog) {

    alert("Name: " + infoDog[0] + "\nBreed: " + infoDog[1] + "\nAdoption Fees: " + infoDog[2]);
}

function addTotal(newFee) {

    let newTotal = currentTotal + newFee;
    alert("Your total is: $" + newTotal);
    currentTotal = newTotal;
}
