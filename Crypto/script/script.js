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
const bitcoincolor = document.getElementById('red');
bitcoincolor.style.backgroundColor = 'red'
bitcoincolor.style.width = crypto[0].price;
bitcoincolor.style.height = '3rem';

bitcoin.innerHTML = crypto[0].name;
etherium.innerHTML = crypto[1].name;
litecoin.innerHTML = crypto[2].name;

