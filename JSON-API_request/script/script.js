
const form = document.forms;
const city = document.forms[0].elements.gorod;
const APIKey = 'ccbd0fc8abb39c00bd73e9dbf8cf89f6';
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
let temp = document.querySelector('.temperature');

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();

let DATA = JSON.parse(xhr.responseText);

console.log(DATA);

form.onsubmit = function(e){
	e.preventDefault();

	if(xhr.status != 200){
		console.log(xhr.status + ' ' + xhr.statusText);
	} else{
		city.innerHTML = form.elements.gorod.value;
		temp.innerHTML = DATA.main.temp;
	}
}




