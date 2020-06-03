// 1.

let button1 = document.querySelectorAll("button")[0];
let button2 = document.querySelectorAll("button")[1];
let textBox = document.querySelector("p");


button1.addEventListener("click", (e) => {
	textBox.innerHTML = "I'm right!"
});

button2.addEventListener("click", (e) => {
	textBox.innerHTML = "No, I'm right!"
});

// 2.
let largeElement = document.querySelector("h1");
largeElement.addEventListener("mouseover", (e) => {
	alert("Hey, I told you not to hover over me!");
});
	
// 3.
// Found in HTML

// 4. 
let passBtn = document.querySelector("input[type=password]");
let submitBtns = document.querySelectorAll("input[type=submit]");
let passText = document.querySelector("h1#passTextDisplay");

submitBtns[0].addEventListener("click", (e) => {
	// a. 
	if(String(passBtn.value) === "12345678")
		// c.
		passText.innerHTML = "Password is Correct";
	// b.
	else
		alert("Password is incorrect");

	// to disable page reload
	return false;
});

// 5. style.css

// 6. BONUS
let r = document.querySelector("#sphereInpt");
let sphereSubmit = document.querySelectorAll("input[type=submit]");
let vol = document.querySelector("h1#sphereDisplay");

submitBtns[1].addEventListener("click", (e) => {
	console.log(r);
	console.log(r.value);
	vol.innerHTML = ((4/3) * Math.PI * Math.pow(r.value, 3));
});


