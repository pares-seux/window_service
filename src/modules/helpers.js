const rename = (oldName, newName) => {
  const element = document.querySelector(`.${oldName}`);
  element.classList.remove(oldName);
  element.classList.add(newName);
};

const scroll = (href = "#header") => {
  let target = document.getElementById(href.slice(1));
  target.scrollIntoView({ block: "start", behavior: "smooth" });
};

const openModal = (e, modal) => {
  const overlay = document.querySelector(".overlay");
  e.preventDefault();
  overlay.style.display = "block";
  modal.style.display = "block";
};

const closeModal = (e, modal) => {
  const overlay = document.querySelector(".overlay");
  e.preventDefault();
  overlay.style.display = "none";
  modal.style.display = "none";
};

export { rename, scroll, openModal, closeModal };
