  const toggle = document.getElementById("toggle-theme");
  const body = document.body;
  const nav = document.querySelector("nav");
  
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      nav.classList.remove("light-mode");
      nav.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      nav.classList.remove("dark-mode");
      nav.classList.add("light-mode");
    }
  });
  
  // default theme placement 
  window.addEventListener("DOMContentLoaded", () => {
    body.classList.add("light-mode");
    nav.classList.add("light-mode");
  });
