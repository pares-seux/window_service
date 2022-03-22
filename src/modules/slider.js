const slider = (sliderBlockId, slideWrapClass, slideClass, buttonClass) => {
  const sliderBlock = document.getElementById(sliderBlockId);
  let prevSlide, nextSlide, width, slides, slideWrap;

  const checkIndex = (index) => {
    if (index >= slides.length) {
      return 0;
    }
    if (index < 0) {
      return slides.length - 1;
    }
    return index;
  };

  const checkWidth = () => {
    if (+window.innerWidth >= 576) {
      width = 3;
      slideWrap.style.justifyContent = "";
    } else {
      width = 1;
      slideWrap.style.justifyContent = "space-around";
    }
  };

  const stepRight = () => {
    prevSlide = checkIndex(prevSlide + 1);
    slides[prevSlide].remove();
    slideWrap.append(slides[nextSlide]);
    nextSlide = checkIndex(nextSlide + 1);
  };

  const stepLeft = () => {
    nextSlide = checkIndex(nextSlide - 1);
    slides[nextSlide].remove();
    slideWrap.prepend(slides[prevSlide]);
    prevSlide = checkIndex(prevSlide - 1);
  };

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
    prevSlide = slides.length - 1;
    checkWidth();
    nextSlide = width;
    slides.forEach((slide, index) => {
      if (index < width) {
        slideWrap.append(slide);
      }
    });

    sliderBlock.addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target.closest(`.${buttonClass}--right`)) {
        stepRight();
      }
      if (e.target.closest(`.${buttonClass}--left`)) {
        stepLeft();
      }
    });
    window.addEventListener(
      `resize`,
      (e) => {
        e.preventDefault();
        checkWidth();
        console.log(slideWrap.children.length, width);
        if (slideWrap.children.length > width) {
          for (let i = 0; i < slideWrap.children.length - width; i++) {
            nextSlide = checkIndex(nextSlide - 1);
            slides[nextSlide].remove();
          }
        } else {
          for (let i = 0; i < width - slideWrap.children.length; i++) {
            slideWrap.append(slides[nextSlide]);
            nextSlide = checkIndex(nextSlide + 1);
          }
        }
      },
      false
    );
  };
  loadSlider();
};

export default slider;
