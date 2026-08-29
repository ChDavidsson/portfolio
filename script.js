// ============================================
// Mörkt / ljust läge — switchen i toppen
// ============================================

const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-switch-icon");
const bodyElement = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  bodyElement.classList.add("light-mode");
  themeIcon.textContent = "☀️";
}

themeToggleButton.addEventListener("click", function () {
  bodyElement.classList.toggle("light-mode");

  const isLightMode = bodyElement.classList.contains("light-mode");

  if (isLightMode) {
    themeIcon.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});