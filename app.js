const navItems = document.getElementById("nav-items");
const toggler = document.querySelector(".toggle");

toggler.addEventListener("click", () => {
  navItems.classList.toggle("toggled-nav");
});
