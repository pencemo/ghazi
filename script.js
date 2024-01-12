var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  // effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    },
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
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
  duration: 900,
  delay: 300,
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
setInterval(prev, 6000);

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









const images =[
  Flooring={
      img1 : "./images/img-1.jpg",
      img2 : "./images/img-1.jpg",
      img3 : "./images/img-1.jpg",
      img4 : "./images/img-1.jpg",
      img5 : "./images/img-1.jpg",
  },
  Furniture={
      img1 : "./images/img-2.jpg",
      img2 : "./images/img-2.jpg",
      img3 : "./images/img-2.jpg",
      img4 : "./images/img-2.jpg",
      img5 : "./images/img-2.jpg",
  },
  Curtains={
      img1 : "./images/img-3.jpg",
      img2 : "./images/img-3.jpg",
      img3 : "./images/img-3.jpg",
      img4 : "./images/img-3.jpg",
      img5 : "./images/img-3.jpg",
  },
  Wallpaper={
      img1 : "./images/img-4.jpg",
      img2 : "./images/img-4.jpg",
      img3 : "./images/img-4.jpg",
      img4 : "./images/img-4.jpg",
      img5 : "./images/img-4.jpg",
  },
];


var close_btn=document.querySelector(".close-img");
var model_bg=document.querySelector(".model-background");


close_btn.addEventListener("click", model_close);
model_bg.addEventListener("click", model_close)

document.querySelector(".open-btn-1").addEventListener("click", model_open_1);

function model_open_1() {
  document.querySelector(".model-img-1").src=Flooring.img1
  document.querySelector(".model-img-2").src=Flooring.img2
  document.querySelector(".model-img-3").src=Flooring.img3
  document.querySelector(".model-img-4").src=Flooring.img4
  document.querySelector(".model-img-5").src=Flooring.img5
  document.querySelector(".model").classList.add("model-active")
}

document.querySelector(".open-btn-2").addEventListener("click", model_open_2);

function model_open_2() {
  document.querySelector(".model-img-1").src=Furniture.img1
  document.querySelector(".model-img-2").src=Furniture.img2
  document.querySelector(".model-img-3").src=Furniture.img3
  document.querySelector(".model-img-4").src=Furniture.img4
  document.querySelector(".model-img-5").src=Furniture.img5
  document.querySelector(".model").classList.add("model-active")
}

document.querySelector(".open-btn-3").addEventListener("click", model_open_3);

function model_open_3() {
  document.querySelector(".model-img-1").src=Curtains.img1
  document.querySelector(".model-img-2").src=Curtains.img2
  document.querySelector(".model-img-3").src=Curtains.img3
  document.querySelector(".model-img-4").src=Curtains.img4
  document.querySelector(".model-img-5").src=Curtains.img5
  document.querySelector(".model").classList.add("model-active")
}

document.querySelector(".open-btn-4").addEventListener("click", model_open_4);

function model_open_4() {
  document.querySelector(".model-img-1").src=Wallpaper.img1
  document.querySelector(".model-img-2").src=Wallpaper.img2
  document.querySelector(".model-img-3").src=Wallpaper.img3
  document.querySelector(".model-img-4").src=Wallpaper.img4
  document.querySelector(".model-img-5").src=Wallpaper.img5
  document.querySelector(".model").classList.add("model-active")
}





function model_close() {
  document.querySelector(".model").classList.remove("model-active")
}