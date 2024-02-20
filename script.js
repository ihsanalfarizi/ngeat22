
$(document).ready(function() {
  
    $('#toggleMenu').click(function() {
      $('#myLinks').toggleClass('hidden');
    });
  });


  document.getElementById('menu-toggle').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
  });