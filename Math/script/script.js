let a = +prompt('введите число');

function number(){
	return Math.abs(a**(Math.round(Math.random()*(9-1)+1)));
}

console.log(number());

// document.body.innerHTML = number();