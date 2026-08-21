// ── NAV ──
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ── COUNTDOWN ──
function updateCountdown() {
  const target = new Date('2027-08-30T08:30:00');
  const now    = new Date();
  const diff   = target - now;

  if (diff <= 0) {
    ['days','hours','minutes','seconds'].forEach(k => {
      const el = document.getElementById('cd-' + k);
      if (el) el.textContent = '0';
    });
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(val).padStart(2, '0');
  };
  set('cd-days', d);
  set('cd-hours', h);
  set('cd-minutes', m);
  set('cd-seconds', s);
}

if (document.getElementById('cd-days')) {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
}

// ── FORMSPREE AJAX ──
document.querySelectorAll('form[data-formspree]').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn     = form.querySelector('button[type="submit"]');
    const success = form.nextElementSibling;
    const endpoint = form.dataset.formspree;

    btn.disabled = true;
    btn.textContent = 'Verzenden…';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.reset();
        if (success && success.classList.contains('form-success')) {
          success.style.display = 'block';
        }
        btn.textContent = 'Verstuurd ✓';
      } else {
        const data = await res.json().catch(() => ({}));
        console.error('Formspree fout', res.status, data);
        btn.textContent = `Fout ${res.status} — probeer opnieuw`;
        btn.disabled = false;
      }
    } catch (err) {
      console.error('Formspree netwerkfout', err);
      btn.textContent = 'Fout — probeer opnieuw';
      btn.disabled = false;
    }
  });
});
