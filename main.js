const textForm = document.querySelector("#texto-form");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const cardContent = document.querySelector(".card");
let btnCopiar = "";
let textoDescifrado = "";
let texto2;
let texto1;

function desencriptar(evento) {
  texto2 = "";
  texto1 = "";
  texto1 = textForm.value;
  console.log(texto1);

  texto2 = texto1.replaceAll("ai", "a");
  texto2 = texto2.replaceAll("enter", "e");
  texto2 = texto2.replaceAll("imes", "i");
  texto2 = texto2.replaceAll("ober", "o");
  texto2 = texto2.replaceAll("ufat", "u");

  cardContent.innerHTML = callTemplate(texto2);
  callBtnCopiar();
}
function encriptar(evento) {
  texto2 = "";
  texto1 = "";
  texto1 = textForm.value;
  console.log(texto1);

  for (let i = 0; i < texto1.length; i++) {
    switch (texto1[i]) {
      case "a":
        texto2 += "ai";
        break;
      case "e":
        texto2 += "enter";
        break;
      case "i":
        texto2 += "imes";
        break;
      case "o":
        texto2 += "ober";
        break;
      case "u":
        texto2 += "ufat";
        break;
      default:
        texto2 += texto1[i];
        break;
    }
  }
  cardContent.innerHTML = callTemplate(texto2);
  callBtnCopiar();
}

btnDesencriptar.onclick = desencriptar;

btnEncriptar.onclick = encriptar;

function callTemplate(val) {
  return `<p id="texto-resultado">${val} </p>
            <button class="btn btn-secondary" id="btn-copiar">Copiar</button>`;
}
function callBtnCopiar() {
  btnCopiar = document.querySelector("#btn-copiar");

  btnCopiar.onclick = copiarTexto;
}

function copiarTexto() {
  var elementoTexto = document.getElementById("texto-resultado");

  var auxiliar = document.createElement("textarea");
  var textoCopiado = elementoTexto.innerText;

  auxiliar.value = textoCopiado;
  document.body.appendChild(auxiliar);

  auxiliar.select();
  document.execCommand("copy");
  document.body.removeChild(auxiliar);
}
