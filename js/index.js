'use strict';

// ============================================================
// BOOT — runs after DOM + data.js are ready
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  renderExperience();
  renderSkills();
  renderEducation();
  renderContact();

  initNav();
  initMobileOverlay();
  initScrollSpy();
  initReveal();
  initSmoothScroll();
  initStackToggles();
});

// ============================================================
// HERO
// ============================================================
function renderHero() {
  const parts   = profile.name.trim().split(/\s+/);
  const first   = parts[0].toUpperCase();
  const rest    = parts.slice(1).join(' ').toUpperCase();

  // First name: solid fill. Last name: outlined in crimson.
  qs('#hero-name').innerHTML =
    `<span class="hn-fill">${esc(first)}</span>` +
    `<span class="hn-stroke">${esc(rest)}</span>`;

  qs('#hero-meta').innerHTML =
    `${esc(profile.title)}<span class="sep" aria-hidden="true">·</span>${esc(profile.location)}`;

  qs('#hero-tagline').textContent = profile.tagline;

  // Download CV — only rendered when cvFile is set in data.js
  const cvHtml = profile.cvFile
    ? `<a href="${esc(profile.cvFile)}" download
         class="cta-btn cta-btn-dl"
         aria-label="Download CV as PDF">
         <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
           <path d="M6.5 1v7M3.5 5.5l3 3 3-3M1 10h11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
         Download CV
       </a>`
    : '';

  qs('#hero-cta').innerHTML = `
    <a href="#contact" class="cta-btn">Contact me</a>
    <a href="${esc(profile.social.github || '#')}"
       class="cta-btn cta-btn-ghost"
       target="_blank" rel="noopener noreferrer">GitHub ↗</a>
    ${cvHtml}
  `;
}

// ============================================================
// ABOUT
// ============================================================
function renderAbout() {
  const img = qs('#about-img');
  img.src = profile.picture;
  img.alt = profile.name;

  qs('#about-quote').textContent = `"${profile.quote}"`;

  const bioEl = qs('#about-bio');
  if (Array.isArray(profile.bio)) {
    bioEl.innerHTML = profile.bio.map(p => `<p>${p}</p>`).join('');
  } else {
    bioEl.innerHTML = profile.bio;
  }

  // Social chips
  qs('#about-socials').innerHTML = buildSocialChips('social-chip');

  // Details list (dl)
  const details = [
    { label: 'Location',    value: esc(profile.location) },
    { label: 'Email',       value: `<a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a>` },
    { label: 'Availability', value: esc(profile.availability || 'Open to opportunities') },
    ...(profile.phone ? [{ label: 'Phone', value: esc(profile.phone) }] : []),
  ];

  qs('#about-details').innerHTML = details.map(d => `
    <div>
      <dt class="dd-label">${esc(d.label)}</dt>
      <dd class="dd-value">${d.value}</dd>
    </div>
  `).join('');

  // Overlay foot: name + location
  const of = qs('#overlay-foot');
  if (of) of.textContent = `${profile.name} · ${profile.location}`;
}

