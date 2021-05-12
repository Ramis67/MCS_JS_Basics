const form = document.forms[0];

form.onsubmit = function(e){

	e.preventDefault();

	let city = document.forms[0].elements.city.value;

	const APIKey = 'ccbd0fc8abb39c00bd73e9dbf8cf89f6';

	let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

	let xhr = new XMLHttpRequest();

	xhr.open('GET', url, false);

	xhr.send();

	let DATA = JSON.parse(xhr.responseText);

	console.log(DATA);

	let temp = document.querySelector('.temperature');

	let speedOfWind = document.querySelector('.speedofwind');

	if(xhr.status != 200){
		console.log(xhr.status + ' ' + xhr.statusText);
	}else{
		temp.innerHTML = ' ' + (DATA.main.temp - 273,5);
		speedOfWind.innerHTML = ' ' + DATA.wind.speed;
	}
}