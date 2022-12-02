let newSlider = new Swiper(".twenty-five__slider_block", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".twenty-five .swiper-button-next",
    prevEl: ".twenty-five .swiper-button-prev",
  },
  pagination: {
    el: ".twenty-five .swiper-pagination",
    clickable: true,
  },
});
