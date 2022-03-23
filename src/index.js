import { rename } from "/modules/helpers";
import navbar from "/modules/navbar";
import menu from "/modules/menu";
import upScroll from "/modules/up-scroll";
import timer from "/modules/timer";
import modal from "/modules/modal";
import regexp from "./modules/regexp";
import sendForm from "./modules/sendForm";
import slider from "./modules/slider";

//rename("slogan", "tagline");
navbar();
menu();
upScroll();
timer("26 march 2022");
modal();
regexp();
sendForm({
  formName: "action-form",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
sendForm({
  formName: "action-form2",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
sendForm({
  formName: "application-form",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
sendForm({
  formName: "callback-form",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
sendForm({
  formName: "order-form",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
slider(
  {
    sliderBlockId: "benefits",
    slideWrapClass: "benefits-wrap",
    slideClass: "benefits__item",
    buttonClass: "benefits__arrow",
  },
  3
);
slider(
  {
    sliderBlockId: "services",
    slideWrapClass: "",
    slideClass: "col-md-12",
    buttonClass: "services__arrow",
  },
  2
);
