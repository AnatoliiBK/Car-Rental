const themeToggleBtn = document.querySelector(".themeToggleBtn");
// const theme = document.body;
const theme = document.querySelector(".section-catalog");

function toggleTheme() {
  theme.classList.toggle("dark-theme");
  const isDarkTheme = theme.classList.contains("dark-theme");
  localStorage.setItem("darkTheme", isDarkTheme);
}

themeToggleBtn.addEventListener("click", toggleTheme);

const savedTheme = localStorage.getItem("darkTheme");
if (savedTheme) {
  theme.classList.toggle("dark-theme", savedTheme === "true");
}

// const savedTheme = localStorage.getItem("darkTheme");
// if (savedTheme && typeof savedTheme === "boolean") {
//   theme.classList.toggle("dark-theme", savedTheme);
// }
