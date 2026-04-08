document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".project-slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (slider && prevBtn && nextBtn) {
    const getScrollAmount = () => {
      const card = slider.querySelector(".project-card");
      return card ? card.offsetWidth + 24 : 320;
    };

    nextBtn.addEventListener("click", () => {
      slider.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth",
      });
    });

    prevBtn.addEventListener("click", () => {
      slider.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth",
      });
    });
  }

  const profileBtn = document.getElementById("profileBtn");
  const imgModal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const modalClose = document.querySelector(".img-modal-close");

  if (profileBtn && imgModal) {
    const openModal = () => {
      imgModal.classList.add("open");
      imgModal.setAttribute("aria-hidden", "false");
      if (modalClose) modalClose.focus();
    };

    const closeModal = () => {
      imgModal.classList.remove("open");
      imgModal.setAttribute("aria-hidden", "true");
      profileBtn.focus();
    };

    profileBtn.addEventListener("click", () => {
      if (modalImg && profileBtn.querySelector("img")) {
        modalImg.src = profileBtn.querySelector("img").src;
      }
      openModal();
    });

    modalClose && modalClose.addEventListener("click", closeModal);

    imgModal.addEventListener("click", (e) => {
      if (e.target === imgModal) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
