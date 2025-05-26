const iconoMenu = document.getElementById("iconomenu");
const closeMenu = document.getElementById("closemenu");
const menuIzquierdo = document.getElementById("menuIzquierdo");

iconoMenu.addEventListener("click", () => {
 menuIzquierdo.classList.replace("hidden", "visible");
  
});

closeMenu.addEventListener("click", () => {
  menuIzquierdo.classList.replace("visible", "hidden");
  
});
