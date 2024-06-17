document.getElementById('start').addEventListener('click', function() {
    let balance = 0;

    while (true) {
        const action = prompt('Enter an action: (Q)uit, (W)ithdraw, (D)eposit, (B)alance').toUpperCase();

        if (action === 'Q') {
            alert('Thank you for using the bank application. Goodbye!');
            break;
        } else if (action === 'W') {
            const amount = parseFloat(prompt('Enter amount to withdraw:'));
            if (isNaN(amount) || amount <= 0) {
                alert('Invalid amount. Please enter a positive number.');
            } else if (amount > balance) {
                alert('Insufficient funds.');
            } else {
                balance -= amount;
                alert(`You have withdrawn $${amount.toFixed(2)}. Your new balance is $${balance.toFixed(2)}.`);
            }
        } else if (action === 'D') {
            const amount = parseFloat(prompt('Enter amount to deposit:'));
            if (isNaN(amount) || amount <= 0) {
                alert('Invalid amount. Please enter a positive number.');
            } else {
                balance += amount;
                alert(`You have deposited $${amount.toFixed(2)}. Your new balance is $${balance.toFixed(2)}.`);
            }
        } else if (action === 'B') {
            alert(`Your current balance is $${balance.toFixed(2)}.`);
        } else {
            alert('Invalid action. Please enter Q, W, D, or B.');
        }
    }
});
