// Modal
const modal = document.getElementById('modal');
const closeBtn = modal.querySelector('.close');
const cancelBtn = document.getElementById('cancel');
const form = document.getElementById('bot-form');

let currentBotKey = null;

const manageBtn = document.querySelector('.manage');
if (manageBtn) {
  manageBtn.addEventListener('click', () => {
    currentBotKey = `bot_prefs_${manageBtn.dataset.bot}`;
    const stored = JSON.parse(localStorage.getItem(currentBotKey) || '{}');

    form.prefix.value = stored.prefix || '!';
    form.presence.value = stored.presence || 'online';
    form.mentions.checked = stored.mentions ?? true;
    form.volume.value = stored.volume ?? 70;

    modal.classList.remove('hidden');
    form.prefix.focus();
  });
}

function closeModal() { modal.classList.add('hidden'); }
closeBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    prefix: form.prefix.value,
    presence: form.presence.value,
    mentions: form.mentions.checked,
    volume: Number(form.volume.value)
  };
  if (currentBotKey) {
    localStorage.setItem(currentBotKey, JSON.stringify(data));
    alert('Preferências salvas localmente (mock). Integração real requer backend + OAuth.');
  }
  closeModal();
});