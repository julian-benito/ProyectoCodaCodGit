// carrito.js
document.addEventListener('DOMContentLoaded', function () {
  const botonesAgregar = document.querySelectorAll('.agregar-carrito');
  const carritoLista = document.getElementById('carrito-lista');
  const carritoTotal = document.getElementById('carrito-total h3');
  const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
  const realizarPedidoBtn = document.getElementById('realizar-pedido');

  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  function actualizarCarrito() {
    carritoLista.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${item.nombre} - ${item.cantidad} x $${item.precio} 
        <button class="restar-producto" data-nombre="${item.nombre}">-</button>
        <button class="sumar-producto" data-nombre="${item.nombre}">+</button>
      `;
      carritoLista.appendChild(li);
      total += item.precio * item.cantidad;
    });

    carritoTotal.textContent = `Total: $${total}`;
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function agregarProducto(nombre, precio, cantidad) {
    const productoExistente = carrito.find(item => item.nombre === nombre);

    if (productoExistente) {
      productoExistente.cantidad += cantidad;
    } else {
      carrito.push({ nombre, precio, cantidad });
    }

    actualizarCarrito();
  }

  function modificarCantidad(nombre, operacion) {
    const producto = carrito.find(item => item.nombre === nombre);

    if (producto) {
      if (operacion === 'sumar') {
        producto.cantidad++;
      } else if (operacion === 'restar') {
        producto.cantidad--;
        if (producto.cantidad === 0) {
          carrito = carrito.filter(item => item.nombre !== nombre);
        }
      }
      actualizarCarrito();
    }
  }

  botonesAgregar.forEach(boton => {
    boton.addEventListener('click', function () {
      const nombre = this.getAttribute('data-nombre');
      const precio = parseInt(this.getAttribute('data-precio'));
      const cantidadInput = this.previousElementSibling;
      const cantidad = parseInt(cantidadInput.value);
      agregarProducto(nombre, precio, cantidad);
    });
  });

  carritoLista.addEventListener('click', function (e) {
    if (e.target.classList.contains('restar-producto')) {
      const nombre = e.target.getAttribute('data-nombre');
      modificarCantidad(nombre, 'restar');
    }
    if (e.target.classList.contains('sumar-producto')) {
      const nombre = e.target.getAttribute('data-nombre');
      modificarCantidad(nombre, 'sumar');
    }
  });

  vaciarCarritoBtn.addEventListener('click', function () {
    carrito = [];
    actualizarCarrito();
  });

  realizarPedidoBtn.addEventListener('click', function () {
    if (carrito.length === 0) {
      alert('El carrito está vacío.');
    } else {
      alert('Pedido realizado con éxito.');
      carrito = [];
      actualizarCarrito();
    }
  });

  actualizarCarrito();
});
