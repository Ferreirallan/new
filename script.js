document.addEventListener('DOMContentLoaded', () => {
    // 1. Controle do Header ao Rolar
    window.addEventListener('scroll', () => {
        document.getElementById('mainHeader').classList.toggle('scrolled', window.scrollY > 80);
    });

    // 2. Contador Dinâmico de Estatísticas (Social Proof)
    const animateStats = () => {
        document.querySelectorAll('.stat-val').forEach(s => {
            const target = +s.getAttribute('data-val');
            let count = 0;
            const update = () => {
                const speed = target / 60; // Duração da animação
                if(count < target) {
                    count += speed;
                    s.innerText = Math.ceil(count);
                    setTimeout(update, 20);
                } else {
                    s.innerText = target;
                }
            };
            update();
        });
    };

    // 3. Sistema de Hover na Arquitetura (Filtro de Conteúdo)
    const archDetail = document.getElementById('arch-detail');
    document.querySelectorAll('.node').forEach(node => {
        node.addEventListener('mouseenter', () => {
            const description = node.getAttribute('data-desc');
            archDetail.innerHTML = `<strong>${node.innerText}:</strong> ${description}`;
            archDetail.style.opacity = '1';
        });
    });

    // 4. Observer de Revelação (Reveal)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Dispara contadores quando a seção de stats aparece
                if(entry.target.classList.contains('stats-premium')) animateStats();
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal, .stats-premium').forEach(el => observer.observe(el));
});