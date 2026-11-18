document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reset-password-form');
  const status = document.getElementById('reset-status');
  form.hidden = false;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.textContent = 'Recuperação simulada. Nenhum e-mail foi enviado e nenhuma senha foi alterada.';
  });
});
