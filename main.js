const codigos = ["ai", "enter", "imes", "ober", "ufat"];
const letras = ["a", "e", "i", "o", "u"];

const textForm = document.querySelector("#texto-form");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const cardContent = document.querySelector(".card");

const template = `<p id="texto-descifrado">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci montes, sit et diam
                risus scelerisque vitae est. Tortor
                maecenas nunc ut laoreet. Eget diam mauris quam quisque ut eget fringilla sit elit. Libero, sodales duis
                fames id diam
                feugiat aliquet non egestas.</p>
            <button class="btn-secondary">Copiar</button>`;

btnDesencriptar.onclick = () => {
  let texto1 = textForm.value;
  let texto2 = texto1.replaceAll("ai", "a");
  texto2 = texto2.replaceAll("enter", "e");
  texto2 = texto2.replaceAll("imes", "i");
  texto2 = texto2.replaceAll("ober", "o");
  texto2 = texto2.replaceAll("ufat", "u");

  cardContent.innerHTML = callTemplate(texto2);
};

btnEncriptar.onclick = () => {
  let texto1 = textForm.value;
  let texto2 = "";
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
};

function reemplazarLetras(str) {
  str.replaceAll("a", "ai");
  str.replaceAll("e", "ai");
  str.replaceAll("i", "ai");
  str.replaceAll("o", "ai");
  str.replaceAll("u", "ai");
}

function callTemplate(val) {
  return `<p id="texto-descifrado">${val} </p>
            <button class="btn-secondary">Copiar</button>`;
}
