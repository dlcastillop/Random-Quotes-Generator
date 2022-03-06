// Solicita información a la API y muestra la frase  y el autor
async function getapi() {
  const response = await fetch("https://api.quotable.io/random");

  let datos = await response.json();
  let frase = datos["content"];
  let autor = datos["author"];

  document.getElementsByTagName("h1")[0].textContent = frase;
  document.getElementsByTagName("h2")[0].textContent = autor;

  construirEnlaces();
}

// Construir enlace para Twitter y Whatsapp
function construirEnlaces() {
  let frase = document.getElementsByTagName("h1")[0].innerHTML;
  let autor = document.getElementsByTagName("h2")[0].innerHTML;

  let texto = "";

  texto += encodeURIComponent(frase);
  texto += "%22%20%2D%20";
  texto += encodeURIComponent(autor);

  document
    .getElementsByTagName("a")[4]
    .setAttribute("href", "https://twitter.com/intent/tweet?text=%22" + texto);
  document
    .getElementsByTagName("a")[5]
    .setAttribute("href", "https://api.whatsapp.com/send?text=%22" + texto);
}

getapi();
document.getElementById("boton").addEventListener("click", getapi);
