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

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");

        navLinks.forEach(function (link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + currentId) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    // Sektionen räknas som "aktiv" när den är i mitten av skärmen
    rootMargin: "-40% 0px -40% 0px"
  }
);

sections.forEach(function (section) {
  observer.observe(section);
});