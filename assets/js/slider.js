function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.fifteen__sensor_slider')) { // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.fifteen__sensor_slider', {
        // direction: 'vertical',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 50,
        // autoHeight: true,
        speed: 600,
        // If we need pagination
        pagination: {
          el: '.fifteen__sensor_pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.fifteen__sensor_button_prev',
          prevEl: '.fifteen__sensor_button_next',
        },
    });
  }
  
  if (document.querySelector('.twenty-five__slider_block')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper(".twenty-five__slider_block", {// Указываем скласс нужного слайдера
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 600,
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

  }

  // === SECTION 28 =====================
  if (document.querySelector('.twenty-seven__slider_block-one')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper(".twenty-seven__slider_block-one", {// Указываем скласс нужного слайдера
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 600,
        loop: true,
        loopAdditionalSlides: 5,
			  preloadImages: false,
			  parallax:true,
        navigation: {
          nextEl: ".twenty-seven__slider_block-one .swiper-button-next",
          prevEl: ".twenty-seven__slider_block-one .swiper-button-prev",
        },
        pagination: {
          el: ".twenty-seven__slider_block-one .swiper-pagination",
          clickable: true,
        },
      });

  }

  if (document.querySelector('.twenty-seven__slider_block-two')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper(".twenty-seven__slider_block-two", {// Указываем скласс нужного слайдера
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 600,
        loop: true,
        loopAdditionalSlides: 5,
			  preloadImages: false,
			  parallax:true,
        navigation: {
          nextEl: ".twenty-seven__slider_block-two .swiper-button-next",
          prevEl: ".twenty-seven__slider_block-two .swiper-button-prev",
        },
        pagination: {
          el: ".twenty-seven__slider_block-two .swiper-pagination",
          clickable: true,
        },
      });

  }


}
initSliders();

// let newSlider = new Swiper(".twenty-five__slider_block", {
//   slidesPerView: 5,
//   spaceBetween: 30,
//   speed: 600,
//   loop: true,
//   navigation: {
//     nextEl: ".twenty-five .swiper-button-next",
//     prevEl: ".twenty-five .swiper-button-prev",
//   },
//   pagination: {
//     el: ".twenty-five .swiper-pagination",
//     clickable: true,
//   },
// });