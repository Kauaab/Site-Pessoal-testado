const texto = "Desenvolvedor Front-End";
let i = 0;
function digitar() {
  const titulo = document.getElementById("titulo");
  if (titulo && i < texto.length) {
    titulo.innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitar, 100);
  }
}
digitar();

window.addEventListener("load", function () {
  const elementos = document.querySelectorAll(".reveal");
  elementos.forEach((el) => {
    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;
    if (posicao < alturaTela - 100) {
      el.classList.add("ativo");
    }
  });
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
document.getElementById("botao-dark").addEventListener("click", toggleDarkMode);

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "transform 0.3s ease";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});