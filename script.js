var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
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
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
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
      img2 : "./images/img-2.jpg",
      img3 : "./images/img-3.jpg",
      img4 : "./images/img-10.jpg",
      img5 : "./images/img-12.jpg",
      img6 : "./images/img-11.jpg",
      img7 : "./images/img-7.jpg",
  },
  Furniture={
      img1 : "./images/123.png",
      img2 : "./images/img-41.jpg",
      img3 : "./images/landbgmain.jpg",
      img4 : "./images/627.png",
      img5 : "./images/landmarks-modern-city.jpg",
      img6 : "./images/img-29.jpg",
      img7 : "./images/img-30.jpg",
  },
  Curtains={
      img1 : "./images/img-20.jpg",
      img2 : "./images/img-21.jpg",
      img3 : "./images/img-22.jpg",
      img4 : "./images/img-23.jpg",
      img5 : "./images/img-24.jpg",
      img6 : "./images/img-25.jpg",
      img7 : "./images/img-26.jpg",
  },
  Wallpaper={
      img1 : "./images/img-31.jpg",
      img2 : "./images/img-32.jpg",
      img3 : "./images/img-33.jpg",
      img4 : "./images/img-34.webp",
      img5 : "./images/img-35.webp",
      img6 : "./images/img-36.webp",
      img7 : "./images/img-37.webp",
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
  document.querySelector(".model-img-6").src=Flooring.img6
  document.querySelector(".model-img-7").src=Flooring.img7
  document.querySelector(".model").classList.add("model-active")
}

document.querySelector(".open-btn-2").addEventListener("click", model_open_2);

function model_open_2() {
  document.querySelector(".model-img-1").src=Furniture.img1
  document.querySelector(".model-img-2").src=Furniture.img2
  document.querySelector(".model-img-3").src=Furniture.img3
  document.querySelector(".model-img-4").src=Furniture.img4
  document.querySelector(".model-img-5").src=Furniture.img5
  document.querySelector(".model-img-6").src=Furniture.img6
  document.querySelector(".model-img-7").src=Furniture.img7
  document.querySelector(".model").classList.add("model-active")
}

document.querySelector(".open-btn-3").addEventListener("click", model_open_3);

function model_open_3() {
  document.querySelector(".model-img-1").src=Curtains.img1
  document.querySelector(".model-img-2").src=Curtains.img2
  document.querySelector(".model-img-3").src=Curtains.img3
  document.querySelector(".model-img-4").src=Curtains.img4
  document.querySelector(".model-img-5").src=Curtains.img5
  document.querySelector(".model-img-6").src=Curtains.img6
  document.querySelector(".model-img-7").src=Curtains.img7
  document.querySelector(".model").classList.add("model-active")
}

document.querySelector(".open-btn-4").addEventListener("click", model_open_4);

function model_open_4() {
  document.querySelector(".model-img-1").src=Wallpaper.img1
  document.querySelector(".model-img-2").src=Wallpaper.img2
  document.querySelector(".model-img-3").src=Wallpaper.img3
  document.querySelector(".model-img-4").src=Wallpaper.img4
  document.querySelector(".model-img-5").src=Wallpaper.img5
  document.querySelector(".model-img-6").src=Wallpaper.img6
  document.querySelector(".model-img-7").src=Wallpaper.img7
  document.querySelector(".model").classList.add("model-active")
}





function model_close() {
  document.querySelector(".model").classList.remove("model-active")
}