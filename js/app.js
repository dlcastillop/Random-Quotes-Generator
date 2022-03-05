async function getapi() {
  const response = await fetch("https://api.quotable.io/random");
  let datos = await response.json();
  let frase = datos["content"];
  let autor = datos["author"];
  document.getElementsByTagName("h1")[0].textContent = frase;
  document.getElementsByTagName("h2")[0].textContent = autor;
}

getapi();

document.getElementById("boton").addEventListener("click", getapi);
