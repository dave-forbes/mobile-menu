const burgerMenu = document.querySelector("i.fa-bars");
const closeMenuIcon = document.querySelector("i.fa-xmark");

burgerMenu.addEventListener("click", showMenu);
closeMenuIcon.addEventListener("click", showMenu);

function showMenu() {
  const circle = document.querySelector(".circle");
  const menu = document.querySelector(".menu");
  circle.classList.toggle("scale-up");
  burgerMenu.classList.toggle("fade");
  closeMenuIcon.classList.toggle("fade");
  menu.classList.toggle("fade");
}
