const textForm = document.querySelector("#texto-form");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const cardContent = document.querySelector(".card");
const infoText = document.querySelector(".info-text");
const infoError = document.querySelector(".info-error");
let btnCopiar = "";
let textoDescifrado = "";
let texto2;
let texto1;

function tieneCaracteresNoValidos(value) {
  var regex = /[A-ZáéíóúàèìòùÁÉÍÓÚÜÑÀÈÌÒÙ!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  return regex.test(value);
}

function validar(value) {
  if (
    tieneCaracteresNoValidos(value) ||
    value.trim().length == 0 ||
    value == ""
  ) {
    return true;
  } else {
    return false;
  }
}

function mostrarError(value) {
  if (value) {
    infoError.classList.remove("inactive");
    infoText.classList.add("inactive");
  } else {
    infoError.classList.add("inactive");
    infoText.classList.remove("inactive");
  }
}

function desencriptar(evento) {
  texto2 = "";
  texto1 = "";
  texto1 = textForm.value;
  let mostrandoError = validar(texto1);
  if (mostrandoError) {
    mostrarError(true);
    return;
  } else {
    mostrarError(false);
  }

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
  let mostrandoError = validar(texto1);
  if (mostrandoError) {
    mostrarError(true);
    return;
  } else {
    mostrarError(false);
  }
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

function callTemplate(value) {
  return `<p id="texto-resultado">${value} </p>
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
