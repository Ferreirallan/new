document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Sticky
    window.addEventListener('scroll', () => {
        document.getElementById('mainHeader').classList.toggle('scrolled', window.scrollY > 80);
    });

    // 2. Contador de Números
    const animateStats = () => {
        document.querySelectorAll('.stat-val').forEach(s => {
            const target = +s.getAttribute('data-val');
            let count = 0;
            const update = () => {
                const speed = target / 50;
                if(count < target) {
                    count += speed;
                    s.innerText = Math.ceil(count);
                    setTimeout(update, 20);
                } else { s.innerText = target; }
            };
            update();
        });
    };

    // 3. Radar Interativo
    const archDetail = document.getElementById('arch-detail');
    document.querySelectorAll('.node').forEach(node => {
        node.addEventListener('mouseenter', () => {
            archDetail.innerHTML = `<strong>${node.innerText}:</strong> ${node.getAttribute('data-desc')}`;
        });
    });

    // 4. FAQ Acordeão
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            q.parentElement.classList.toggle('active');
        });
    });

    // 5. Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if(entry.target.classList.contains('stats-premium')) animateStats();
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal, .stats-premium, .ex-card').forEach(el => observer.observe(el));
});
