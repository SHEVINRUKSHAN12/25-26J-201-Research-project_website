/* ===================== DATA ===================== */
const objectives = [
  {
    title: "Interior Space Optimization",
    text: "Develop an AI-powered platform that optimizes interior space in residential homes, generating improved furniture placements and layouts for all rooms while integrating Vastu Vidya principles.",
  },
  {
    title: "Vastu Vidya & Design Correction",
    text: "Develop an AI-powered system that evaluates residential floor plans against Vastu Vidya principles and provides real-time guidance for room orientation and layout correction.",
  },
  {
    title: "Land Optimization & Plan Generation",
    text: "Develop an AI-based system for land optimization and plan generation that ensures efficient land usage while maintaining cultural alignment and planning feasibility.",
  },
  {
    title: "Exterior Space Optimization",
    text: "Design an AI-powered platform focused on improving the use of exterior spaces such as gardens, rooftops, and facades for functional, sustainable, and lifestyle-oriented outcomes.",
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
  },
];

const milestones = [
  { date: "Date TBD", title: "Proposal Presentation & Report", description: "Initial proposal presentation and report submission covering the project idea, scope, and planned approach.", marks: "12%", status: "completed" },
  { date: "May 1, 2025", title: "Progress Presentation I", description: "First progress review covering the initial implementation stage and overall project development status.", marks: "15%" },
  { date: "March 9, 2026", title: "Progress Presentation II", description: "Second progress review focused on advanced implementation progress, refinements, and readiness for completion.", marks: "18%" },
  { date: "Date TBD", title: "Final Presentation and VIVA", description: "Final presentation and viva assessment demonstrating the completed solution and evaluating each member's understanding.", marks: "20%" },
  { date: "Date TBD", title: "Final Report", description: "Comprehensive final project report documenting the full research, implementation, evaluation, and outcomes.", marks: "19%" },
  { date: "Date TBD", title: "Research Paper (published)", description: "Published research paper presenting the project's contribution, findings, and academic value.", marks: "10%" },
  { date: "Date TBD", title: "Website", description: "Project website submission showcasing the research, implementation details, milestones, and downloadable resources.", marks: "2%" },
  { date: "Date TBD", title: "Research Logbook, Status Document 1 & 2", description: "Continuous assessment based on research logbook maintenance and the submission of status documents 1 and 2.", marks: "4%" },
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
  { name: "Rathnasinghe S J R", id: "IT22908124", role: "Group Leader", summary: "Interior Space Optimization", photo: "assets/images/Rathnasinghe.png", linkedin: "#", email: "mailto:example@example.com" },
  { name: "Dinetha K A V", id: "IT22924278", role: "Group Member", summary: "Vastu Vidya & Design Correction", photo: "assets/images/Dinetha.png", linkedin: "#", email: "mailto:example@example.com" },
  { name: "Sunkalpani S M D R", id: "IT22914996", role: "Group Member", summary: "Land Optimization & Plan Generation", photo: "assets/images/Sunkalpani.png", linkedin: "#", email: "mailto:example@example.com" },
  { name: "Hansika J A J", id: "IT22346018", role: "Group Member", summary: "Exterior Space Optimization", photo: "assets/images/Hansika.png", linkedin: "#", email: "mailto:example@example.com" },
];

const supervisors = [
  { name: "Prof. Samantha Rajapaksha", role: "Supervisor", summary: "Sri Lanka Institute of Information Technology", photo: "assets/images/Prof.Samantha.png", linkedin: "#", email: "mailto:example@example.com" },
  { name: "Ms. Adya Dissanayake", role: "Co-Supervisor", summary: "Sri Lanka Institute of Information Technology", photo: "assets/images/Ms.Adya.png", linkedin: "#", email: "mailto:example@example.com" },
  { name: "Mr. Mangala Muhandiram", role: "External Supervisor", summary: "Architecture & Vastu Consultant", photo: "assets/images/Mr.mangala.png", linkedin: "#", email: "mailto:example@example.com" },
];

const contacts = [
  { label: "Group Email", value: "team.homescope@gmail.com" },
  { label: "University", value: "Sri Lanka Institute of Information Technology" },
];

/* ===================== HELPERS ===================== */
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getMilestoneStatus(milestone) {
  if (milestone.status === "completed") {
    return { className: "completed", label: "Completed" };
  }

  const dateLabel = milestone.date;
  if (!dateLabel || dateLabel.toLowerCase().includes("tbd")) {
    return { className: "planned", label: "Planned" };
  }

  const parsedDate = new Date(dateLabel);
  if (Number.isNaN(parsedDate.getTime())) {
    return { className: "planned", label: "Planned" };
  }

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const milestoneDate = new Date(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate());

  if (milestoneDate.getTime() <= today.getTime()) {
    return { className: "completed", label: "Completed" };
  }

  return { className: "upcoming", label: "Upcoming" };
}

function getFileBadge(item, kindLabel) {
  if (!item.href) {
    return kindLabel === "Document" ? "DOC" : "PPT";
  }

  const extension = item.href.split(".").pop();
  return extension ? extension.toUpperCase() : kindLabel.slice(0, 3).toUpperCase();
}

function renderProfileMedia(person) {
  if (person.photo) {
    const photo = escapeHtml(person.photo);
    return `
      <span class="profile-photo-bg" style="background-image: url('${photo}')"></span>
      <img class="profile-photo" src="${photo}" alt="${escapeHtml(person.name)}" onerror="this.parentElement.innerHTML='Photo'">
    `;
  }
  return "Photo";
}

