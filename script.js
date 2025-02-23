let userInput = document.getElementById('ip');
let btn = document.getElementById('btn');
let output = document.getElementById('output');

btn.addEventListener("click", () => {
    let val = +userInput.value; // Get the input value and convert to a number
    let p = document.createElement("p"); // Create a paragraph element for displaying results

    // First promise (Initial value)
    new Promise((resolve) => {
        setTimeout(() => {
            p.innerText = `Result: ${val}`;
            output.append(p); // Display the initial value
            resolve(val); // Resolve the promise with the initial value
        }, 1000 * 2); // 2 seconds delay
    })
    .then((val) => {
        val *= 2; // Multiply by 2
        p = document.createElement("p"); // Create a new element to display the next result
        return new Promise((resolve) => {
            setTimeout(() => {
                p.innerText = `Result: ${val}`;
                output.append(p); // Display the result after multiplying
                resolve(val); // Resolve the promise with the new value
            }, 1000 * 2); // 2 seconds delay
        });
    })
    .then((val) => {
        val -= 3; // Subtract 3
        // p = document.createElement("p"); // Create a new element to display the next result
        return new Promise((resolve) => {
            setTimeout(() => {
                p.innerText = `Result: ${val}`;
                output.append(p); // Display the result after subtracting
                resolve(val); // Resolve the promise with the new value
            }, 1000 * 1); // 1 second delay
        });
    })
    .then((val) => {
        val /= 2; // Divide by 2
        // p = document.createElement("p"); // Create a new element to display the next result
        return new Promise((resolve) => {
            setTimeout(() => {
                p.innerText = `Result: ${val}`;
                output.append(p); // Display the result after dividing
                resolve(val); // Resolve the promise with the new value
            }, 1000 * 1); // 1 second delay
        });
    })
    .then((val) => {
        val += 10; // Add 10
        // p = document.createElement("p"); // Create a new element to display the final result
        return new Promise((resolve) => {
            setTimeout(() => {
                p.innerText = `Final Result: ${val}`;
                output.append(p); // Display the final result
                resolve(val); // Resolve the promise with the final value
            }, 1000 * 1); // 1 second delay
        });
    })
    .catch((error) => {
        console.error("Error:", error); // Catch and log any errors in the promise chain
    });
});
