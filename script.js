/* ===================== DATA ===================== */
const objectives = [
  {
    title: "Interior Space Optimization",
    text: "Develop an AI-powered platform that optimizes interior space in residential homes, generating optimized furniture placements and layouts for all rooms. It integrates Vastu Vidya principles, providing real-time adjustments.",
  },
  {
    title: "Vastu Vidya & Design Correction",
    text: "Develop an AI-powered system that ensures residential floor plans are in harmony with Vastu Vidya principles. It automatically analyzes designs, making real-time adjustments to room orientation and layout, and providing a compliance score.",
  },
  {
    title: "Land Optimization & Plan Generation",
    text: "Develop an AI-based system for land optimization and plan generation that ensures efficient use of available land while maintaining cultural alignment with Vastu Vidya principles.",
  },
  {
    title: "Exterior Space Optimization",
    text: "Design an AI-powered platform focused on optimizing the use of exterior spaces such as gardens, rooftops, and facades for functional purposes like gardening, relaxation, and energy efficiency.",
  },
];

const svgIcon = (svg) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const technologies = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React + Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  {
    name: "YOLOv8",
    icon: svgIcon(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#6d28d9"/>
            <stop offset="100%" stop-color="#06b6d4"/>
          </linearGradient>
        </defs>
        <rect width="128" height="128" rx="28" fill="url(#g)"/>
        <circle cx="40" cy="40" r="16" fill="#ffffff" fill-opacity="0.92"/>
        <circle cx="88" cy="88" r="16" fill="#ffffff" fill-opacity="0.92"/>
        <path d="M40 56v18c0 8 6 14 14 14h20" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round"/>
        <text x="64" y="114" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#ffffff">YOLOv8</text>
      </svg>
    `),
  },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  {
    name: "CNN",
    icon: svgIcon(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="28" fill="#0f172a"/>
        <circle cx="28" cy="32" r="8" fill="#38bdf8"/>
        <circle cx="28" cy="64" r="8" fill="#38bdf8"/>
        <circle cx="28" cy="96" r="8" fill="#38bdf8"/>
        <circle cx="64" cy="48" r="8" fill="#a78bfa"/>
        <circle cx="64" cy="80" r="8" fill="#a78bfa"/>
        <circle cx="100" cy="64" r="8" fill="#34d399"/>
        <path d="M36 32l20 14M36 64l20-14M36 64l20 14M36 96l20-14M72 48l20 14M72 80l20-14" stroke="#94a3b8" stroke-width="4" fill="none" stroke-linecap="round"/>
      </svg>
    `),
  },
  {
    name: "Genetic Algorithms",
    icon: svgIcon(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="28" fill="#fff7ed"/>
        <path d="M42 24c18 10 18 22 0 34s-18 24 0 36 18 26 0 34" stroke="#f97316" stroke-width="8" fill="none" stroke-linecap="round"/>
        <path d="M86 24c-18 10-18 22 0 34s18 24 0 36-18 26 0 34" stroke="#ea580c" stroke-width="8" fill="none" stroke-linecap="round"/>
        <path d="M48 36h32M44 52h40M48 68h32M44 84h40M48 100h32" stroke="#fb923c" stroke-width="6" stroke-linecap="round"/>
      </svg>
    `),
  },
  {
    name: "Shapely",
    icon: svgIcon(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="28" fill="#eff6ff"/>
        <polygon points="26,88 48,34 92,26 102,72 72,102" fill="#bfdbfe" stroke="#2563eb" stroke-width="6" join="round"/>
        <circle cx="48" cy="34" r="6" fill="#1d4ed8"/>
        <circle cx="92" cy="26" r="6" fill="#1d4ed8"/>
        <circle cx="102" cy="72" r="6" fill="#1d4ed8"/>
        <circle cx="72" cy="102" r="6" fill="#1d4ed8"/>
        <circle cx="26" cy="88" r="6" fill="#1d4ed8"/>
      </svg>
    `),
  }
];

