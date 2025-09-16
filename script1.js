document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn'); 
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuBtn.innerHTML = mobileMenu.classList.contains('hidden') 
        ? '<i class="fas fa-bars"></i>' 
        : '<i class="fas fa-times"></i>';
    });
  }

  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
