function getVmin(value) {
  return (Math.min(window.innerWidth, window.innerHeight) / 100) * value;
}

new Swiper(".main__swiper", {
  wrapperClass: 'swiper__wrapper',
  slideClass: 'swiper__slide',
  spaceBetween: getVmin(5),
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper__pagination",
    clickable: true,
    dynamicBullets: false,
  },
  navigation: {
    prevEl: ".navegation__prev",
    nextEl: ".navegation__next",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: getVmin(100),
    },
    700: {
      slidesPerView: 2,
      spaceBetween: getVmin(5),
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: getVmin(5),
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: getVmin(5),
    },
    2000: {
      slidesPerView: 5,
      spaceBetween: getVmin(5),
    }
  },
});