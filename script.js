
let userInput = document.getElementById('ip');
let btn = document.getElementById('btn');
let output = document.getElementById('output');

btn.addEventListener("onclick" , ()=>{
	let val = +userInput.value
	let p = document.createElement();
	new Promise((resolve,reject) => {
		setTimeout(()=>{
			p.innerText = `Result: ${val}`
			output.append(p);
		},1000*2)
		resolve(val);
	})
	.then((val)=>{
		val = val*2;
		new Promise((resolve,reject) => {
		setTimeout(()=>{
			p.innerText = `Result: ${val}`
			output.append(p);
		},1000*2)
		resolve(val);
	})
	.then((val)=>{
		val = val-3;
		new Promise((resolve,reject) => {
		setTimeout(()=>{
			p.innerText = `Result: ${val}`
			output.append(p);
		},1000*1)
		resolve(val);
	})
	.then((val)=>{
		val = val/2;
		new Promise((resolve,reject) => {
		setTimeout(()=>{
			p.innerText = `Result: ${val}`
			output.append(p);
		},1000*1)
		resolve(val);
	})
	.then((val)=>{
		val = val+10;
		new Promise((resolve,reject) => {
		setTimeout(()=>{
			p.innerText = `Final Result: ${val}`
			output.append(p);
		},1000*1)
		resolve(val);
	})
	.catch(error => {
		console.log(error);
	})

	
})




