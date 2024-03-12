(() => {
  const reft = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  reft.openMenuBtn.addEventListener('click', toggleModal);
  reft.closeMenuBtn.addEventListener('click', toggleModal);

  async function toggleModal() {
    await reft.menu.classList.toggle('is-open');
  }
})();
