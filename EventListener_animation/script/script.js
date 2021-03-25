window.addEventListener('load', function(){

const button = document.querySelector('button');
const ball = document.querySelector('.ball');
const par = document.querySelector('.text p');

let state = 'paused';

button.addEventListener('click', ()=>{
	if (state === 'paused'){
		ball.style.animationPlayState = 'running';
		state = 'running';
	}

	else{
		ball.style.animationPlayState = 'paused';
		state = 'paused';
	}
})


window.onscroll = () => {
	if (scrollY>=1000) {
		par.style.opacity = 1;
	}
	else {
		par.style.opacity = 0.5;
	}
}


})

