/* NAVBAR RESPONSIVE*/ 
const navLinks = document.querySelector('.nav__links');
const navIcons = document.querySelector('.nav__icons');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
  navLinks.classList.add('nav__visible');
  navIcons.classList.add('nav__visible');
  abrir.style.display = 'none';
});

cerrar.addEventListener('click', () => {
  navLinks.classList.remove('nav__visible');
  navIcons.classList.remove('nav__visible');
  abrir.style.display = 'block';
});

/*ANIMACION TEXTOS NOSOTROS*/

const texts = document.querySelectorAll('.text__animation');

window.addEventListener('scroll', checkTexts);

function checkTexts(){
  const triggerTexts = window.innerHeight / 5 * 4

  texts.forEach(text => {
    const textTop = text.getBoundingClientRect().top

    if(textTop < triggerTexts){
      text.classList.add('show')
    } else {
      text.classList.remove('show')
    }
  })
}