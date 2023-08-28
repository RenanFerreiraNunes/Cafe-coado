window.addEventListener('scroll', function(){
  var nav = document.querySelector("header");
  nav.classList.toggle('sticky', window.scrollY > 600);
})