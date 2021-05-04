const form = document.forms;
const city = document.forms[0].elements.city.value;
const APIKey = 'ccbd0fc8abb39c00bd73e9dbf8cf89f6';
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
let temp = document.querySelector('.temperature');

let xhr = new XMLHttpRequest();

form.onsubmit = function(e){
	e.preventDefault();

	xhr.open('GET', url, false);

	xhr.send();

	let DATA = JSON.parse(xhr.responseText);

	if(xhr.status != 200){
		console.log(xhr.status + ' ' + xhr.statusText);
	} else{
		temp.innerHTML = DATA.main.temp;
	}
}




