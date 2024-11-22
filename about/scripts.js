document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("themeButton");
  const body = document.body;

  // Toggle dark mode
  themeButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    themeButton.textContent = isDark ? "Light Theme" : "Dark Theme";
  });
});
