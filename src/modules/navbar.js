const navbar = () => {
  const topMenuBlock = document.getElementById("header");
  const fixedMenuBlock = document.getElementById("navigation-fixed");

  const positionScroll = () => {
    fixedMenuBlock.style.marginTop =
      window.scrollY + 60 >= topMenuBlock.offsetHeight ? 0 : "";
  };

  window.addEventListener("scroll", positionScroll);
  positionScroll();
};

export default navbar;
