// Scroll suave para menu (já no HTML, mas reforçado)
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Neon Mode
document.getElementById('neon-toggle').addEventListener('click', () => {
    document.body.classList.toggle('neon-mode');
});

// Destaque de seção ao scroll (minha preferência para UX)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('active'); // Adicione .active no CSS se quiser estilos extras
        } else {
            section.classList.remove('active');
        }
    });
});