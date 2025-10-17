const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");

function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return "#" + hex.padStart(6, "0");
}

function generatePalette() {
  palette.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const color = getRandomColor();
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.background = color;
    colorBox.textContent = color.toUpperCase();

    // Copy to clipboard
    colorBox.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      colorBox.textContent = "Copied!";
      colorBox.style.textShadow = "0 0 10px #fff";
      setTimeout(() => {
        colorBox.textContent = color.toUpperCase();
        colorBox.style.textShadow = "0 2px 5px rgba(0,0,0,0.3)";
      }, 800);
    });

    palette.appendChild(colorBox);
  }
}

generateBtn.addEventListener("click", generatePalette);
generatePalette();
