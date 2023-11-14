var valorEmDolar = 30;
var cotacaoDoDolar = 5.32;

var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal.toFixed(2);

window.alert(
  `O valor em real é em R$${valorEmReal} e o valor em dolar é $${valorEmDolar}`
);
