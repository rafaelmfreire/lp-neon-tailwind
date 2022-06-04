import "./style.css";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.3,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    610: {
      slidesPerView: 1.75,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2.3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
