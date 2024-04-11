let burgerIcon = document.querySelector('.burger__icon');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');
burgerIcon.addEventListener('click', function(){
  burgerIcon.classList.toggle('active');
  menu.classList.toggle('active');
    body.classList.toggle('lock');
})