let hide = true;
let menu = document.querySelector('.menu');
let body = document.querySelector('body');
let section2 = document.querySelector('.section-2');
let scrollTopBtn = document.querySelector('.scroll-top');

let toggleMenu = () => {
  if (hide) {
    menu.style.transform = 'translate(0%)';
    body.style.overflow = 'hidden';
  } else {
    menu.style.transform = 'translate(-100%)';
    body.style.overflow = 'scroll';
  }
  hide = !hide;
}

let navigate = (location) => {
  toggleMenu();
  window.location.href = `/${location}`
}

if (window.innerWidth <= 800) {
  scrollTopBtn.style.opacity = '0';
};


window.onscroll = function (oEvent) {

  let y = window.pageYOffset;

  const clientY = section2.getBoundingClientRect().y

  const windowHeight = window.innerHeight;

  if (clientY < windowHeight) {
    scrollTopBtn.style.opacity = '1';
  }
  if (clientY >= windowHeight) {
    scrollTopBtn.style.opacity = '0';
  }
}


$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

});