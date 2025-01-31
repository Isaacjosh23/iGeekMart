"use strict";

///////////////////////////////////////////////////////////
// Make Mobile Nav Work
// const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const openMobileNav = document.querySelector(".open-mobile-nav");
const closeMobileNav = document.querySelector(".close-mobile-nav");
const mobileOvelay = document.querySelector(".nav-overlay");

const openNav = function () {
  headerEl.classList.add("nav-open");
  mobileOvelay.classList.remove("hidden-modal");
};

const closeNav = function () {
  headerEl.classList.remove("nav-open");
  mobileOvelay.classList.add("hidden-modal");
};

closeMobileNav.addEventListener("click", closeNav);

openMobileNav.addEventListener("click", openNav);

mobileOvelay.addEventListener("click", closeNav);

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.add("nav-open", "nav-overlay");
// });

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
const tabNav = document.querySelector(".tab-nav");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
// const navOverlay = document.querySelector(".nav-overlay");

// console.log(navOverlay);

const openModal = function () {
  modal.classList.remove("hidden-modal");
  overlay.classList.remove("hidden-modal");
};

const hiddenModal = function () {
  modal.classList.add("hidden-modal");
  overlay.classList.add("hidden-modal");
};

displayModal.addEventListener("click", openModal);

tabNav.addEventListener("click", openModal);

closeModal.addEventListener("click", hiddenModal);

overlay.addEventListener("click", hiddenModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden-modal")) {
    hiddenModal();
  }
});

// ///////////////////////////
// //// Update year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
