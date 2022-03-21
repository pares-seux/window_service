const slider = (sliderBlockId, slideWrapClass, slideClass, buttonClass) => {
  const sliderBlock = document.getElementById(sliderBlockId);
  let currentSlide = 0,
    tempSlide,
    width,
    slides,
    slideWrap;

  const changeSlide = (firstSlide, lastSlide, direction) => {
    if (direction) {
      firstSlide.remove();
      slideWrap.append(lastSlide);
    } else {
      lastSlide.remove();
      slideWrap.prepend(firstSlide);
    }
  };
  // const prevSlide = (elems, index, strClass) => {
  //   elems[index].classList.remove(strClass);
  // };
  // const nextSlide = (elems, index, strClass) => {
  //   elems[index].classList.add(strClass);
  // };
  // const autoSlide = () => {
  //   prevSlide(slides, currentSlide, "portfolio-item-active");
  //   prevSlide(dots, currentSlide, "dot-active");
  //   currentSlide++;
  //   if (currentSlide >= slides.length) {
  //     currentSlide = 0;
  //   }
  //   nextSlide(slides, currentSlide, "portfolio-item-active");
  //   nextSlide(dots, currentSlide, "dot-active");
  // };
  // const startSlide = (timer = 1500) => {
  //   interval = setInterval(autoSlide, timer);
  // };
  // const stopSlide = () => {
  //   clearInterval(interval);
  // };
  const loadSlider = () => {
    slideWrap = sliderBlock.querySelector("." + slideWrapClass);
    slides = slideWrap.querySelectorAll("." + slideClass);
    slideWrap.innerHTML = "";
    if (sliderBlock === null) {
      console.log("error");
      return;
    }
    let direction;
    width = +window.innerWidth >= 576 ? 3 : 1;
    slides.forEach((slide, index) => {
      if (index < width) {
        slideWrap.append(slide);
      }
    });

    sliderBlock.addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target.closest(`.${buttonClass}--right`)) {
        slides[currentSlide].remove();
        currentSlide = currentSlide++ >= slides.length ? 0 : currentSlide++;
        tempSlide =
          currentSlide + 2 >= slides.length
            ? currentSlide + 2 - slides.length
            : currentSlide + 2;
        slideWrap.append(slides[tempSlide]);
      }
      if (e.target.closest(`.${buttonClass}--left`)) {
        tempSlide =
          currentSlide + 2 >= slides.length
            ? currentSlide + 2 - slides.length
            : currentSlide + 2;
        slides[tempSlide].remove();
        currentSlide = currentSlide-- <= 0 ? slides.length - 1 : currentSlide--;
        slideWrap.prepend(slides[currentSlide]);
      }
      console.log(currentSlide);
      // if (currentSlide < 0) {
      //   currentSlide = slides.length - 1;
      // } else if (currentSlide >= slides.length) {
      //   currentSlide = 0;
      // }
    });
  };
  loadSlider();
};

export default slider;
