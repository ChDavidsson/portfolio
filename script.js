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


// ============================================
// Navigeringsmeny — markera rätt flik vid scroll
// ============================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".topbar-tabs .tab");

function updateActiveTab() {
  const scrollPosition = window.scrollY + 150; // 150px marginal från toppen

  let currentSectionId = sections[0].getAttribute("id");

  sections.forEach(function (section, index) {
    const sectionStart = section.offsetTop;
    const nextSection = sections[index + 1];
    // Om det finns en nästa sektion, sluta där den börjar. Annars (sista sektionen), sluta i oändligheten.
    const sectionEnd = nextSection ? nextSection.offsetTop : Infinity;

    if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSectionId) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveTab);
updateActiveTab();