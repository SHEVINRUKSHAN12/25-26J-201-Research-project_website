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

const technologies = [
  "Python", "React", "YOLOv8", "TensorFlow", "Keras", "PyTorch", "Genetic Algorithms", "OpenCV", "Shapely"
];

const milestones = [
  { date: "March 2026", title: "Project Proposal", description: "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.", marks: "Marks Allocated: 6" },
  { date: "June 2026", title: "Progress Presentation I", description: "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.", marks: "Marks Allocated: 6" },
  { date: "July 2026", title: "Research Paper", description: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.", marks: "Marks Allocated: 10" },
  { date: "September 2026", title: "Progress Presentation II", description: "Reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.", marks: "Marks Allocated: 18" },
  { date: "October 2026", title: "Website Assessment", description: "The Website helps to promote our research project and reveals all details related to the project.", marks: "Marks Allocated: 2" },
  { date: "November 2026", title: "Final Report & Viva", description: "Final Report evaluates the completed project done throughout the year. Viva is held individually to assess each member's contribution.", marks: "Marks Allocated: 39" },
];

const documents = [
  { title: "Topic Assessment", subtitle: "Submitted", href: "assets/docs/Topic_Assesment.pdf", status: "Ready" },
  { title: "Research Paper", subtitle: "Submitted", href: "assets/docs/Research Paper.pdf", status: "Ready" },
  { title: "Project Charter", subtitle: "Yet to be submitted", href: "", status: "Pending" },
  { title: "Status Document I", subtitle: "Yet to be submitted", href: "", status: "Pending" },
  { title: "Final Report", subtitle: "Yet to be submitted", href: "", status: "Pending" },
];

const presentations = [
  { title: "Proposal Presentation", subtitle: "Yet to be submitted", href: "", status: "Pending" },
  { title: "Progress Presentation I", subtitle: "Yet to be submitted", href: "", status: "Pending" },
  { title: "Progress Presentation II", subtitle: "Yet to be submitted", href: "", status: "Pending" },
  { title: "Final Presentation", subtitle: "Yet to be submitted", href: "", status: "Pending" },
];

const team = [
  { name: "Rathnasinghe S J R", id: "IT22908124", role: "Group Leader", summary: "Interior Space Optimization" },
  { name: "Dinetha K A V", id: "IT22924278", role: "Group Member", summary: "Vastu Vidya & Design Correction" },
  { name: "Sunkalpani S M D R", id: "IT22914996", role: "Group Member", summary: "Land Optimization & Plan Generation" },
  { name: "Hansika J A J", id: "IT22346018", role: "Group Member", summary: "Exterior Space Optimization" },
];

const supervisors = [
  { name: "Prof. Samantha Rajapaksha", role: "Supervisor", summary: "Sri Lanka Institute of Information Technology" },
  { name: "Ms. Adya Dissanayake", role: "Co-Supervisor", summary: "Sri Lanka Institute of Information Technology" }
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
  el.innerHTML = technologies.map(t => `<span class="tech-chip">${t}</span>`).join('');
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

function renderTeam() {
  const el = document.getElementById('team-list');
  if (!el) return;
  el.innerHTML = team.map((m, i) => `
    <div class="team-card reveal reveal-delay-${(i % 4) + 1}">
      <div class="team-img-placeholder"><span>Photo</span></div>
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
      <div class="team-img-placeholder"><span>Photo</span></div>
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
    <div class="contact-item" style="padding: 10px; border-bottom: 1px solid var(--line-color);">
      <h4 style="color: var(--accent); margin-bottom: 4px; font-size: 0.9rem;">${c.label}</h4>
      <p style="color: var(--text-secondary); font-size: 0.95rem;">${c.value}</p>
    </div>
  `).join('');
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
setFooterYear();

// Delay reveal setup to allow dynamic content to render
requestAnimationFrame(() => {
  requestAnimationFrame(setupScrollReveal);
});
