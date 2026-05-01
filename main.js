/* ClearFlow – globales Frontend-Skript */
(function () {
    'use strict';

    /* Reveal-Animationen via IntersectionObserver */
    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(function (el) {
        revealObserver.observe(el);
    });

    /* Navigation: Hintergrund einblenden bei Scroll */
    var nav = document.getElementById('nav');
    var hero = document.querySelector('.hero');
    if (nav) {
        window.addEventListener('scroll', function () {
            var y = window.pageYOffset;
            if (y > 50) {
                nav.classList.add('scrolled');
                /* Wenn Nav anfangs über dunklem Hero lag, ab Scroll auf hellem Stil */
                if (hero) nav.classList.remove('on-hero');
            } else {
                nav.classList.remove('scrolled');
                if (hero) nav.classList.add('on-hero');
            }
        }, { passive: true });
    }

    /* Mobile-Menü Toggle */
    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('mobileMenu');
    if (toggle && menu) {
        toggle.addEventListener('click', function () {
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
        });
        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                toggle.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    /* Smooth-Scroll für Anker-Links innerhalb der Seite */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                history.replaceState(null, '', window.location.pathname);
                return;
            }
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
})();
