

// const list = document.getElementsByTagName('li');

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


newSchool.forEach(function(massive){
  for(name of massive){
    console.log(name);
  }
})