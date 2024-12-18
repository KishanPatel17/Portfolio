function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // when clicked will add/remove open class to element
  menu.classList.toggle("open");
  icon.classList.toggle("open");

}