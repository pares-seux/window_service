const modal = () => {
  const overlay = document.querySelector(".overlay");
  const headerModal = document.querySelector(".header-modal");
  const headerBtn = document.getElementById("header").querySelector(".button");
  const servicesModal = document.querySelector(".services-modal");
  const serviceBtn = document.querySelectorAll(".service-button");

  document.addEventListener("click", (e) => {
    console.log(e.target.closest(".button"), headerBtn);
    if (e.target.closest(".button")) {
      e.defaultPrevented();
      overlay.style.display = "block";
      headerModal.style.display = "block";
    }
  });
};

export default modal;
