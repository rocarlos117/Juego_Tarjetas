var grupoTarjeta1 = ["🐶", "🐺", "🐱","🐵","💥", "🦧", "🐷","🐪","🦒","🦏","🦛","🐹","🦔","🐨","🐼","🦡","🐣"];
var grupoTarjeta2 = ["🐶", "🐺", "🐱","🐵","💥", "🦧", "🐷","🐪","🦒","🦏","🦛","🐹","🦔","🐨","🐼","🦡","🐣"];

var todasLasTarjetas = grupoTarjeta1.concat(grupoTarjeta2);

function crearTajetas() {
  var mesa = document.querySelector("#mesa");

  todasLasTarjetas.forEach(function mensaje(Element) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML = Element;

    mesa.appendChild(tarjeta);
  });
}

crearTajetas();

/*<div class="tarjeta">🐶</div>*/
