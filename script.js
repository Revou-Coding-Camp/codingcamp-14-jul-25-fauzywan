document.addEventListener('DOMContentLoaded', () => {
  const navs = document.querySelectorAll('.border-nav');

  navs.forEach((nav) => {
    nav.addEventListener('click', () => {
      navs.forEach((n) => n.classList.remove('active'));
      nav.classList.add('active');

      const mainNav = document.getElementById('mainNav');
      if (mainNav && !mainNav.classList.contains('hidden')) {
        mainNav.classList.add('hidden');
        mainNav.classList.remove('flex');
      }
    });
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach((card) => {
      card.addEventListener('click', (c) => {
        document.querySelector('.team-card.active')?.classList.remove('active');
        c.currentTarget.classList.add('active');
      });
    });
  });

  const goToTopButton = document.getElementById('goToTop');

  if (goToTopButton) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
        goToTopButton.classList.add('block');
        goToTopButton.classList.remove('hidden');
        goToTopButton.classList.add('opacity-75');
      } else {
        goToTopButton.classList.add('hidden');
        goToTopButton.classList.remove('block');
        goToTopButton.classList.remove('opacity-75');
      }
    });

    goToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mainNav = document.getElementById('mainNav');

  if (mobileMenuButton && mainNav) {
    mobileMenuButton.addEventListener('click', () => {
      mainNav.classList.toggle('hidden');
      mainNav.classList.toggle('flex');
    });
  }

  const messageForm = document.querySelector('#messageUs form');

  if (messageForm) {
    messageForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const emailInput = document.getElementById('email');
      const nameInput = document.getElementById('name');
      const messageTextarea = document.getElementById('message');

      const email = emailInput.value;
      const name = nameInput.value;
      const message = messageTextarea.value;

      alertMessage += `Email: ${email}\n`;
      alertMessage += `Name: ${name}\n`;
      alertMessage += `Message: ${message}`;

      alert(alertMessage);

      messageForm.reset();
    });
  }
});
const spanUsername = document.getElementById('username');
function showWelcomePopUp() {
  let user = prompt('Please enter your name:');
  if (user) {
    spanUsername.innerText = user;
  }
}

showWelcomePopUp();
