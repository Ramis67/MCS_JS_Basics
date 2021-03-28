let a = +prompt('введите число');

function number(){
	return Math.abs(a**(Math.floor(Math.random()*(9-1)+1)));
}

document.body.innerHTML = number();