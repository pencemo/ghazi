var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// scroll

$(document).ready(function (){


  $(window).on('scroll', function(){
      if ($(window).scrollTop()) {
      $(".nav-bar").addClass('nav-scroll');
      }else{
      $(".nav-bar").removeClass('nav-scroll');
      }
  });

});



// window.addEventListener("scroll", function(){
//   document.querySelector(".nav-bar").classList.toggle("nav-scroll")
// });

// navbar toggle

var bg = document.querySelector(".backgrund")
var close = document.querySelector(".close")
var links = document.querySelector(".main-li")

bg.addEventListener("click", nav_toggle);
close.addEventListener("click", nav_toggle);
links.addEventListener("click", nav_toggle);

function nav_toggle() {
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".backgrund").classList.toggle("active");
  document.querySelector(".nav-links-ul").classList.toggle("nav-act");
}



// *************************

AOS.init({
  duration: 1000,
});

// slide animation lading

let slides = document.querySelectorAll(".slide");
let index = 0;

function next() {
  slides[index].classList.remove("act");
  index = (index + 1) % slides.length;
  slides[index].classList.add("act");
}

function prev() {
  slides[index].classList.remove("act");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("act");
}
setInterval(next, 6000);

// ******************

window.addEventListener("load", () => {
  const loder = document.querySelector(".loader-div");

  loder.classList.add("loder-hide");

  loder.addEventListener("transitionend", () => {
    document.body.removeChild(loader-div)
  });
});

 


// google translat

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    autoDisplay: false,
    includedLanguages: 'en,fr,ar,ur'
  }, 'google_translate_element');
}


