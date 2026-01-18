
/* ================================
   Animações ao rolar a página
================================ 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('section, .card, .nucleo').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
});

/* ================================
   Interação nos cards
================================ 
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});

/* ================================
   Header inteligente
================================ 
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.style.background = '#FFFFFF';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
    } else {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
    }
});
*/