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

//////////////////////////////////////////////////////////
// Display Modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

console.log(btnShowModal);

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal(i).addEventListener("click", function () {
    console.log("Button clicked");
    modal.classList.remove("hidden-modal");
  });
