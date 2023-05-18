const textForm = document.querySelector("#texto-form");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const cardContent = document.querySelector(".card");

let texto2 = "";
let texto1 = "";

function desencriptar(evento) {
  texto1 = textForm.value;
  console.log(texto1);

  texto2 = texto1.replaceAll("ai", "a");
  texto2 = texto2.replaceAll("enter", "e");
  texto2 = texto2.replaceAll("imes", "i");
  texto2 = texto2.replaceAll("ober", "o");
  texto2 = texto2.replaceAll("ufat", "u");

  cardContent.innerHTML = callTemplate(texto2);
}
function encriptar(evento) {
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
}

btnDesencriptar.onclick = desencriptar;

btnEncriptar.onclick = encriptar;

function callTemplate(val) {
  return `<p id="texto-descifrado">${val} </p>
            <button class="btn-secondary">Copiar</button>`;
}
