let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37,
    color: "#D0021C"
  },
  {
    name: "Ethereum",
    price: 716,
    color: "#4990E2"
  },
  {
    name: "Litecoin",
    price: 140,
    color: "#4FE3C1"
  }
]

let nameOfCrypto = document.querySelector('.name');
let costOfCrypto = document.querySelector('.cost');
let colorOfCrypto = document.querySelector('div');

for(currency of crypto){
    nameOfCrypto = currency.name;
    costOfCrypto = currency.price;
    colorOfCrypto.style.color = currency.color;
    colorofCrypto.style.width = currency.price / 20 + '%';
}




// bitcoin.innerHTML = crypto[0].name;
// etherium.innerHTML = crypto[1].name;
// litecoin.innerHTML = crypto[2].name;

// bitcoinCost.innerHTML = crypto[0].price;
// etheriumCost.innerHTML = crypto[1].price;
// litecoinCost.innerHTML = crypto[2].price;

// bitcoinColor.style.backgroundColor = '#D0021C'
// bitcoinColor.style.width = crypto[0].price / 2 + 'px';
// bitcoinColor.style.height = '2rem';

// etheriumColor.style.backgroundColor = '#4990E2'
// etheriumColor.style.width = crypto[1].price / 2 + 'px';
// etheriumColor.style.height = '2rem';

// litecoinColor.style.backgroundColor = '#4FE3C1'
// litecoinColor.style.width = crypto[2].price / 2 + 'px';
// litecoinColor.style.height = '2rem';