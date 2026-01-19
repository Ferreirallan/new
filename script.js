document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('mainHeader');
    const statusText = document.getElementById('status-text');
    const originalText = statusText.innerText;

    // 1. Header Dinâmico
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 80);
    });

    // 2. Efeito de Escrita (Hero)
    const h1 = document.querySelector('.hero-text-wrapper h1');
    const text = h1.innerText;
    h1.innerText = '';
    let i = 0;
    (function type() {
        if (i < text.length) {
            h1.innerHTML += text.charAt(i++);
            setTimeout(type, 40);
        }
    }());

    // 3. Interatividade Radial
    document.querySelectorAll('.nucleo').forEach(n => {
        n.addEventListener('mouseenter', () => {
            statusText.style.color = "#6C5CE7";
            statusText.style.transform = "scale(1.05)";
            statusText.innerText = n.getAttribute('data-info');
        });
        n.addEventListener('mouseleave', () => {
            statusText.style.color = "#1A1A1A";
            statusText.style.transform = "scale(1)";
            statusText.innerText = originalText;
        });
    });

    // 4. Scroll Reveal Progressivo
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Delay em cascata para cards
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('section, .card, .hero-text-wrapper, .stat-item').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const statusText = document.getElementById('status-text');
    const originalText = statusText.innerText;

    // 1. Interatividade do Gráfico
    document.querySelectorAll('.nucleo').forEach(n => {
        n.addEventListener('mouseenter', () => {
            statusText.style.color = "#6C5CE7";
            statusText.innerText = n.getAttribute('data-info');
        });
        n.addEventListener('mouseleave', () => {
            statusText.style.color = "#1A1A1A";
            statusText.innerText = originalText;
        });
    });

    // 2. Garante que a seção apareça ao rolar
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.architecture, .reveal').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});