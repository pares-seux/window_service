import { rename } from "/modules/helpers";
import navbar from "/modules/navbar";
import menu from "/modules/menu";
import upScroll from "/modules/up-scroll";
import timer from "/modules/timer";
import modal from "/modules/modal";
import regexp from "./modules/regexp";
import sendForm from "./modules/sendForm";

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
