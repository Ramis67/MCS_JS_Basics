// const rock = 0;
// const scissors = 1;
// const paper = 2;

let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
let computer = Math.floor(Math.random() * 3);

if (player == 0 && computer == 1 || player == 1 && computer == 2 || player == 2 && computer == 0){
	console.log('player win');
}
else if (player == 0 && computer == 2 || player == 1 && computer == 0 || player == 2 && computer == 1){
	console.log('computer win');
}
else {
	console.log('stand-off');
}