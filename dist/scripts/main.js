function ready() {
  function classToggle() {
    document.querySelector('.js-layout-main-w').classList.toggle('active-sidebar');
  }
  document.querySelector('.js-toggle-sidebar').addEventListener('click', classToggle);
}

document.addEventListener("DOMContentLoaded", ready);
