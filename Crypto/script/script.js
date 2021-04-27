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

for(currency of crypto){
    let nameOfCrypto = document.createElement('h2');
    document.body.appendChild(nameOfCrypto);
    let costOfCrypto = document.createElement('h2');
    document.body.appendChild(costOfCrypto);
    let colorOfCrypto = document.createElement('div');
    document.body.appendChild(colorOfCrypto);
    nameOfCrypto.innerHTML = currency.name;
    costOfCrypto.innerHTML = currency.price;
    colorOfCrypto.style.backgroundColor = currency.color;
    colorOfCrypto.style.width = currency.price / 20 + '%';
    colorOfCrypto.style.height = '2rem';
}