

const list = document.getElementsByTagName('li');

// for(li of list){
// 	li.style.backgroundColor = 'green';
// }

// for(key in list) {
// 	list[2].style.backgroundColor = 'yellow';
// }

let newSchool = [
  [
    ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
    ['Sonny Digital', 'Metro Boomin', '12Hunna']
  ],
  [
    ['Yung Lean', 'Ecco2K', 'Bladee'],
    ['Whitearmor', 'PJ Beats', 'Yung Gud']
  ]
]

for(ASrappers of newSchool){
	let SArappers = newSchool[0][0] + ' ' + newSchool[1][0];
	console.log(SArappers);
}

for(key in newSchool){
	let SAproducers = `${newSchool[0][1][0]} ${newSchool[0][1][1]}
	 ${newSchool[0][1][2]} ${newSchool[1][1][0]} 
	 ${newSchool[1][1][1]} ${newSchool[1][1][2]}`;
	console.log(SAproducers);
}
