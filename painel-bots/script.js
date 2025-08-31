// Busca por nome do bot
const search = document.getElementById('search');
const botCards = Array.from(document.querySelectorAll('.bot-card'));

if (search) {
  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    botCards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      card.style.display = name.includes(q) ? '' : 'none';
    });
  });
}

// Modal
const modal = document.getElementById('modal');
const closeBtn = modal ? modal.querySelector('.close') : null;
const cancelBtn = document.getElementById('cancel');
const form = document.getElementById('bot-form');
let currentBotKey = null;

document.querySelectorAll('.manage').forEach(btn => {
  btn.addEventListener('click', () => {
    currentBotKey = `bot_prefs_${btn.dataset.bot}`;
    const stored = JSON.parse(localStorage.getItem(currentBotKey) || '{}');
    if (form) {
      form.prefix.value = stored.prefix || '!';
      form.presence.value = stored.presence || 'online';
      form.mentions.checked = stored.mentions ?? true;
      form.volume.value = stored.volume ?? 70;
    }
    modal.classList.remove('hidden');
    form.prefix.focus();
  });
});

function closeModal() { modal.classList.add('hidden'); }
if (closeBtn) closeBtn.addEventListener('click', closeModal);
if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

if (form) {
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
      alert('Preferências salvas localmente (mock). Integração real requer backend + OAuth do Discord.');
    }
    closeModal();
  });
}