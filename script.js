const iconoMenu = document.getElementById("iconomenu");
const closeMenu = document.getElementById("closemenu");
const menuIzquierdo = document.getElementById("menuIzquierdo");
const nItems = document.getElementById("numeroitems"); //para agregar el numero de items 


const productContainer = document.querySelector(".productContainer");
const btnP1 = document.getElementById("btn-p1");
const btnP2 = document.getElementById("btn-p2");
const btnP3 = document.getElementById("btn-p3");
const btnP4 = document.getElementById("btn-p4");
const btnP5 = document.getElementById("btn-p5");
const btnP6 = document.getElementById("btn-p6");

let itemsCarrito = 0;
let total = 0;
const montoTotal = document.getElementById("montoxPagar"); // Elemento para mostrar el monto total


iconoMenu.addEventListener("click", () => {
  menuIzquierdo.classList.add("visible");
});

closeMenu.addEventListener("click", () => {
  menuIzquierdo.classList.remove("visible");
});

btnP1.addEventListener("click", () => {
  const d1 = document.createElement("div"); //nuevo div para la info del carrito
  d1.classList.add("productReview");
  d1.innerHTML = `
  <img src="img/mx.png">
  <p>$1000</p>
  <h3>Jersey México 2023</h3>
  <img src="img/delete.png">
  `;
  productContainer.appendChild(d1);
  total += 1000;
  montoTotal.textContent = `$${total.toString()}`;

  nItems.classList.add("numItems");
  nItems.textContent = ++itemsCarrito; 
  alert("Producto agregado al carrito");
});

btnP2.addEventListener("click", () => {
  const d2 = document.createElement("div"); //nuevo div para la info del carrito
  d2.classList.add("productReview");
  d2.innerHTML = `
  <img src="img/Chamarra.jpg">
  <p>$2000</p>
  <h3>Chamarra</h3>
  <img src="img/delete.png">
  `;
  productContainer.appendChild(d2);
  total += 2000;
  montoTotal.textContent = `$${total.toString()}`;

  nItems.classList.add("numItems");
  nItems.textContent = ++itemsCarrito; 
  alert("Producto agregado al carrito");
});

btnP3.addEventListener("click", () => {
  const d3 = document.createElement("div"); //nuevo div para la info del carrito
  d3.classList.add("productReview");
  d3.innerHTML = `
  <img src="img/tenis.jpg">
  <p>$3000</p>
  <h3>Tennis</h3>
  <img src="img/delete.png">
  `;
  productContainer.appendChild(d3);
  total += 3000;
  montoTotal.textContent = `$${total.toString()}`;

  nItems.classList.add("numItems");
  nItems.textContent = ++itemsCarrito; 
  alert("Producto agregado al carrito");
});

btnP4.addEventListener("click", () => {
  const d4 = document.createElement("div"); //nuevo div para la info del carrito
  d4.classList.add("productReview");
  d4.innerHTML = `
  <img src="img/germany.jpg">
  <p>$1000</p>
  <h3>Jersey Alemania</h3>
  <img src="img/delete.png">
  `;
  productContainer.appendChild(d4);
  total += 1000;
  montoTotal.textContent = `$${total.toString()}`;

  nItems.classList.add("numItems");
  nItems.textContent = ++itemsCarrito; 
  alert("Producto agregado al carrito");
});

btnP5.addEventListener("click", () => {
  const d5 = document.createElement("div"); //nuevo div para la info del carrito
  d5.classList.add("productReview");
  d5.innerHTML = `
  <img src="img/gorra.jpg">
  <p>$700</p>
  <h3>Gorra</h3>
  <img src="img/delete.png">
  `;
  productContainer.appendChild(d5);
  total += 750;
  montoTotal.textContent = `$${total.toString()}`;

  nItems.classList.add("numItems");
  nItems.textContent = ++itemsCarrito; 
  alert("Producto agregado al carrito");
});

btnP6.addEventListener("click", () => {
  const d6 = document.createElement("div"); //nuevo div para la info del carrito
  d6.classList.add("productReview");
  d6.innerHTML = `
  <img src="img/botas.jpg">
  <p>$2300</p>
  <h3>Botas</h3>
  <img src="img/delete.png">
  `;
  productContainer.appendChild(d6);
  total += 2300;
  montoTotal.textContent = `$${total.toString()}`;

  nItems.classList.add("numItems");
  nItems.textContent = ++itemsCarrito; 
  alert("Producto agregado al carrito");
});
