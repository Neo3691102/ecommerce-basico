const iconoMenu = document.getElementById("iconomenu");
const closeMenu = document.getElementById("closemenu");
const menuIzquierdo = document.getElementById("menuIzquierdo");
const nItems = document.getElementById("numeroitems");
const iconoCarrito = document.getElementById("iconoCarrito"); // boton carrito
const carrito = document.getElementById("carrito");

const productContainer = document.querySelector(".productContainer");//contenedor de menu izquierdo
const cartContainer = document.querySelector(".cart__container");
const btnP1 = document.getElementById("btn-p1");
const btnP2 = document.getElementById("btn-p2");
const btnP3 = document.getElementById("btn-p3");
const btnP4 = document.getElementById("btn-p4");
const btnP5 = document.getElementById("btn-p5");
const btnP6 = document.getElementById("btn-p6");

let itemsCarrito = 0;
let total = 0;
const montoTotal = document.getElementById("montoxPagar");

iconoMenu.addEventListener("click", () => {
  menuIzquierdo.classList.add("visible");
});

iconoCarrito.addEventListener("click", () => {
  carrito.classList.add("visible");
})

closeMenu.addEventListener("click", () => {
  carrito.classList.remove("visible");
});

cartContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("boton-eliminar-producto")) {
    const productoAEliminar = event.target.closest(".productReview");
    console.log(productoAEliminar);

    if (productoAEliminar) {
      const p = productoAEliminar.querySelector("p");
      precioProductoEliminado = parseFloat(p.textContent);
      console.log(precioProductoEliminado);

      total -= precioProductoEliminado;
      console.log(total);
      montoTotal.textContent = `${total.toString()}`;
      console.log(montoTotal.textContent);

      itemsCarrito--;
      nItems.textContent = itemsCarrito.toString();
      if (itemsCarrito === 0) {
        nItems.classList.remove("numItems");
        nItems.textContent = "";
      }

      productoAEliminar.remove();

      alert("Producto eliminado del carrito");
    }
  }
});

btnP1.addEventListener("click", () => {
  const d1 = document.createElement("div");
  d1.classList.add("productReview");
  d1.innerHTML = `
  <img src="img/mx.png">
  <p>1000</p>
  <h3>Jersey México 2023</h3>
  <img class="boton-eliminar-producto" src="img/delete.png">
  `;
  cartContainer.appendChild(d1);
  total += 1000;
  montoTotal.textContent = `${total}`;

  nItems.classList.add("numItems");
  nItems.textContent = ++itemsCarrito;
  alert("Producto agregado al carrito");
});

btnP2.addEventListener("click", () => {
  const d2 = document.createElement("div");
  d2.classList.add("productReview");
  d2.innerHTML = `
  <img src="img/Chamarra.jpg">
  <p>2000</p>
  <h3>Chamarra</h3>
  <img class="boton-eliminar-producto" src="img/delete.png">
  `;
  cartContainer.appendChild(d2);
  total += 2000;
  montoTotal.textContent = `${total.toString()}`;

  nItems.classList.add("numItems");
  nItems.textContent = ++itemsCarrito;
  alert("Producto agregado al carrito");
});

btnP3.addEventListener("click", () => {
  const d3 = document.createElement("div");
  d3.classList.add("productReview");
  d3.innerHTML = `
  <img src="img/tenis.jpg">
  <p>3000</p>
  <h3>Tennis</h3>
  <img class="boton-eliminar-producto" src="img/delete.png">
  `;
  cartContainer.appendChild(d3);
  total += 3000;
  montoTotal.textContent = `${total.toString()}`;

  nItems.classList.add("numItems");
  nItems.textContent = ++itemsCarrito;
  alert("Producto agregado al carrito");
});

btnP4.addEventListener("click", () => {
  const d4 = document.createElement("div");
  d4.classList.add("productReview");
  d4.innerHTML = `
  <img src="img/germany.jpg">
  <p>1000</p>
  <h3>Jersey Alemania</h3>
  <img class="boton-eliminar-producto" src="img/delete.png">
  `;
  cartContainer.appendChild(d4);
  total += 1000;
  montoTotal.textContent = `${total.toString()}`;

  nItems.classList.add("numItems");
  nItems.textContent = ++itemsCarrito;
  alert("Producto agregado al carrito");
});

btnP5.addEventListener("click", () => {
  const d5 = document.createElement("div");
  d5.classList.add("productReview");
  d5.innerHTML = `
  <img src="img/gorra.jpg">
  <p>700</p>
  <h3>Gorra</h3>
  <img class="boton-eliminar-producto" src="img/delete.png">
  `;
  cartContainer.appendChild(d5);
  total += 700;
  montoTotal.textContent = `${total.toString()}`;

  nItems.classList.add("numItems");
  nItems.textContent = ++itemsCarrito;
  alert("Producto agregado al carrito");
});

btnP6.addEventListener("click", () => {
  const d6 = document.createElement("div");
  d6.classList.add("productReview");
  d6.innerHTML = `
  <img src="img/botas.jpg">
  <p>2300</p>
  <h3>Botas</h3>
  <img class="boton-eliminar-producto" src="img/delete.png">
  `;
  cartContainer.appendChild(d6);
  total += 2300;
  montoTotal.textContent = `${total.toString()}`;

  nItems.classList.add("numItems");
  nItems.textContent = ++itemsCarrito;
  alert("Producto agregado al carrito");
});
