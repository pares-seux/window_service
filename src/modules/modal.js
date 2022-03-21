const modal = () => {
  const overlay = document.querySelector(".overlay");
  const headerModal = document.querySelector(".header-modal");
  const servicesModal = document.querySelector(".services-modal");
  let documentModal = document.createElement("div");
  documentModal.style = `display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999;`;
  document.body.append(documentModal);

  const openModal = (e, modal) => {
    e.preventDefault();
    overlay.style.display = "block";
    modal.style.display = "block";
  };

  const closeModal = (e, modal) => {
    e.preventDefault();
    overlay.style.display = "none";
    modal.style.display = "none";
  };

  document.addEventListener("click", (e) => {
    if (
      (e.target.closest(".button") && e.target.closest("#header")) ||
      (e.target.closest("#navigation-fixed") && e.target.closest(".top-btn"))
    ) {
      openModal(e, headerModal);
    }
    if (e.target.closest(".service-button")) {
      openModal(e, servicesModal);
    }
    if (
      e.target.classList.contains("services-modal__close") ||
      e.target.closest(".overlay")
    ) {
      servicesModal.querySelectorAll("input").forEach((elem) => {
        elem.value = "";
      });
      closeModal(e, servicesModal);
    }
    if (
      e.target.classList.contains("header-modal__close") ||
      e.target.closest(".overlay")
    ) {
      headerModal.querySelectorAll("input").forEach((elem) => {
        elem.value = "";
      });
      closeModal(e, headerModal);
    }
    if (e.target.closest(".sertificate-document")) {
      openModal(e, documentModal);
      documentModal.classList.add("sertificate-document__open");
      documentModal.innerHTML = `<img src="./images/documents/original/document4.jpg" alt="document" style=" height: ${document.body.clientHeight}px;">`;
    }
    if (
      e.target.closest(".overlay") &&
      document?.querySelector(".sertificate-document__open")
    ) {
      closeModal(e, documentModal);
      documentModal.innerHTML = "";
    }
  });
};

export default modal;
