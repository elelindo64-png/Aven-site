document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('profile-form');
  const locked = document.getElementById('profile-locked');
  const status = document.getElementById('profile-status');
  const profile = AVEN.store.get('aven.profile', {}) || {};
  const session = AVEN.store.get('aven.session', {}) || {};

  document.getElementById('profile-email').textContent = session.nome || session.razao || 'Perfil demonstrativo';
  document.getElementById('profile-name').value = profile.full_name || session.nome || '';
  document.getElementById('profile-type').value = profile.account_type || (session.tipo === 'empresa' ? 'company' : 'candidate');
  document.getElementById('profile-headline').value = profile.headline || '';
  document.getElementById('profile-city').value = profile.city || '';
  document.getElementById('profile-bio').value = profile.bio || '';
  form.hidden = false;
  locked.hidden = true;
  status.textContent = 'Demonstração: o perfil fica salvo somente neste navegador.';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    AVEN.store.set('aven.profile', {
      full_name: document.getElementById('profile-name').value.trim(),
      account_type: document.getElementById('profile-type').value,
      headline: document.getElementById('profile-headline').value.trim(),
      city: document.getElementById('profile-city').value.trim(),
      bio: document.getElementById('profile-bio').value.trim()
    });
    status.textContent = 'Perfil de demonstração salvo neste navegador.';
  });
});
