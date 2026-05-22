function calculateInterest(principal, rate, years) {
    return (principal * rate * years) / 100;
}

function compute() {
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");
    const resultDisplay = document.getElementById("result");

    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value);
    const years = parseFloat(yearsInput.value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert("Please enter valid numbers");
        return;
    }

    if (principal <= 0) {
        alert("Amount must be greater than zero");
        principalInput.focus();
        return;
    }

    const interest = calculateInterest(principal, rate, years);
    resultDisplay.innerText = interest.toFixed(2);
}

// Export for tests
if (typeof module !== 'undefined') {
    module.exports = { calculateInterest };
}
