window.addEventListener("DOMContentLoaded", (event) => {
  
  /* Modal */
  const modalOpen = document.querySelectorAll(".js-modal-open");
  const modalContent = document.querySelectorAll(".js-modal-content");

  if (modalOpen) {
    modalOpen.forEach((element) => {
      let currentBtn = element.dataset.modalBtn;

      element.addEventListener("click", () => {
        modalContent.forEach((element) => {
          let currentModal = element.dataset.modalContent;

          let overlay = element.querySelector(":scope .overlay");
          let modalClose = element.querySelector(":scope .btn-close");

          document.documentElement.style.overflowY = "hidden";

          if (overlay)
            overlay.onclick = () => {
              element.classList.remove("active");
              document.documentElement.style.overflowY = "auto";
            };

          if (modalClose)
            modalClose.onclick = () => {
              element.classList.remove("active");
              document.documentElement.style.overflowY = "auto";
            };

          if (currentBtn == currentModal) {
            element.classList.add("active");
          }

          document.addEventListener('keyup', (event) => {
            modalContent.forEach((item) => {
            if (event.code === 'Escape') {
              item.classList.remove("active");
              document.documentElement.style.overflowY = "auto";
            }
          });
          });
        });
      });
      
    });
  }




    // == Custom cursor ==========
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  });

  document.addEventListener("mouseover", function (e) {
    if (e.target.closest("button, a")) {
      cursor.classList.add("_over");
    }
  });

  document.addEventListener("mouseout", function (e) {
    if (e.target.closest("button, a")) {
      cursor.classList.remove("_over");
    }
  });

  document.addEventListener("mousedown", function (e) {
    if (e.target.closest("button, a")) {
      cursor.classList.add("click");
      cursor.classList.remove("_over");
      setTimeout(function () {
        cursor.classList.remove("click");
        cursor.classList.add("_over");
      }, 500);
    }
  });


  // == Add class touch if browser is mobile ==============

  let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

  function addTouchClass() {
  	if (isMobile.any()) document.documentElement.classList.add('touch');
  }
  addTouchClass();

});