const milestones = [
  { date: "Date TBD", title: "Proposal Presentation & Report", description: "Initial proposal presentation and report submission covering the project idea, scope, and planned approach.", marks: "Marks Allocated: 12%" },
  { date: "May 1, 2025", title: "Progress Presentation I", description: "First progress review covering the initial implementation stage and overall project development status.", marks: "Marks Allocated: 15%" },
  { date: "March 9, 2026", title: "Progress Presentation II", description: "Second progress review focused on advanced implementation progress, refinements, and readiness for completion.", marks: "Marks Allocated: 18%" },
  { date: "Date TBD", title: "Final Presentation and VIVA", description: "Final presentation and viva assessment demonstrating the completed solution and evaluating each member's understanding.", marks: "Marks Allocated: 20%" },
  { date: "Date TBD", title: "Final Report", description: "Comprehensive final project report documenting the full research, implementation, evaluation, and outcomes.", marks: "Marks Allocated: 19%" },
  { date: "Date TBD", title: "Research Paper (published)", description: "Published research paper presenting the project's contribution, findings, and academic value.", marks: "Marks Allocated: 10%" },
  { date: "Date TBD", title: "Website", description: "Project website submission showcasing the research, implementation details, milestones, and downloadable resources.", marks: "Marks Allocated: 2%" },
  { date: "Date TBD", title: "Research Logbook, Status Document 1 & 2", description: "Continuous assessment based on research logbook maintenance and the submission of status documents 1 and 2.", marks: "Marks Allocated: 4%" },
];

const documents = [
  { title: "Topic Assessment", subtitle: "Submitted", href: "assets/docs/Topic_Assesment.pdf", status: "Ready" },
  { title: "Research Paper", subtitle: "Submitted", href: "assets/docs/Research Paper.pdf", status: "Ready" },
  { title: "Project Charter", subtitle: "Yet to be submitted", href: "", status: "Pending" },
  { title: "Final Report", subtitle: "Yet to be submitted", href: "", status: "Pending" },
];

const presentations = [
  { title: "Proposal Presentation", subtitle: "Submitted", href: "assets/presentations/Progress_presentaion.pptx", status: "Ready" },
  { title: "Progress Presentation I", subtitle: "Yet to be submitted", href: "", status: "Pending" },
  { title: "Progress Presentation II", subtitle: "Submitted", href: "assets/presentations/PP2_presentaion.pptx", status: "Ready" },
  { title: "Final Presentation", subtitle: "Yet to be submitted", href: "", status: "Pending" },
];

const team = [
  { name: "Rathnasinghe S J R", id: "IT22908124", role: "Group Leader", summary: "Interior Space Optimization", photo: "assets/images/Rathansinghe.jpg" },
  { name: "Dinetha K A V", id: "IT22924278", role: "Group Member", summary: "Vastu Vidya & Design Correction", photo: "assets/images/Dinetha.png" },
  { name: "Sunkalpani S M D R", id: "IT22914996", role: "Group Member", summary: "Land Optimization & Plan Generation", photo: "assets/images/Sunkalpani.png" },
  { name: "Hansika J A J", id: "IT22346018", role: "Group Member", summary: "Exterior Space Optimization", photo: "assets/images/Hansika.png" },
];

const supervisors = [
  { name: "Prof. Samantha Rajapaksha", role: "Supervisor", summary: "Sri Lanka Institute of Information Technology", photo: "assets/images/Prof.Samantha.png" },
  { name: "Ms. Adya Dissanayake", role: "Co-Supervisor", summary: "Sri Lanka Institute of Information Technology", photo: "assets/images/Ms.Adya.png" },
  { name: "Mr. Mangala Muhandiram", role: "External Supervisor", summary: "Architecture & Vastu Consultant", photo: "assets/images/Mr.mangala.png" }
];

const contacts = [
  { label: "Group Email", value: "team.homescope@gmail.com" },
  { label: "University", value: "Sri Lanka Institute of Information Technology" },
];

/* ===================== RENDER FUNCTIONS ===================== */
function renderObjectives() {
  const el = document.getElementById('objectives-list');
  if (!el) return;
  el.innerHTML = objectives.map((item, i) => `
    <div class="obj-card reveal reveal-delay-${(i % 4) + 1}">
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </div>
  `).join('');
}

