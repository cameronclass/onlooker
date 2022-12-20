window.addEventListener("DOMContentLoaded", (event) => {
  /* Tabs */
  function tabs() {
    const tabs = document.querySelectorAll("[data-tabs]");
    let tabsActiveHash = [];

    if (tabs.length > 0) {
      tabs.forEach((tabsBlock, index) => {
        tabsBlock.classList.add("_tab-init");
        tabsBlock.setAttribute("data-tabs-index", index);
        tabsBlock.addEventListener("click", setTabsAction);
        initTabs(tabsBlock);
      });
    }
    // Установка позиций заголовков
    function setTitlePosition(tabsMediaArray, matchMedia) {
      tabsMediaArray.forEach((tabsMediaItem) => {
        tabsMediaItem = tabsMediaItem.item;
        let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
        let tabsTitleItems =
          tabsMediaItem.querySelectorAll("[data-tabs-title]");
        let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
        let tabsContentItems =
          tabsMediaItem.querySelectorAll("[data-tabs-item]");
        tabsTitleItems = Array.from(tabsTitleItems).filter(
          (item) => item.closest("[data-tabs]") === tabsMediaItem
        );
        tabsContentItems = Array.from(tabsContentItems).filter(
          (item) => item.closest("[data-tabs]") === tabsMediaItem
        );
        tabsContentItems.forEach((tabsContentItem, index) => {
          if (matchMedia.matches) {
            tabsContent.append(tabsTitleItems[index]);
            tabsContent.append(tabsContentItem);
            tabsMediaItem.classList.add("_tab-spoller");
          } else {
            tabsTitles.append(tabsTitleItems[index]);
            tabsMediaItem.classList.remove("_tab-spoller");
          }
        });
      });
    }
    // Работа с контентом
    function initTabs(tabsBlock) {
      let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
      let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
      const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
      const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

      if (tabsActiveHashBlock) {
        const tabsActiveTitle = tabsBlock.querySelector(
          "[data-tabs-titles]>._tab-active"
        );
        tabsActiveTitle
          ? tabsActiveTitle.classList.remove("_tab-active")
          : null;
      }
      if (tabsContent.length) {
        tabsContent = Array.from(tabsContent).filter(
          (item) => item.closest("[data-tabs]") === tabsBlock
        );
        tabsTitles = Array.from(tabsTitles).filter(
          (item) => item.closest("[data-tabs]") === tabsBlock
        );
        tabsContent.forEach((tabsContentItem, index) => {
          tabsTitles[index].setAttribute("data-tabs-title", "");
          tabsContentItem.setAttribute("data-tabs-item", "");

          if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
            tabsTitles[index].classList.add("_tab-active");
          }
          tabsContentItem.hidden =
            !tabsTitles[index].classList.contains("_tab-active");
        });
      }
    }
    function setTabsStatus(tabsBlock) {
      let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
      let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
      const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
      function isTabsAnamate(tabsBlock) {
        if (tabsBlock.hasAttribute("data-tabs-animate")) {
          return tabsBlock.dataset.tabsAnimate > 0
            ? Number(tabsBlock.dataset.tabsAnimate)
            : 500;
        }
      }
      const tabsBlockAnimate = isTabsAnamate(tabsBlock);
      if (tabsContent.length > 0) {
        const isHash = tabsBlock.hasAttribute("data-tabs-hash");
        tabsContent = Array.from(tabsContent).filter(
          (item) => item.closest("[data-tabs]") === tabsBlock
        );
        tabsTitles = Array.from(tabsTitles).filter(
          (item) => item.closest("[data-tabs]") === tabsBlock
        );
        tabsContent.forEach((tabsContentItem, index) => {
          if (tabsTitles[index].classList.contains("_tab-active")) {
            if (tabsBlockAnimate) {
              _slideDown(tabsContentItem, tabsBlockAnimate);
            } else {
              tabsContentItem.hidden = false;
            }
            if (isHash && !tabsContentItem.closest(".popup")) {
              setHash(`tab-${tabsBlockIndex}-${index}`);
            }
          } else {
            if (tabsBlockAnimate) {
              _slideUp(tabsContentItem, tabsBlockAnimate);
            } else {
              tabsContentItem.hidden = true;
            }
          }
        });
      }
    }
    function setTabsAction(e) {
      const el = e.target;
      if (el.closest("[data-tabs-title]")) {
        const tabTitle = el.closest("[data-tabs-title]");
        const tabsBlock = tabTitle.closest("[data-tabs]");
        if (
          !tabTitle.classList.contains("_tab-active") &&
          !tabsBlock.querySelector("._slide")
        ) {
          let tabActiveTitle = tabsBlock.querySelectorAll(
            "[data-tabs-title]._tab-active"
          );
          tabActiveTitle.length
            ? (tabActiveTitle = Array.from(tabActiveTitle).filter(
                (item) => item.closest("[data-tabs]") === tabsBlock
              ))
            : null;
          tabActiveTitle.length
            ? tabActiveTitle[0].classList.remove("_tab-active")
            : null;
          tabTitle.classList.add("_tab-active");
          setTabsStatus(tabsBlock);
        }
        e.preventDefault();
      }
    }
  }
  tabs();

  /* Hamburger */
  const hamburger = document.querySelector(".js-hamburger");
  const header = document.querySelector(".header");
  const body = document.querySelector("html");
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      header.classList.toggle("_active");
      body.classList.toggle("no-scroll");
    });
  }

  /* Accordion */
  new Accordion(".accordion-container");

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
            };

          if (modalClose)
            modalClose.onclick = () => {
              element.classList.remove("active");
              document.documentElement.style.overflowY = "auto";
            };

          if (currentBtn == currentModal) {
            element.classList.add("active");
          }
        });
      });
    });
  }

  const jsTableBtn = document.querySelector(".js-table-btn");
  const eleventhAbout = document.querySelector(".eleventh__about");
  const eleventhMore = document.querySelector(".eleventh__more");
  const eleventh__heading_info_text_1 = document.querySelector(
    ".eleventh__heading_info_text_1"
  );
  const eleventh__heading_info_text_2 = document.querySelector(
    ".eleventh__heading_info_text_2"
  );

  if (jsTableBtn) {
    jsTableBtn.addEventListener("change", (e) => {
      if (e.target.checked === true) {
        eleventhMore.classList.remove("d-none");
        eleventhAbout.classList.add("d-none");

        eleventh__heading_info_text_1.classList.remove("_active");
        eleventh__heading_info_text_2.classList.add("_active");
      } else {
        eleventhMore.classList.add("d-none");
        eleventhAbout.classList.remove("d-none");

        eleventh__heading_info_text_1.classList.add("_active");
        eleventh__heading_info_text_2.classList.remove("_active");
      }
    });
  }

  /* Compare */
  const element = document.getElementById("image-compare");
  const options = {
    // UI Theme Defaults

    controlColor: "#06b0a1",
    controlShadow: false,
    addCircle: true,
    addCircleBlur: true,

    // Label Defaults

    showLabels: false,
    labelOptions: {
      before: "Before",
      after: "After",
      onHover: false,
    },

    // Smoothing

    smoothing: true,
    smoothingAmount: 100,

    // Other options

    hoverStart: false,
    verticalMode: false,
    startingPoint: 50,
    fluidMode: true,
  };

  // Add your options object as the second argument
  const viewer = new ImageCompare(element, options).mount();

  // == CLONE FOOTER TO HEADER (on mobile menu) ==========
  const footer = document.querySelector(".footer");
  const footerClone = footer.cloneNode(true);
  const header__menu = document.querySelector(".header__menu");
  header__menu.append(footerClone);



  // OnScroll event handler
  const onScroll = () => {
    // Get scroll value
    const scroll = document.documentElement.scrollTop;

    // If scroll value is more than 0 - add class
    if (scroll > 5) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  // Use the function
  window.addEventListener("scroll", onScroll);
});

/* Animation */
AOS.init();

hljs.initHighlightingOnLoad();

window.addEventListener("scroll", () => {
  AOS.refresh();
});

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
