/*------------------NAVBAR RESPONSIVE-----------------*/ 

const navMenu = document.querySelector('.nav__menu');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
  navMenu.classList.remove('nav__oculto');
  navMenu.classList.add('nav__visible');
  cerrar.style.display = 'block';
  abrir.style.display = 'none';
});

cerrar.addEventListener('click', () => {
  navMenu.classList.remove('nav__visible');
  navMenu.classList.add('nav__oculto');
  abrir.style.display = 'block';
  cerrar.style.display = 'none';
});

function navResponsive() {
  const ventanaAncho = window.innerWidth;
  if (ventanaAncho <= 578) {
    abrir.style.display = 'block';
    cerrar.style.display = 'none';
  } else {
    abrir.style.display = 'none';
    cerrar.style.display = 'none';
  }
  window.addEventListener('resize', navResponsive);
}

navResponsive();


/*--------------------ANIMACION TEXTOS NOSOTROS----------------------*/

const textos = document.querySelectorAll('.text__animation');

window.addEventListener('scroll', checkTexts);

function checkTexts(){
  const entradaTexto = window.innerHeight / 5 * 4

  textos.forEach(text => {
    const textTop = text.getBoundingClientRect().top

    if(textTop < entradaTexto){
      text.classList.add('show')
    } else {
      text.classList.remove('show')
    }
  })
}


/*-------------------NAVEGADOR SECCION PRODUCTOS------------------------*/

  const botones = document.querySelectorAll('.card__button');
  botones.forEach(function(boton) {
      boton.addEventListener('click', function() {
          const id = this.dataset.target;
          mostrarArticulo(id);
      });
  });

function mostrarArticulo(id) {
  const productos = document.querySelectorAll('.producto');
  productos.forEach(function(producto) {
      producto.style.display = "none";
  });

  const productoVisible = document.getElementById(id);
  if (productoVisible) {
    productoVisible.style.display = "flex";
  }
}

/*-------CAROUSEL INDEX PRODUCTOS-----------*/

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.left');
const nextButton = document.querySelector('.right');

prevButton.addEventListener('click', function () {
  carousel.scrollBy({
    left: -300, 
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', function () {
  carousel.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});


