import { validate } from "./validate";
import { openModal } from "./helpers";

const sendForm = ({ formName, someElem = [] }) => {
  const statusModal = document.getElementById("responseMessage");
  const statusBlock = statusModal.querySelector(".modal-content");
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с Вами свяжется!";
  let form;

  const validateInputs = (list) => {
    let success = true;
    list.forEach((input) => {
      validate(input);
      if (input.classList.contains("error")) {
        success = false;
      }
    });
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};
    statusModal.style =
      "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 99999;";

    formData.forEach((val, key) => {
      if (key !== "page" || key !== "subject") {
        formBody[key] = val;
      } else {
        formBody[key] = val === "" ? "не задано" : val;
      }
    });
    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (element !== null) {
        if (elem.type === "input" && element.value !== "") {
          formBody[elem.id] = element.value;
        }
      }
    });
    if (validateInputs(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.innerHTML = successText;
          formElements.forEach((input) => {
            input.value = "";
            input.classList.remove("success");
          });
          document
            .querySelectorAll(".calc-item")
            .forEach((elem) => (elem.value = ""));
          openModal(statusModal);
        })
        .catch((error) => {
          statusBlock.innerHTML = errorText;
          console.log(error);
        });
    }
  };

  if (formName === "callback-form" || formName === "application-form") {
    form = document.querySelectorAll(`form[name=${formName}]`)[1];
  } else {
    form = document.querySelector(`form[name=${formName}]`);
  }
  try {
    if (!form) {
      throw new Error("Верните форму");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
