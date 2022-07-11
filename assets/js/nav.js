const hamburgerMenu = document.querySelector('#hamburger-menu')
const mobileMenu = document.querySelector('#mobile-menu')

hamburgerMenu.addEventListener('click', ()=>{
  mobileMenu.classList.toggle('hidden')
  hamburgerMenu.classList.toggle('open')
})



$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);
      
      if (scrollTop >= 100) {
        $('#global-nav').addClass('scrolled-nav');
      } else if (scrollTop < 100) {
        $('#global-nav').removeClass('scrolled-nav');
      } 
      
    }); 
    
  });