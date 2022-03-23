const validate = (element) => {
  const checkValue = () => {
    console.log(element);
    switch (element.name) {
      case "fio":
        if (
          element.value.trim().length < 3 ||
          /^([^\s]*\s){3,}[^\s]*$/.test(
            element.value.trim().replace(/\s+/g, " ")
          )
        ) {
          element.classList.add("error");
          element.classList.remove("success");
          return false;
        } else {
          element.classList.remove("error");
          element.classList.add("success");
          return true;
        }
        break;
      case "phone":
        if (
          /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(
            element.value.trim()
          )
        ) {
          element.classList.remove("error");
          element.classList.add("success");
          return true;
        } else {
          element.classList.add("error");
          element.classList.remove("success");
          return false;
        }
        break;
      default:
        break;
    }
  };

  checkValue();
};

export { validate };
