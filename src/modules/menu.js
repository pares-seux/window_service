import { scroll } from "./helpers";

const menu = () => {
  const navbarMenu = document.getElementById("navbar-collapse-fixed");
  const navigationMenu = document.getElementById("navbar-collapse");

  const handleMenu = (element) => {
    element.classList.toggle("collapse");
  };

  document.addEventListener("click", (e) => {
    if (+screen.width < 992) {
      navbarMenu.style = "overflow-y: scroll;";
      if (e.target.closest("#navigation-fixed")) {
        e.preventDefault();
        if (e.target.closest(".navbar-toggle")) {
          handleMenu(navbarMenu);
        }
        if (e.target.localName === "a") {
          scroll(e.target);
          handleMenu(navbarMenu);
        }
      }
      if (
        e.target.closest("#navigation") &&
        e.target.closest(".navbar-toggle")
      ) {
        handleMenu(navigationMenu);
      }
    } else {
      if (e.target.closest("#navigation-fixed") && e.target.localName === "a") {
        e.preventDefault();
        scroll(e.target);
      }
    }
  });
};

export default menu;
