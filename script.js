document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Sticky
    window.addEventListener('scroll', () => {
        document.getElementById('mainHeader').classList.toggle('scrolled', window.scrollY > 80);
    });

    // 2. Radar Interativo
    const archDetail = document.getElementById('arch-detail');
    document.querySelectorAll('.node').forEach(node => {
        node.addEventListener('mouseenter', () => {
            archDetail.innerHTML = `<strong>${node.innerText}:</strong> ${node.getAttribute('data-desc')}`;
        });
    });

    // 3. FAQ Acordeão
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            q.parentElement.classList.toggle('active');
        });
    });

    // 4. Scroll Reveal & Contadores
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal, .ex-card').forEach(el => observer.observe(el));
});