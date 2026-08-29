// Menu mobile
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});

// Fecha menu ao clicar num link
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll (respeita prefers-reduced-motion)
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce) {
  const targets = document.querySelectorAll('.section, .creds, .contato');
  targets.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(el => io.observe(el));
}
