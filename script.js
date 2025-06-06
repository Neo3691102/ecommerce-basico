const iconoMenu = document.getElementById("iconomenu");
const closeMenuIzq = document.getElementById("x-circle");
const menuIzquierdo = document.getElementById("menuIzquierdo");

const nItems = document.getElementById("numeroitems");
const iconoCarrito = document.getElementById("iconoCarrito"); 
const closeMenu = document.getElementById("closemenu");// boton carrito
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

arrayCarrito = [];
arrayProductos = [
  {
    id: 1,
    nombre: "Jersey Mexico",
    precio: 1000,
    src: "img/mx.png"
  },
  {
    id: 2,
    nombre: "Chamarra",
    precio: 2000,
    src: "img/Chamarra.jpg"
  },
  {
    id: 3,
    nombre: "Tennis",
    precio: 3000,
    src: "img/tenis.jpg"
  },
  {
    id: 4,
    nombre: "Jersey Alemania",
    precio: 1000,
    src: "img/germany.jpg"
  },
  {
    id: 5,
    nombre: "Gorra",
    precio: 700,
    src: "img/gorra.jpg"
  },
  {
    id: 6,
    nombre: "Botas",
    precio: 2300,
    src: "img/botas.jpg"
  }
];

iconoMenu.addEventListener("click", () => {
  menuIzquierdo.classList.add("show");
});

closeMenuIzq.addEventListener("click", () => {
  menuIzquierdo.classList.remove("show");
})

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

const crearElementoDivCarrito = (idItem, div) => {
  const { nombre, precio, src } = arrayProductos.find(({ id }) => id === idItem);

  console.log(nombre);

  div.innerHTML = `
    <img src="${src}">
    <p>${precio}</p>
    <h3>${nombre}</h3>
    <img class="boton-eliminar-producto" src="img/delete.png">
  `;

  cartContainer.appendChild(div);
  total += precio;
  montoTotal.textContent = `${total}`;

  nItems.classList.add("numItems");
  nItems.textContent = ++itemsCarrito;

  const producto = { nombre, precio };
  arrayCarrito.push(producto);

  localStorage.setItem("producto", JSON.stringify(arrayCarrito));
}

btnP1.addEventListener("click", () => {
  const d1 = document.createElement("div");
  d1.classList.add("productReview");

  const idItm = 1;
  crearElementoDivCarrito(idItm, d1);
  

  alert("Producto agregado al carrito");
});


btnP2.addEventListener("click", () => {
  const d2 = document.createElement("div");
  d2.classList.add("productReview");

 const idItm = 2;
  crearElementoDivCarrito(idItm, d2);

  alert("Producto agregado al carrito");
});

btnP3.addEventListener("click", () => {
  const d3 = document.createElement("div");
  d3.classList.add("productReview");
  
  const idItm = 3;
  crearElementoDivCarrito(idItm, d3);
  
  alert("Producto agregado al carrito");
});

btnP4.addEventListener("click", () => {
  const d4 = document.createElement("div");
  d4.classList.add("productReview");
  
  const idItm = 4;
  crearElementoDivCarrito(idItm, d4);

  alert("Producto agregado al carrito");
});

btnP5.addEventListener("click", () => {
  const d5 = document.createElement("div");
  d5.classList.add("productReview");

  const idItm = 5;
  crearElementoDivCarrito(idItm, d5);

  alert("Producto agregado al carrito");
});

btnP6.addEventListener("click", () => {
  const d6 = document.createElement("div");
  d6.classList.add("productReview");

  const idItm = 6;
  crearElementoDivCarrito(idItm, d6);

  alert("Producto agregado al carrito");
});
