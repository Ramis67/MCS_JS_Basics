

// const blocks = document.getElementsByTagName('li');

// let amount = 0;

// while(amount < blocks.length) {
// 	blocks[amount].innerHTML = amount + 2;
// 	amount++;
// }



// let myfunction = function {
// 	return m = counter%6;
// }

// const numbers = document.querySelector('div');

const numbers = document.body;

for(let i = 1; i < 100000; i++){
  if (i % 6 == 0) {
     numbers.innerHTML +=' '+i;
  }
}




// while(counter<100000) {
// 	document.body.innerHTML = myfunction(); 
// }