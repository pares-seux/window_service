import { scroll } from "./helpers";

const upScroll = () => {
  const scrollBtn = document.querySelector(".smooth-scroll");

  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scroll();
  });

  window.addEventListener("scroll", () => {
    console.log(window.innerHeight, window.scrollY);
    scrollBtn.style.display =
      +window.innerHeight / 2 < +window.scrollY ? "block" : "none";
  });

  scrollBtn.style.display = "none";
};

export default upScroll;
