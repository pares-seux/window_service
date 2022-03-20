import { scroll } from "./helpers";

const upScroll = () => {
  const scrollBtn = document.querySelector(".smooth-scroll");

  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scroll();
  });

  const visibleBtn = () => {
    scrollBtn.style.display =
      +window.innerHeight / 2 < +window.scrollY ? "block" : "none";
  };

  window.addEventListener("scroll", visibleBtn);

  visibleBtn();
};

export default upScroll;
