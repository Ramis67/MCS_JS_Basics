let totalCash = parseFloat(prompt('Количество денег'));
let watchesCount = parseInt(prompt('Количество часов'));
let earringsCount = parseInt(prompt('Количество сережек'));
let watchesPrice = parseFloat(prompt('Стоимость часов'));
let earringsPrice = parseFloat(prompt('Стоимость сережек'));
let allWatchesPrice = watchesCount * watchesPrice;
let allEarringsPrice = earringsCount * earringsPrice;
let spendingCash = allWatchesPrice + allEarringsPrice;
if (totalCash > spendingCash) {
	document.write('true')
}
else {
	document.write('false')
}