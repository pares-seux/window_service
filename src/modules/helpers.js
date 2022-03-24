const rename = (oldName, newName) => {
  const element = document.querySelector(`.${oldName}`);
  element.classList.remove(oldName);
  element.classList.add(newName);
};

const scroll = (href = "#header") => {
  let target = document.getElementById(href.slice(1));
  target.scrollIntoView({ block: "start", behavior: "smooth" });
};

const openModal = (modal) => {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "block";
  modal.style.display = "block";
};

const closeModal = (modal) => {
  const overlay = document.querySelector(".overlay");
  modal.querySelectorAll("input")?.forEach((elem) => {
    elem.value = "";
  });
  overlay.style.display = "none";
  modal.style.display = "none";
};

const checkIndex = (index, len) => {
  if (index >= len) {
    return 0;
  }
  if (index < 0) {
    return len - 1;
  }
  return index;
};

export { rename, scroll, openModal, closeModal, checkIndex };
