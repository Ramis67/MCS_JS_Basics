const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

let state = 'none';

button.addEventListener('click', function(){
	if (state === 'none'){
		h1.style.display = 'block';
		h2.style.display = 'none';
		state = 'block';
	}

	else{
		h1.style.display = 'none';
		h2.style.display = 'block';
		state = 'none';
	}
})