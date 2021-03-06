let number = prompt('введите число');
number = parseFloat(number);
if (number>0) {
console.log(number);
}
else if (number<0) {
console.log(number*(-1));
}
else {
console.log(0);
}