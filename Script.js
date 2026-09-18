/* =====================================================
   MAEVE VERNON PORTFOLIO
   Version 1
===================================================== */


// -----------------------------------------------------
// CURRENT YEAR
// -----------------------------------------------------

const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// -----------------------------------------------------
// MOBILE MENU
// -----------------------------------------------------

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

if (menuButton && mobileMenu) {

  menuButton.addEventListener("click", () => {

    const isOpen = mobileMenu.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen.toString()
    );

    menuButton.textContent = isOpen ? "Close" : "Menu";

    document.body.style.overflow =
      isOpen ? "hidden" : "";

  });


  mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.textContent = "Menu";

      document.body.style.overflow = "";

    });

  });

}


// -----------------------------------------------------
// EXPANDABLE PROJECTS
// -----------------------------------------------------

const projectTriggers =
  document.querySelectorAll(".project-trigger");

projectTriggers.forEach((trigger) => {

  trigger.addEventListener("click", () => {

    const project = trigger.closest(".project");

    const isOpen =
      trigger.getAttribute("aria-expanded") === "true";


    // Close the other projects for a cleaner
    // portfolio-style interaction.

    projectTriggers.forEach((otherTrigger) => {

      if (otherTrigger !== trigger) {

        otherTrigger.setAttribute(
          "aria-expanded",
          "false"
        );

        const otherProject =
          otherTrigger.closest(".project");

        if (otherProject) {
          otherProject.classList.remove("open");
        }

      }

    });


    // Toggle selected project

    trigger.setAttribute(
      "aria-expanded",
      (!isOpen).toString()
    );

    project.classList.toggle(
      "open",
      !isOpen
    );

  });

});


// -----------------------------------------------------
// SUBTLE HEADER HIDE / SHOW
// -----------------------------------------------------

const header = document.querySelector(".site-header");

let previousScrollPosition = window.scrollY;

window.addEventListener(
  "scroll",
  () => {

    const currentScrollPosition = window.scrollY;

    if (!header) return;


    // Always show header near top of page

    if (currentScrollPosition < 100) {

      header.classList.remove("hidden");

      previousScrollPosition =
        currentScrollPosition;

      return;
    }


    // Hide while scrolling down,
    // show while scrolling up.

    if (
      currentScrollPosition >
      previousScrollPosition
    ) {

      header.classList.add("hidden");

    } else {

      header.classList.remove("hidden");

    }


    previousScrollPosition =
      currentScrollPosition;

  },
  { passive: true }
);


// -----------------------------------------------------
// SUBTLE SCROLL REVEALS
// -----------------------------------------------------

const revealElements = document.querySelectorAll(
  ".section-heading, .timeline-item, .skills-list, .about-copy"
);


// Only add animation behavior when the user has
// not requested reduced motion.

const reducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


if (!reducedMotion) {

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });


  const observer = new IntersectionObserver(

    (entries, observerInstance) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observerInstance.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.12
    }

  );


  revealElements.forEach((element) => {
    observer.observe(element);
  });

}


// -----------------------------------------------------
// KEYBOARD ESCAPE SUPPORT FOR MOBILE MENU
// -----------------------------------------------------

document.addEventListener("keydown", (event) => {

  if (
    event.key === "Escape" &&
    mobileMenu &&
    mobileMenu.classList.contains("open")
  ) {

    mobileMenu.classList.remove("open");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    menuButton.textContent = "Menu";

    document.body.style.overflow = "";

    menuButton.focus();

  }

});
