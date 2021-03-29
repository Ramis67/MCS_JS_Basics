const form = document.forms[0];
console.log(form);
const insert = document.querySelector('.answer');

form.onsubmit = function(e) {
	e.preventDefault();
	insert.innerHTML = Math.sin((form.elements.sin.value) * (Math.PI/180));
		// Math.sin(form.elements.sin.value);
		// Math.sin((form.elements.sin.value)/(Math.PI/180));
}
