class Tiger {
	constructor(name){
		this.name = name;
	}
	feedCat(){
		console.log('Purrrrr');
	}
}

// console.log(Tiger);

class angryTiger extends Tiger {
	throwDart(){
		console.log('ZzZzZzZz');
	}
}

// console.log(angryTiger);

const animal = new Tiger('Pes');

console.log(animal);

const angryAnimal = new angryTiger('Kot');

console.log(angryAnimal);