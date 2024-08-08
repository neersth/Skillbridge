document.addEventListener("DOMContentLoaded", (event) => {
  navTab();

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
