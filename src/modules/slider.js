const slider = (slider, quantity = 3) => {
  const sliderBlock = document.getElementById(slider.sliderBlockId);
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
      width = quantity;
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
    if (slider.slideWrapClass === "") {
      slideWrap = document.createElement("div");
      slideWrap.classList.add(`${slider.sliderBlockId}-wrap`);
      document
        .querySelector(`.${slider.buttonClass}`)
        .parentElement.before(slideWrap);
    } else {
      slideWrap = sliderBlock.querySelector("." + slider.slideWrapClass);
    }
    slides = sliderBlock.querySelectorAll("." + slider.slideClass);
    slides.forEach((slide) => {
      slide.remove();
    });
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

      if (e.target.closest(`.${slider.buttonClass}--right`)) {
        stepRight();
      }
      if (e.target.closest(`.${slider.buttonClass}--left`)) {
        stepLeft();
      }
    });
    window.addEventListener(
      `resize`,
      (e) => {
        e.preventDefault();
        checkWidth();
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
