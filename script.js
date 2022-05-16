function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorEmDolar = valorEmRealNumerico * 0.21;

  var valorDolarFinal = valorEmDolar.toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = "U$ " + valorDolarFinal;

  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorEmEuro = valorEmRealNumerico * 0.19;

  var valorEuroFinal = valorEmEuro.toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = "€ " + valorEuroFinal;

  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterLibra() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorEmLibra = valorEmRealNumerico * 0.16;

  var valorLibraFinal = valorEmLibra.toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = "£ " + valorLibraFinal;

  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorEmBitcoin = valorEmRealNumerico * 0.0000047;

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = "₿ " + valorEmBitcoin;

  elementoValorConvertido.innerHTML = valorConvertido;
}