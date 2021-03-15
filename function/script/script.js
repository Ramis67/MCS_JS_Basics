const totalCash = +prompt('Количество денег');
const watchesCount = +prompt('Количество часов');
const earringsCount = +prompt('Количество сережек');
const watchesPrice = +prompt('Стоимость часов');
const earringsPrice = +prompt('Стоимость сережек');
const allWatchesPrice = watchesCount * watchesPrice;
const allEarringsPrice = earringsCount * earringsPrice;

let haveEnough = function(totalCash, allWatchesPrice, allEarringsPrice){
	if (totalCash > allWatchesPrice + allEarringsPrice){
		return 'Enough $$$';
	}
	else {
		return 'Not Enough $$$';
}
}

document.body.innerHTML = haveEnough(totalCash, allWatchesPrice, allEarringsPrice);