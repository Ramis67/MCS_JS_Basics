const totalCash = parseFloat(prompt('Количество денег'));
const watchesCount = parseInt(prompt('Количество часов'));
const earringsCount = parseInt(prompt('Количество сережек'));
const watchesPrice = parseFloat(prompt('Стоимость часов'));
const earringsPrice = parseFloat(prompt('Стоимость сережек'));
const allWatchesPrice = watchesCount * watchesPrice;
const allEarringsPrice = earringsCount * earringsPrice;
if (totalCash > allWatchesPrice + allEarringsPrice) {
	document.write('true')
}
else {
	document.write('false')
}