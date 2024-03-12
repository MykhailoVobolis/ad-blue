const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();

    toggleModalMenu(); // виклик функції закриття мобільного меню (костиль)

    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

// функція закриття мобільного меню при кліку на його елемент
function toggleModalMenu() {
  const mobileMenu = document.querySelector('[data-menu]');
  mobileMenu.classList.toggle('is-open');
}
