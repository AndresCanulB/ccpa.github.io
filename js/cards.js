function getVmin(value) {
  return (Math.min(window.innerWidth, window.innerHeight) / 100) * value;
}

new Swiper(".main__swiper", {
  wrapperClass: 'swiper__wrapper',
  slideClass: 'swiper__slide',
  spaceBetween: getVmin(5),
  speed: 5000,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: getVmin(5),
    },
    700: {
      slidesPerView: 4,
      spaceBetween: getVmin(5),
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: getVmin(5),
    }
  }
});