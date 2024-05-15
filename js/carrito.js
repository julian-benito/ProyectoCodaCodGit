// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    const producto = {
      nombre: nombre,
      precio: precio
    };
  
    let carrito = localStorage.getItem('carrito');
  
    if (!carrito) {
      carrito = [];
    } else {
      carrito = JSON.parse(carrito);
    }
  
    carrito.push(producto);
  
    localStorage.setItem('carrito', JSON.stringify(carrito));
  
    // Actualizar la lista de productos en el carrito
    mostrarProductosCarrito();
  
    alert(`"${nombre}" se ha añadido al carrito.`);
}

// Mostrar los productos en el carrito
function mostrarProductosCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    carritoLista.innerHTML = ''; // Limpiar la lista antes de volver a mostrar
  
    let carrito = localStorage.getItem('carrito');
  
    if (carrito) {
      carrito = JSON.parse(carrito);
  
      // Recorrer el carrito y agregar cada producto a la lista
      carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre}: $${producto.precio}`;
        carritoLista.appendChild(li);
      });
    }
}

// Llamar a la función para mostrar los productos del carrito al cargar la página
mostrarProductosCarrito();

const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', () => {
        const nombre = boton.dataset.nombre;
        const precio = boton.dataset.precio;
        agregarAlCarrito(nombre, precio);
    });
});