function renderSocialLinks(person) {
  return `
    <div class="team-social-links" aria-label="${escapeHtml(person.name)} social links">
      <a class="team-social-link" href="${escapeHtml(person.linkedin || "#")}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(person.name)} LinkedIn">
        <span class="social-icon social-icon-linkedin">in</span>
      </a>
      <a class="team-social-link" href="${escapeHtml(person.email || "mailto:example@example.com")}" aria-label="Email ${escapeHtml(person.name)}">
        <span class="social-icon social-icon-mail">@</span>
      </a>
    </div>
  `;
}

/* ===================== RENDER FUNCTIONS ===================== */
function renderObjectives() {
  const el = document.getElementById("objectives-list");
  if (!el) return;

  el.innerHTML = objectives.map((item, index) => `
    <article class="obj-card reveal reveal-delay-${(index % 4) + 1}">
      <h4>${escapeHtml(item.title)}</h4>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join("");
}

function renderTechnologies() {
  const el = document.getElementById("tech-list");
  if (!el) return;

  el.innerHTML = technologies.map((item) => `
    <div class="tech-item">
      <div class="tech-icon-circle">
        <img src="${escapeHtml(item.icon)}" alt="${escapeHtml(item.name)}">
      </div>
      <p class="tech-name">${escapeHtml(item.name)}</p>
    </div>
  `).join("");
}

function renderMilestones() {
  const el = document.getElementById("milestones-list");
  if (!el) return;

  el.innerHTML = milestones.map((item) => {
    const status = getMilestoneStatus(item);
    return `
      <article class="timeline-item timeline-${status.className} reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-meta">
            <span class="timeline-date">${escapeHtml(item.date)}</span>
            <span class="timeline-status status-${status.className}">${escapeHtml(status.label)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <span class="timeline-badge">Marks Allocated: ${escapeHtml(item.marks)}</span>
        </div>
      </article>
    `;
  }).join("");
}

function renderDownloads(targetId, items, kindLabel) {
  const el = document.getElementById(targetId);
  if (!el) return;

  el.innerHTML = items.map((item) => {
    const ready = Boolean(item.href);
    const fileBadge = getFileBadge(item, kindLabel);
    const button = ready
      ? `<a class="download-btn ready" href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">Open File</a>`
      : `<span class="download-btn pending" aria-disabled="true">${escapeHtml(item.status)}</span>`;

    return `
      <article class="download-card">
        <div class="download-card-main">
          <span class="download-file-badge">${escapeHtml(fileBadge)}</span>
          <div class="download-card-info">
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.subtitle)}</p>
            <div class="download-card-meta">
              <span class="download-chip">${escapeHtml(kindLabel)}</span>
              <span class="download-status status-${ready ? "ready" : "pending"}">${escapeHtml(ready ? "Available" : "Pending")}</span>
            </div>
          </div>
        </div>
        ${button}
      </article>
    `;
  }).join("");
}

function renderTeam() {
  const el = document.getElementById("team-list");
  if (!el) return;

  el.innerHTML = team.map((member, index) => `
    <article class="team-card reveal reveal-delay-${(index % 4) + 1}">
      <div class="team-img-placeholder">${renderProfileMedia(member)}</div>
      <div class="team-role-tag">${escapeHtml(member.role)}</div>
      <h3>${escapeHtml(member.name)}</h3>
      <p class="team-id">${escapeHtml(member.id)}</p>
      <p class="team-summary">${escapeHtml(member.summary)}</p>
      ${renderSocialLinks(member)}
    </article>
  `).join("");
}

function renderSupervisors() {
  const el = document.getElementById("supervisors-list");
  if (!el) return;

  el.innerHTML = supervisors.map((member, index) => `
    <article class="team-card reveal reveal-delay-${(index % 3) + 1}">
      <div class="team-img-placeholder">${renderProfileMedia(member)}</div>
      <div class="team-role-tag">${escapeHtml(member.role)}</div>
      <h3>${escapeHtml(member.name)}</h3>
      <p class="team-summary">${escapeHtml(member.summary)}</p>
      ${renderSocialLinks(member)}
    </article>
  `).join("");
}

function renderContacts() {
  const el = document.getElementById("contact-list");
  if (!el) return;

  el.innerHTML = contacts.map((item) => `
    <div class="contact-item">
      <h4>${escapeHtml(item.label)}</h4>
      <p class="contact-value">${escapeHtml(item.value)}</p>
    </div>
  `).join("");
}

/* ===================== INTERACTION ===================== */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const note = document.getElementById("contact-form-note");
  if (!form || !note) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const recipient = contacts.find((item) => item.label.toLowerCase().includes("email"))?.value || "team.homescope@gmail.com";

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    note.textContent = "Your email app should open with this message addressed to the research team.";
    form.reset();
  });
}

function setupNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menu-toggle");
  const links = document.getElementById("nav-links");

  if (!navbar || !toggle || !links) return;

  const syncNavbarState = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
  };

  syncNavbarState();
  window.addEventListener("scroll", syncNavbarState);

  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
    toggle.textContent = links.classList.contains("open") ? "Close" : "Menu";
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.textContent = "Menu";
    });
  });
}

function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function setFooterYear() {
  const el = document.getElementById("footer-year");
  if (!el) return;

  el.textContent = `Copyright ${new Date().getFullYear()} HomeScope Research Project. All rights reserved.`;
}

/* ===================== INIT ===================== */
renderObjectives();
renderTechnologies();
renderMilestones();
renderDownloads("documents-list", documents, "Document");
renderDownloads("presentations-list", presentations, "Presentation");
renderTeam();
renderSupervisors();
renderContacts();
setupNavbar();
setupContactForm();
setFooterYear();

requestAnimationFrame(() => {
  requestAnimationFrame(setupScrollReveal);
});
