let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]



const bitcoin = document.getElementsByClassName('bitcoin')[0];
const etherium = document.getElementsByClassName('etherium')[0];
const litecoin = document.getElementsByClassName('litecoin')[0];
const bitcoinColor = document.getElementById('red');
const etheriumColor = document.getElementById('blue');
const litecoinColor = document.getElementById('green');
const bitcoinCost = document.getElementById('bitcoincost');
const etheriumCost = document.getElementById('etheriumcost');
const litecoinCost = document.getElementById('litecoincost');

bitcoin.innerHTML = crypto[0].name;
etherium.innerHTML = crypto[1].name;
litecoin.innerHTML = crypto[2].name;

bitcoinCost.innerHTML = crypto[0].price;
etheriumCost.innerHTML = crypto[1].price;
litecoinCost.innerHTML = crypto[2].price;

bitcoinColor.style.backgroundColor = '#D0021C'
bitcoinColor.style.width = crypto[0].price / 2 + 'px';
bitcoinColor.style.height = '2rem';

etheriumColor.style.backgroundColor = '#4990E2'
etheriumColor.style.width = crypto[1].price / 2 + 'px';
etheriumColor.style.height = '2rem';

litecoinColor.style.backgroundColor = '#4FE3C1'
litecoinColor.style.width = crypto[2].price / 2 + 'px';
litecoinColor.style.height = '2rem';

