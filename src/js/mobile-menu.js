(() => {
  const reft = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeMenuLi: document.querySelector('.mobile-navigation-list'),
    menu: document.querySelector('[data-menu]'),
  };

  reft.openMenuBtn.addEventListener('click', toggleModal);
  reft.closeMenuBtn.addEventListener('click', toggleModal);
  // закриття мобільного меню за кліком на його елемент
  reft.closeMenuLi.addEventListener('click', toggleModal);

  function toggleModal() {
    reft.menu.classList.toggle('is-open');
  }
})();
