(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const body = document.querySelector("body");

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || "false";
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;

    menuBtnRef.classList.remove("is-open");
    mobileMenuRef.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    menuBtnRef.setAttribute("aria-expanded", false);
  });
})();

//   document.querySelector(".js-speaker-modal-form").addEventListener("submit", (e) => {
//     e.preventDefault();

//     new FormData(e.currentTarget).forEach((value, name) =>
//       console.log(`${name}: ${value}`)
//     );
//   });

// New Repeta's Script
// (() => {
//   const mobileMenu = document.querySelector('.menu-burger');
//   const openMenuBtn = document.querySelector('.menu-burger-btn');
//   const body = document.querySelector('body');

//   const toggleMenu = () => {
//     const isMenuOpen =
//     openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');
//     openMenuBtn.classList.toggle('is-open');
//     body.classList.toggle('no-scroll');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';

//   };

//   openMenuBtn.addEventListener('click', toggleMenu);

//   // Закрываем мобильное меню на более широких экранах
//   // в случае изменения ориентации устройства.
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;

//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//   });
// })();
