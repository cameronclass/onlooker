// === SWIPER =============================================

const swiper = new Swiper('.fifteen__sensor_slider', {
  // direction: 'vertical',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  // autoHeight: true,
  speed: 600,
  // If we need pagination
  pagination: {
    el: '.fifteen__sensor_pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.fifteen__sensor_button_prev',
    prevEl: '.fifteen__sensor_button_next',
  },
});