// ============================================================
// EXPERIENCE
// ============================================================
function renderExperience() {
  // Data in data.js is already newest-first — render as-is
  const entries = [...profile.experience];

  const MAX_STACKS = 8;

  qs('#exp-list').innerHTML = entries.map(exp => {
    const stacks = normaliseStacks(exp.stacks);

    const subParts = [esc(exp.location)];
    if (exp.url) {
      const display = exp.url.replace(/^https?:\/\//, '');
      subParts.push(`<a href="${esc(exp.url)}" target="_blank" rel="noopener">${esc(display)} ↗</a>`);
    }

    // Truncate long stack lists — show first MAX_STACKS, collapse the rest
    const shown  = stacks.slice(0, MAX_STACKS);
    const hidden = stacks.slice(MAX_STACKS);
    const stackHtml = hidden.length > 0
      ? `<span class="stack-shown">${shown.map(s => esc(s)).join(' · ')}</span>` +
        `<button class="stack-toggle" aria-expanded="false" data-label="+${hidden.length} more">` +
          `+${hidden.length} more` +
        `</button>` +
        `<span class="stack-extra" hidden> · ${hidden.map(s => esc(s)).join(' · ')}</span>`
      : stacks.map(s => esc(s)).join(' · ');

    return `
      <li class="exp-entry reveal">
        <div class="exp-top">
          <span class="exp-company">${esc(exp.company)}</span>
          <time class="exp-period">${esc(exp.from)} — ${esc(exp.to)}</time>
        </div>
        <p class="exp-role">${esc(exp.title)}</p>
        <p class="exp-loc-url">${subParts.join('<span aria-hidden="true"> · </span>')}</p>
        <div class="exp-desc">${exp.description || ''}</div>
        <p class="exp-stack" aria-label="Technologies">${stackHtml}</p>
      </li>
    `;
  }).join('');
}

// ============================================================
// SKILLS
// ============================================================
function renderSkills() {
  qs('#skills-grid').innerHTML = profile.skills.map(group => `
    <div class="skill-block reveal" role="listitem">
      <p class="skill-cat">${esc(group.category)}</p>
      <p class="skill-items">${group.items.map(esc).join(', ')}</p>
    </div>
  `).join('');
}

// ============================================================
// EDUCATION
// ============================================================
function renderEducation() {
  qs('#edu-list').innerHTML = profile.education.map(edu => `
    <div class="edu-entry reveal">
      <div class="edu-top">
        <span class="edu-school">${esc(edu.school)}</span>
        <time class="edu-period">${esc(edu.from)} — ${esc(edu.to)}</time>
      </div>
      <p class="edu-degree">${esc(edu.degree)}</p>
      <p class="edu-field">${esc(edu.fieldOfStudy)}</p>
      <p class="edu-loc">${esc(edu.location)}</p>
    </div>
  `).join('');
}

// ============================================================
// CONTACT
// ============================================================
function renderContact() {
  const email = profile.email;

  qs('#contact-email-link').textContent = email;
  qs('#contact-email-link').href        = `mailto:${email}`;
  qs('#contact-mailto-btn').href        = `mailto:${email}`;

  // Show Download CV button in contact section only when cvFile is set
  const dlBtn = qs('#contact-dl-btn');
  if (dlBtn) {
    if (profile.cvFile) {
      dlBtn.href = profile.cvFile;
      dlBtn.removeAttribute('hidden');
    } else {
      dlBtn.hidden = true;
    }
  }

  qs('#contact-socials').innerHTML = buildSocialChips('contact-soc-link');

  qs('#footer-copy').textContent = `© ${new Date().getFullYear()} ${profile.name}`;
  qs('#footer-loc').textContent  = profile.location;
}

// ============================================================
// NAV — scroll border + at-top class
// ============================================================
function initNav() {
  const nav = qs('#site-nav');
  function update() {
    nav.classList.toggle('at-top', window.scrollY < 20);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ============================================================
// MOBILE OVERLAY
// ============================================================
function initMobileOverlay() {
  const burger  = qs('#nav-burger');
  const overlay = qs('#nav-overlay');
  const close   = qs('#overlay-close');

  function open() {
    overlay.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    close.focus();
  }
  function shut() {
    overlay.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    burger.focus();
  }

  burger.addEventListener('click', () => {
    overlay.classList.contains('open') ? shut() : open();
  });
  close.addEventListener('click', shut);

  // Close when a nav link is clicked
  qsa('a', overlay).forEach(a => a.addEventListener('click', shut));

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) shut();
  });
}

// ============================================================
// SCROLL SPY
// ============================================================
function initScrollSpy() {
  const sections = qsa('section[id], #top');
  const links    = qsa('.nl[data-s]');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id === 'top' ? 'top' : entry.target.id;
      links.forEach(l => l.classList.toggle('active', l.dataset.s === id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(s => obs.observe(s));
}

// ============================================================
// REVEAL ON SCROLL
// ============================================================
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  qsa('.reveal').forEach(el => obs.observe(el));
}

// ============================================================
// SMOOTH SCROLL
// ============================================================
function initSmoothScroll() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// ============================================================
// STACK TOGGLE — expand/collapse long tech lists
// ============================================================
function initStackToggles() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.stack-toggle');
    if (!btn) return;

    const extra    = btn.nextElementSibling;   // .stack-extra span
    const expanded = btn.getAttribute('aria-expanded') === 'true';

    if (expanded) {
      extra.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = btn.dataset.label;     // restore "+N more"
    } else {
      extra.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      btn.textContent = 'Less ↑';
    }
  });
}

// ============================================================
// HELPERS
// ============================================================
function buildSocialChips(cls) {
  const map = [
    { key: 'linkedin',      label: 'LinkedIn' },
    { key: 'github',        label: 'GitHub' },
    { key: 'twitter',       label: 'Twitter' },
    { key: 'stackoverflow', label: 'Stack Overflow' },
  ];
  return map
    .filter(({ key }) => profile.social[key])
    .map(({ key, label }) =>
      `<a href="${esc(profile.social[key])}" class="${cls}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`
    ).join('');
}

function normaliseStacks(stacks) {
  if (!stacks) return [];
  if (Array.isArray(stacks)) return stacks.map(s => String(s).trim()).filter(Boolean);
  return String(stacks).split(',').map(s => s.trim()).filter(Boolean);
}

function qs(sel, root = document) {
  return root.querySelector(sel);
}
function qsa(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}
function esc(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
