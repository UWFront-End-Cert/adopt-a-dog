addEventListener('submit', function(event) {
    event.preventDefault();
    this.alert('Thank you. The form information has been received.');

    let cFInputs = document.querySelectorAll('input.cFInput, select.cFInput, textarea.cFInput');
    for (let i = 0; i < cFInputs.length; i += 1) {
        const cFInput = cFInputs[i];
        console.log(cFInput.value);
    }
});