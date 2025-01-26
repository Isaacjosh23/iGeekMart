"use strict";

///////////////////////////////////////////////////////////
// Make Mobile Nav Work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Sticky header

const sectionHeroEL = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("stick");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("stick");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-70px",
  }
);
obs.observe(sectionHeroEL);

///////////////////////////
// Modal Window
const modal = document.querySelector(".modal");
const displayModal = document.querySelector(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden-modal");
  overlay.classList.remove("hidden-modal");
};

const hiddenModal = function () {
  modal.classList.add("hidden-modal");
  overlay.classList.add("hidden-modal");
};

displayModal.addEventListener("click", openModal);

closeModal.addEventListener("click", hiddenModal);

overlay.addEventListener("click", hiddenModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden-modal")) {
    hiddenModal();
  }
});
