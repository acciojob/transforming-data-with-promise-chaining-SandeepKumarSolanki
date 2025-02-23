let userInput = document.getElementById('ip');
let btn = document.getElementById('btn');
let output = document.getElementById('output');

btn.addEventListener("click", () => {
    let val = +userInput.value;  // Get the input value as a number

    // Create a function to simulate a delay with a Promise
    function delay(ms, value) {
        return new Promise(resolve => {
            setTimeout(() => resolve(value), ms);
        });
    }

    // Start the promise chain with the initial value
    delay(2000, val)  // 2 seconds delay
        .then((val) => {
            output.innerHTML = `Result: ${val}`; // Display the initial value
            return val * 2;  // Multiply by 2
        })
        .then((val) => delay(2000, val))  // Delay for 2 seconds
        .then((val) => {
            output.innerHTML = `Result: ${val}`; // Display after multiplication
            return val - 3;  // Subtract 3
        })
        .then((val) => delay(1000, val))  // Delay for 1 second
        .then((val) => {
            output.innerHTML = `Result: ${val}`; // Display after subtraction
            return val / 2;  // Divide by 2
        })
        .then((val) => delay(1000, val))  // Delay for 1 second
        .then((val) => {
            output.innerHTML = `Result: ${val}`; // Display after division
            return val + 10;  // Add 10
        })
        .then((val) => delay(1000, val))  // Delay for 1 second
        .then((val) => {
            output.innerHTML = `Final Result: ${val}`; // Display final result
        })
        .catch(error => {
            console.error('Error during transformation:', error);
        });
});
