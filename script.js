let userInput = document.getElementById('ip');
let btn = document.getElementById('btn');
let output = document.getElementById('output');

btn.addEventListener("click", () => {
    let val = +userInput.value;
    let p = document.createElement("p");

    new Promise((resolve) => {
        setTimeout(() => {
            val = val; // Initial value
            p.innerText = `Result: ${val}`;
            output.append(p);
            resolve(val);
        }, 1000 * 2);
    })
    .then((val) => {
        val *= 2;
        p = document.createElement("p");
        setTimeout(() => {
            p.innerText = `Result: ${val}`;
            output.append(p);
        }, 1000 * 2);
        return val;
    })
    .then((val) => {
        val -= 3;
        p = document.createElement("p");
        setTimeout(() => {
            p.innerText = `Result: ${val}`;
            output.append(p);
        }, 1000 * 1);
        return val;
    })
    .then((val) => {
        val /= 2;
        p = document.createElement("p");
        setTimeout(() => {
            p.innerText = `Result: ${val}`;
            output.append(p);
        }, 1000 * 1);
        return val;
    })
    .then((val) => {
        val += 10;
        p = document.createElement("p");
        setTimeout(() => {
            p.innerText = `Final Result: ${val}`;
            output.append(p);
        }, 1000 * 1);
        return val;
    })
    .catch(error => {
        console.error(error);
    });
});