function renderTechnologies() {
  const el = document.getElementById('tech-list');
  if (!el) return;
  el.innerHTML = technologies.map(t => `
    <div class="tech-item">
      <div class="tech-icon-circle">
        <img src="${t.icon}" alt="${t.name}">
      </div>
      <p class="tech-name">${t.name}</p>
    </div>
  `).join('');
}

function renderMilestones() {
  const el = document.getElementById('milestones-list');
  if (!el) return;
  el.innerHTML = milestones.map((m, i) => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-date">${m.date}</div>
        <h3>${m.title}</h3>
        <p>${m.description}</p>
        <span class="timeline-badge">${m.marks}</span>
      </div>
    </div>
  `).join('');
}

function renderDownloads(targetId, items) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = items.map(item => {
    const ready = Boolean(item.href);
    const btn = ready
      ? `<a class="download-btn ready" href="${item.href}" target="_blank" rel="noreferrer">⬇ Download</a>`
      : `<span class="download-btn pending">${item.status}</span>`;
    return `
      <div class="download-card">
        <div class="download-card-info">
          <h4>${item.title}</h4>
          <p>${item.subtitle}</p>
        </div>
        ${btn}
      </div>
    `;
  }).join('');
}

function renderProfileMedia(person) {
  if (person.photo) {
    return `<img class="profile-photo" src="${person.photo}" alt="${person.name}" onerror="this.parentElement.innerHTML='<span>Photo</span>'">`;
  }
  return `<span>Photo</span>`;
}

function renderTeam() {
  const el = document.getElementById('team-list');
  if (!el) return;
  el.innerHTML = team.map((m, i) => `
    <div class="team-card reveal reveal-delay-${(i % 4) + 1}">
      <div class="team-img-placeholder">${renderProfileMedia(m)}</div>
      <div class="team-role-tag">${m.role}</div>
      <h3>${m.name}</h3>
      <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 12px;">${m.id}</p>
      <p style="color: var(--text-primary);">${m.summary}</p>
    </div>
  `).join('');
}

function renderSupervisors() {
  const el = document.getElementById('supervisors-list');
  if (!el) return;
  el.innerHTML = supervisors.map((m, i) => `
    <div class="team-card reveal reveal-delay-${(i % 2) + 1}">
      <div class="team-img-placeholder">${renderProfileMedia(m)}</div>
      <div class="team-role-tag">${m.role}</div>
      <h3>${m.name}</h3>
      <p style="color: var(--text-secondary); margin-top: 10px;">${m.summary}</p>
    </div>
  `).join('');
}

function renderContacts() {
  const el = document.getElementById('contact-list');
  if (!el) return;
  el.innerHTML = contacts.map(c => `
    <div class="contact-item">
      <h4 style="color: var(--accent); margin-bottom: 4px; font-size: 0.9rem;">${c.label}</h4>
      <p style="color: var(--text-secondary); font-size: 0.95rem;">${c.value}</p>
    </div>
  `).join('');
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const note = document.getElementById('contact-form-note');
  if (!form || !note) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const recipient = contacts.find((item) => item.label.toLowerCase().includes('email'))?.value || 'team.homescope@gmail.com';

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n');

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    note.textContent = 'Your email app should open with this message addressed to the research team.';
    form.reset();
  });
}

/* ===================== NAVBAR SCROLL EFFECT ===================== */
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('menu-toggle');
  const links = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.textContent = links.classList.contains('open') ? '✕ Close' : '☰ Menu';
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.textContent = '☰ Menu';
    });
  });
}

/* ===================== SCROLL REVEAL ===================== */
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ===================== FOOTER YEAR ===================== */
function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = `© ${new Date().getFullYear()} HomeScope Research Project`;
}

/* ===================== INIT ===================== */
renderObjectives();
renderTechnologies();
renderMilestones();
renderDownloads('documents-list', documents);
renderDownloads('presentations-list', presentations);
renderTeam();
renderSupervisors();
renderContacts();
setupNavbar();
setupContactForm();
setFooterYear();

// Delay reveal setup to allow dynamic content to render
requestAnimationFrame(() => {
  requestAnimationFrame(setupScrollReveal);
});
