//your JS code here. If required.

let numBox = document.getElementById('ip');
let num = +(numBox.val);
let btn = document.getElementById('btn');
let output = document.getElementById('output');
let para = document.createElement('p')
btn.addEventListener("click" , ()=>{
	new Promise((response,reject)=>{
		setTimeout(()=>{
			p.innerText = `Result : ${num}`
			output.append(p); 
			resolve(num);
		},1000*2)
	})
	.then(num => {
		setTimeout(()=>{
			num = num*2;
			p.innerText = `Result : ${num}`
			output.append(p); 
			resolve(num);
		},1000*2)
	})
	.then(num => {
		setTimeout(()=>{
			num = num-3;
			p.innerText = `Result : ${num}`
			output.append(p); 
			resolve(num);
		},1000*1)
	})
	.then(num => {
		setTimeout(()=>{
			num = num/2;
			p.innerText = `Result : ${num}`
			output.append(p); 
			resolve(num);
		},1000*1)
	})
	.then(num => {
		setTimeout(()=>{
			num = num+10;
			p.innerText = `Result : ${num}`
			output.append(p); 
		})
	})
	.catch(error => {
		console.log(error)
	})
})








