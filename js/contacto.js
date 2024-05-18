document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const telefono = document.getElementById('telefono').value;
      const mensaje = document.getElementById('mensaje').value;
      const servicio = document.getElementById('servicio').value;
      const terminos = document.getElementById('terminos').checked;
  
      if (!nombre || !email || !telefono || !mensaje || !servicio || !terminos) {
        alert('Por favor, complete todos los campos obligatorios.');
        event.preventDefault();
      }
    });
  });
  