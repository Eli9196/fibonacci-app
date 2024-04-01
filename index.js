// Function to calculate the Fibonacci sequence
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Function to handle button click event
function handleButtonClick() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');

    try {
        const n = parseInt(input);
        if (isNaN(n) || n < 0) {
            throw new Error('Input must be a non-negative number');
        }

        const sequence = fibonacci(n);
        output.textContent = 'Fibonacci sequence: ' + sequence.join(', ');
    } catch (error) {
        output.textContent = error.message;
    }
}
module.exports = {
    fibonacci,
};
