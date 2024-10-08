document.addEventListener("DOMContentLoaded", (event) => {
  menu();
  navTab();

  const partnerSlider = new Swiper(".partner__logos", {
    slidesPerView: 3,
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 7,
      },
    },
  });

  const accordions = document?.querySelectorAll(".accordion");
  if (accordions) {
    accordions.forEach((accordion) => {
      new Accordion(accordion, {
        duration: 400,
        openOnInit: [0],
      });
    });
  }
});

function menu() {
  const menuWrappers = document?.querySelectorAll(".nav-menu");
  if (menuWrappers) {
    menuWrappers?.forEach((wrapper) => {
      const toggler = wrapper?.querySelector(".nav__toggler");
      toggler?.addEventListener("click", (event) => {
        wrapper.classList.toggle("active");
      });
    });
  }
}

function navTab() {
  const activeClass = "btn--primary";
  const tabWrapper = document.querySelectorAll("[data-tab]");
  if (tabWrapper) {
    tabWrapper.forEach((tab) => {
      const tabButtons = tab?.querySelectorAll("[data-tab-btn]");
      const tabContents = tab?.querySelectorAll("[data-tab-content]");

      tabButtons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          const target = btn.getAttribute("data-target");
          const targetContent = document.querySelector(target);

          collapseAllTab();
          makeActiveTab(btn, targetContent);
        });
      });

      const collapseAllTab = () => {
        tabButtons.forEach((btn) => {
          btn.classList.remove(activeClass);
        });
        tabContents.forEach((content) => {
          content.setAttribute("aria-expanded", "false");
        });
      };

      const makeActiveTab = (btn, content) => {
        btn.classList.add(activeClass);
        content.setAttribute("aria-expanded", "true");
      };
    });
  }
}
