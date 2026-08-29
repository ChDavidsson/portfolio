// ============================================
// Mörkt / ljust läge — knappen i toppen
// ============================================

// Steg 1: Hämta knappen och body-elementet från HTML:et
const themeToggleButton = document.getElementById("theme-toggle");
const bodyElement = document.body;

// Steg 2: Kolla om användaren redan valt ett läge tidigare (sparat i webbläsaren)
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  bodyElement.classList.add("light-mode");
  themeToggleButton.textContent = "🌙 Mörkt läge";
}

// Steg 3: Lyssna på klick och byt läge
themeToggleButton.addEventListener("click", function () {
  // Växla klassen "light-mode" på/av på <body>
  bodyElement.classList.toggle("light-mode");

  // Kolla vilket läge det blev och uppdatera knapptext + spara valet
  const isLightMode = bodyElement.classList.contains("light-mode");

  if (isLightMode) {
    themeToggleButton.textContent = "🌙 Mörkt läge";
    localStorage.setItem("theme", "light");
  } else {
    themeToggleButton.textContent = "☀️ Ljust läge";
    localStorage.setItem("theme", "dark");
  }
});
