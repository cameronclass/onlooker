function initSliders() {
  if (document.querySelector(".first__slider_block")) {
    new Swiper(".first__slider_block", {
      /* loop: true, */
      slidesPerView: 1,
      spaceBetween: 30,
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }

  if (document.querySelector(".fifteen__sensor_slider_block")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".fifteen__sensor_slider_block", {
      // direction: 'vertical',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 50,
      // autoHeight: true,
      speed: 600,
      navigation: {
        nextEl: ".fifteen__sensor_slider .swiper-button-next",
        prevEl: ".fifteen__sensor_slider .swiper-button-prev",
      },
      pagination: {
        el: ".fifteen__sensor_slider .swiper-pagination",
        clickable: true,
      },
    });
  }

  if (document.querySelector(".twenty-five__slider_block")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".twenty-five__slider_block", {
      // Указываем скласс нужного слайдера
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
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });
  }

  if (document.querySelector(".twenty-seven__slider-one_block")) {
    new Swiper(".twenty-seven__slider-one_block", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 600,
      loop: true,
      loopAdditionalSlides: 5,
      preloadImages: false,
      parallax: true,
      navigation: {
        nextEl: ".twenty-seven__slider-one .swiper-button-next",
        prevEl: ".twenty-seven__slider-one .swiper-button-prev",
      },
      pagination: {
        el: ".twenty-seven__slider-one .swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
  }

  if (document.querySelector(".twenty-seven__slider-two_block")) {
    new Swiper(".twenty-seven__slider-two_block", {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 600,
      loop: true,
      loopAdditionalSlides: 5,
      preloadImages: false,
      parallax: true,
      navigation: {
        nextEl: ".twenty-seven__slider-two .swiper-button-next",
        prevEl: ".twenty-seven__slider-two .swiper-button-prev",
      },
      pagination: {
        el: ".twenty-seven__slider-two .swiper-pagination",
        clickable: true,
      },
    });
  }

  if (document.querySelector(".twenty-seven__slider-three_block")) {
    new Swiper(".twenty-seven__slider-three_block", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 600,
      loop: true,
      loopAdditionalSlides: 5,
      preloadImages: false,
      parallax: true,
      navigation: {
        nextEl: ".twenty-seven__slider-three .swiper-button-next",
        prevEl: ".twenty-seven__slider-three .swiper-button-prev",
      },
      pagination: {
        el: ".twenty-seven__slider-three .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
  }
}
initSliders();
