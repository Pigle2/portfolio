// Navigation scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Hero typing animation
(function () {
    const titleEl = document.getElementById('heroTitle');
    if (!titleEl) return;

    const lines = [
        { text: 'AI ', highlight: false },
        { text: '에이전트 팀', highlight: true },
        { text: '을', highlight: false },
        { break: true },
        { text: '운영합니다.', highlight: false }
    ];

    let html = '';
    let charQueue = [];

    // Build character queue
    lines.forEach(line => {
        if (line.break) {
            charQueue.push({ type: 'break' });
            return;
        }
        const chars = line.text.split('');
        chars.forEach((ch, i) => {
            charQueue.push({
                type: 'char',
                char: ch,
                highlightStart: line.highlight && i === 0,
                highlightEnd: line.highlight && i === chars.length - 1
            });
        });
    });

    let i = 0;
    const cursor = '<span class="cursor"></span>';

    function type() {
        if (i >= charQueue.length) {
            // Remove cursor after typing done, then fade in rest
            setTimeout(() => {
                titleEl.innerHTML = titleEl.innerHTML.replace(cursor, '');
                fadeInSequence();
            }, 600);
            return;
        }

        const item = charQueue[i];

        // Remove existing cursor
        html = html.replace(cursor, '');

        if (item.type === 'break') {
            html += '<br>';
        } else {
            if (item.highlightStart) html += '<span class="hero-title-highlight">';
            html += item.char;
            if (item.highlightEnd) html += '</span>';
        }

        titleEl.innerHTML = html + cursor;
        i++;

        // Speed: faster for spaces, normal for chars
        const delay = item.type === 'break' ? 120 : (item.char === ' ' ? 60 : 80);
        setTimeout(type, delay);
    }

    // Start typing after short delay
    setTimeout(type, 500);
})();

// Sequential fade-in for hero elements
function fadeInSequence() {
    const fadeEls = document.querySelectorAll('.hero-fade');
    fadeEls.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('show');
        }, index * 400);
    });
}

// Scroll animation (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements
document.querySelectorAll(
    '.section-header, .editorial-body, .operate-item, .km-excerpt, .contact-content'
).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});
