function infoAboutDogs(name, breed, fee) {
    alert(`name: ${name} \nbreed: ${breed} \nfee: ${fee}`); 
}

let currentTotal = 0; 

function runningTotal(fee) {
    currentTotal = currentTotal + fee;
    alert(`Your current total is $${currentTotal}`);
} 
