const rename = (oldName, newName) => {
  const element = document.querySelector(`.${oldName}`);
  element.classList.remove(oldName);
  element.classList.add(newName);
};

const scroll = (href = "#header") => {
  let target = document.getElementById(href.slice(1));
  target.scrollIntoView({ block: "start", behavior: "smooth" });
};

export { rename, scroll };
