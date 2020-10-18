const btn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icon = document.querySelector('.navbar_icon');
btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icon.classList.toggle('active');
});
