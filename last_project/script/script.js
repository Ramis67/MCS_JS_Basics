window.addEventListener('load', () => {

class Person{
	constructor(name){
		this.name = name;
		this.happiness = 0;
	}
	hasCat(){
		return this.happiness + 1;
	}
	hasRest(){
		return this.happiness + 1;
	}
	hasMoney(){
		return this.happiness + 1;
	}
	isSunny(){
		let city = 'Moscow';
		const APIKey = 'ccbd0fc8abb39c00bd73e9dbf8cf89f6';
		let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send();
		let DATA = JSON.parse(xhr.responseText);

		if (DATA.main.temp > 15) {
			return this.happiness + 1
		}	else {
			return this.happiness
		}
		}
	}

const form = document.forms[0];

form.onsubmit = function(e){
	e.preventDefault();

	let name = document.forms[0].elements.name.value;
	let Cat = document.forms[0].elements.cat.value;
	let Rest = document.forms[0].elements.rest.value;
	let Money = document.forms[0].elements.money.value;
	const icon = document.querySelector('.icon');
	const happy = document.querySelector('.happy');
	const neutral = document.querySelector('.neutral');
	const frowning = document.querySelector('.frowning');

	const personName = new Person(name);

	let user = document.querySelector('.Name')

	if (Cat == 'yes' && Rest == 'yes' && Money == 'yes') {
		happiness = personName.hasCat() + personName.hasRest() + personName.hasMoney();
	} else if (Cat == 'yes' && Rest == 'yes' && Money == 'no') {
		happiness = personName.hasCat() + personName.hasRest();
	} else if (Cat == 'yes' && Rest == 'no' && Money == 'no') {
		happiness = personName.hasCat();
	} else if (Cat == 'no' && Rest == 'no' && Money == 'no') {
		happiness = 0;
	} else if (Cat == 'no' && Rest == 'yes' && Money == 'no') {
		happiness = personName.hasRest();
	} else if (Cat == 'no' && Rest == 'yes' && Money == 'yes') {
		happiness = personName.hasRest() + personName.hasMoney();
	} else if (Cat == 'yes' && Rest == 'no' && Money == 'yes') {
		happiness = personName.hasCat() + personName.hasMoney();
	} else if (Cat == 'no' && Rest == 'no' && Money == 'yes') {
		happiness = personName.hasMoney();
	}

	let happinessRate = happiness + personName.isSunny();

	if (happinessRate == 4) {
		icon.style.display = 'none';
		happy.style.display = 'block';
		neutral.style.display = 'none';
		frowning.style.display = 'none';
	}

	else if (happinessRate == 2 || happinessRate == 3) {
		icon.style.display = 'none';
		happy.style.display = 'none';
		neutral.style.display = 'block';
		frowning.style.display = 'none';
	}

	else {
		icon.style.display = 'none';
		happy.style.display = 'none';
		neutral.style.display = 'none';
		frowning.style.display = 'block';
	}
	
	user.innerHTML = document.forms[0].elements.name.value;

	}

})
