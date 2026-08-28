import './style.css';

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }

  // Interactive copy feedback for contact button
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const email = btn.getAttribute('data-copy-email');
      if (email && navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(email);
          const feedback = btn.querySelector('.copy-feedback');
          if (feedback) {
            feedback.classList.remove('opacity-0');
            feedback.classList.add('opacity-100');
            setTimeout(() => {
              feedback.classList.remove('opacity-100');
              feedback.classList.add('opacity-0');
            }, 2000);
          }
        } catch (err) {
          // Fallback to mailto link navigation if clipboard write fails
          console.warn('Clipboard write failed, opening mailto', err);
        }
      }
    });
  });
});
