import { scroll } from "./helpers";

const upScroll = () => {
  const scrollBtn = document.querySelector(".smooth-scroll");

  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scroll();
  });

  window.addEventListener("scroll", () => {
    scrollBtn.style.display =
      +window.innerHeight / 2 < +window.scrollY ? "block" : "none";
  });

  scrollBtn.style.display = "none";
};

export default upScroll;
