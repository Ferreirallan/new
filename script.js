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

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('click', () => {
        archDetail.innerHTML = `<strong>${node.innerText}:</strong> ${node.getAttribute('data-desc')}`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const archDetail = document.getElementById('arch-detail');
    const nodes = document.querySelectorAll('.node');

    const updateDetail = (node) => {
        const title = node.innerText;
        const desc = node.getAttribute('data-desc');
        archDetail.style.opacity = '0';
        
        setTimeout(() => {
            archDetail.innerHTML = `<strong>${title}</strong> ${desc}`;
            archDetail.style.opacity = '1';
        }, 150);
    };

    nodes.forEach(node => {
        // Desktop: Hover
        node.addEventListener('mouseenter', () => updateDetail(node));
        
        // Mobile/Tablet: Click
        node.addEventListener('click', () => updateDetail(node));
    });
});

// Função para animar os círculos de progresso
const animateCircles = () => {
    document.querySelectorAll('.progress-circle').forEach(circle => {
        const targetValue = circle.getAttribute('data-progress');
        // Usamos uma variável CSS personalizada para a animação suave
        let current = 0;
        const interval = setInterval(() => {
            if (current >= targetValue) {
                clearInterval(interval);
            } else {
                current++;
                circle.style.setProperty('--pg', current);
            }
        }, 15);
    });
};

// Adicione ao IntersectionObserver já existente no seu arquivo
const observerMetrics = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'metricas') animateCircles();
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('#metricas').forEach(el => observerMetrics.observe(el));