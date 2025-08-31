// Desativa transições se o usuário prefere menos movimento
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('*').forEach(el => { el.style.transition = 'none'; });
}