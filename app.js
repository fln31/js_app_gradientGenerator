let color1 = "#FF5F6D";
let color2 = "#FFC371";
let degree = 90;

const inputs = document.querySelectorAll(".input-group");

function colorRandomizer() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function handleInput(e) {
  if (e.target.id === "color1") {
    color1 = e.target.value;
  } else if (e.target.id === "color2") {
    color2 = e.target.value;
  }
  syncBackground();
}

function handleRange(e) {
  e.preventDefault();
  degree = e.target.value;
  syncBackground();
}

function copy(e) {
  e.preventDefault();
  navigator.clipboard.writeText(document.body.getAttribute("style")).then(() => {
    document.querySelector(".copy-btn span").textContent = "Copié";
    setTimeout(() => {
      document.querySelector(".copy-btn span").textContent = "Copier";
    }, 2000);
  });
}

function randomColor(e) {
  e.preventDefault();
  color1 = colorRandomizer();
  color2 = colorRandomizer();
  syncBackground();
}

inputs.forEach((el) => {
  el.addEventListener("input", (e) => handleInput(e));
});

document.querySelector(".inp-range").addEventListener("input", (e) => handleRange(e));
document.querySelector(".copy-btn").addEventListener("click", (e) => copy(e));
document.querySelector(".random-btn").addEventListener("click", (e) => randomColor(e));

function syncBackground() {
  const input1 = document.querySelector('label[for="color1"]');
  const input2 = document.querySelector('label[for="color2"]');

  document.body.style.background = `linear-gradient(${degree}deg, ${color1} 0%, ${color2} 100%)`;
  document.querySelector(".orientation-value").textContent = degree;
  input1.textContent = color1;
  input1.style.backgroundColor = color1;
  input2.textContent = color2;
  input2.style.backgroundColor = color2;
}
