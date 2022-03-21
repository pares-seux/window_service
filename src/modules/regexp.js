import { validate } from "./validate";

const regexp = () => {
  document.addEventListener("input", (e) => {
    switch (e.target.name) {
      case "calc-input":
        e.target.value = e.target.value.replace(/[\D]+/, "");
        break;
      case "fio":
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁa-zA-Z\s]+/g, "");
        if (
          e.target.classList.contains("error") ||
          e.target.classList.contains("success")
        ) {
          let element = document.querySelector(e.target);
          validate(element);
        }
        break;
      case "phone":
        e.target.value = e.target.value.replace(/[^\d\-()+\s]+/g, "");
        if (
          e.target.classList.contains("error") ||
          e.target.classList.contains("success")
        ) {
          let element = document.getElementById(e.target);
          validate(element);
        }
        break;
    }
  });

  document.addEventListener(
    "blur",
    (e) => {
      if (
        e.target.localName === "input" &&
        !e.target.classList.contains("calc-item")
      ) {
        switch (e.target.name) {
          case "fio":
            e.target.value = e.target.value.trim().replace(/\s+/g, " ");
            break;
          case "phone":
            e.target.value = e.target.value.replace(
              /([-()@_.,?!~*'])(?=[-()@_.,?!~*']*\1)/g,
              ""
            );
            break;
        }
      }
    },
    true
  );

  document.addEventListener(
    "invalid",
    (e) => {
      e.preventDefault();
      if (e.target.localName === "input" && !e.target.name !== "calc-input") {
        e.target.classList.add("error");
      }
    },
    true
  );
};

export default regexp;
