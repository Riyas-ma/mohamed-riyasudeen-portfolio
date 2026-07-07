const typedWords = [
  'Automotive BMS Firmware',
  'CDD development',
  'Cell balancing',
  'BMS diagnostics',
  'CANoe Validation Automation',
  'Functional Safety-Oriented Embedded C'
];

const projects = [
  {
    id: 'bms-driver-stack',
    theme: 'alt1',
    title: 'Production BMS Driver Stack',
    category: 'EV BMS Firmware',
    summary: 'CDD development for ADI battery monitoring devices on NXP S32K322, including acquisition of cell voltage, current, temperature, fault diagnostics, and production-oriented embedded integration.',
    stack: ['Embedded C', 'S32K322', 'ADBMS6832', 'ADBMS2950', 'SPI', 'Functional Safety'],
    outcomes: ['Developed production battery monitor drivers.', 'Implemented cell voltage, temperature, current, open-wire and IMD-related calculations.', 'Supported BMS integration and validation.'],
    challenges: ['Reliable sensing across battery monitoring paths.', 'Diagnostic handling for fault-related cases.', 'Maintainable low-level driver structure.'],
    responsibilities: ['Implemented low-level interfaces and measurement flows.', 'Supported bring-up and debugging.', 'Worked on production-oriented embedded integration.']
  },
  {
    id: 'cell-balancing-low-power',
    theme: 'alt2',
    title: 'Low-Power BMS Monitoring & Balancing',
    category: 'Battery Algorithms',
    summary: 'Implemented low-power monitoring, passive balancing support, and FS26-based power management features to reduce consumption and retain battery visibility in controller-off conditions.',
    stack: ['Embedded C', 'Passive Balancing', 'PWM', 'FS26', 'AFE', 'LPCM'],
    outcomes: ['Reduced delta voltage during charge cycles.', 'Achieved below 10 mV balancing in sleep mode.', 'Improved low-power monitoring workflow.'],
    challenges: ['Stable balancing across operating modes.', 'Threshold handling and transitions.', 'Maintaining monitoring visibility in low-power states.'],
    responsibilities: ['Implemented balancing control logic.', 'Worked on PMIC-driven power management.', 'Validated low-power sensing behavior.']
  },
  {
    id: 'canoe-validation-suite',
    theme: 'alt3',
    title: 'CANoe Dashboard & CAPL Validation Suite',
    category: 'Validation Tooling',
    summary: 'Created CANoe panels, CAPL scripts, CAPL DLL utilities, and analysis workflows for faster monitoring, fault injection, and repeated validation activities.',
    stack: ['Vector CANoe', 'CAPL', 'Fault Injection', 'Signal Monitoring'],
    outcomes: ['Built single-view BMS dashboard.', 'Added automation for repeated testing.', 'Accelerated validation by 40%.'],
    challenges: ['Usable multi-parameter visualization.', 'Reducing manual validation effort.', 'Repeatable fault scenarios.'],
    responsibilities: ['Created CANoe panels.', 'Developed CAPL automation.', 'Supported debugging with fault injection.']
  },
  {
    id: 'bingo-game-project',
    theme: 'alt4',
    title: 'BINGO Game — Terminal Edition',
    category: 'C PROGRAMMING / LINUX',
    summary: 'Feature-rich terminal BINGO game built in C on Ubuntu Linux, with dual game modes, background music via pthreads, ANSI color UI, and file-handling-based animations.',
    stack: ['C', 'GCC', 'Linux (Ubuntu)', 'pthreads', 'ANSI Terminal', 'File Handling', '2D Arrays'],
    outcomes: [
      'Fully playable terminal BINGO with Player vs Player and Player vs Computer modes.',
      'Background music running in parallel using POSIX threads without blocking gameplay.',
      'Cheer sound effect plays on every completed row, column, or diagonal.',
      'Rich colorful terminal UI built entirely using ANSI escape codes.',
      'Smooth game animations achieved using file handling with sequential frame reads.'
    ],
    challenges: [
      'Running audio in parallel without freezing the game — solved using pthreads.',
      'Building terminal animations without any graphics library — solved using file handling.',
      'Making the terminal UI colorful and readable — solved using ANSI escape codes.',
      'Making the computer opponent feel natural — randomized selection from available number pool.'
    ],
    responsibilities: [
      'Designed and implemented complete 5×5 BINGO grid logic with row, column, and diagonal checks.',
      'Built Player vs Player and Player vs Computer game modes with separate flow control.',
      'Integrated POSIX pthreads for parallel background music playback.',
      'Developed file-handling-based animation system for intro, transitions, and win sequences.',
      'Applied ANSI color coding throughout the terminal UI for an exciting visual experience.'
    ]
  }
];

const portfolioGrid = document.getElementById('portfolioGrid');
const projectView = document.getElementById('projectView');
const mainSections = document.getElementById('mainSections');
const navLinks = [...document.querySelectorAll('.nav-link')];
const typedText = document.getElementById('typedText');
const mobileToggle = document.getElementById('mobileToggle');
const sidebar = document.getElementById('sidebar');

function renderProjects() {
  portfolioGrid.innerHTML = projects.map((p, i) => `
    <article class="project-card reveal ${i % 3 === 1 ? 'delay-1' : i % 3 === 2 ? 'delay-2' : ''}">
      <div class="project-cover ${p.theme}">
        <div class="project-content">
          <span class="project-tag">${p.category}</span>
          <p> </p>
          <h3>${p.title}</h3>
          <p>${p.summary}</p>
          <a class="project-link" href="${p.id}.html">Project Details</a>
        </div>
      </div>
    </article>
  `).join('');
}

function projectById(id) {
  return projects.find(p => p.id === id);
}

function renderProjectView(project) {
  projectView.innerHTML = `
    <div class="project-shell">
      <a class="project-back" href="index.html#portfolio">← Back to portfolio</a>
      <div class="project-header">
        <div class="project-intro">
          <span class="eyebrow">${project.category}</span>
          <h2>${project.title}</h2>
          <p>${project.summary}</p>
          <div class="chips">${project.stack.map(s => `<span>${s}</span>`).join('')}</div>
        </div>
        <div class="project-meta">
          <span>Notes</span>
          <strong>Replace the placeholder screenshot blocks below with your real CANoe panels, oscilloscope captures, diagrams, and validation evidence.</strong>
        </div>
      </div>
      <div class="project-body">
        <article class="project-block"><h3>Outcomes</h3><ul>${project.outcomes.map(x => `<li>${x}</li>`).join('')}</ul></article>
        <article class="project-block"><h3>Challenges</h3><ul>${project.challenges.map(x => `<li>${x}</li>`).join('')}</ul></article>
        <article class="project-block"><h3>Responsibilities</h3><ul>${project.responsibilities.map(x => `<li>${x}</li>`).join('')}</ul></article>
        <article class="project-block full"><h3>Suggested screenshots</h3><div class="shot-grid">
          <div class="shot"><div class="shot-visual">Architecture Diagram</div><p>Add your block diagram or software architecture view here.</p></div>
          <div class="shot"><div class="shot-visual">Tool / Panel Screenshot</div><p>Add CANoe, debugger, oscilloscope, or trace screenshot here.</p></div>
          <div class="shot"><div class="shot-visual">Validation Evidence</div><p>Add results, graphs, or captured validation proof here.</p></div>
        </div></article>
      </div>
    </div>
  `;
}

function toggleProjectPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('project');
  const project = projectById(id);
  if (project) {
    mainSections.classList.add('hidden');
    projectView.classList.remove('hidden');
    renderProjectView(project);
    navLinks.forEach(link => link.classList.remove('active'));
  } else {
    projectView.classList.add('hidden');
    mainSections.classList.remove('hidden');
  }
}

function startTyping() {
  if (!typedText) return;
  let w = 0, c = 0, del = false;
  const tick = () => {
    const word = typedWords[w];
    if (!del) {
      c++;
      typedText.textContent = word.slice(0, c);
      if (c === word.length) {
        del = true;
        setTimeout(tick, 1300);
        return;
      }
    } else {
      c--;
      typedText.textContent = word.slice(0, c);
      if (c === 0) {
        del = false;
        w = (w + 1) % typedWords.length;
      }
    }
    setTimeout(tick, del ? 35 : 70);
  };
  tick();
}

function scrollSpy() {
  if (new URLSearchParams(window.location.search).get('project')) return;
  const sections = [...document.querySelectorAll('#mainSections .section[id]')];
  const pos = window.scrollY + 180;
  let active = 'home';
  sections.forEach(section => { if (pos >= section.offsetTop) active = section.id; });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${active}`));
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

navLinks.forEach(link => link.addEventListener('click', (e) => {
  e.preventDefault();
  if (new URLSearchParams(window.location.search).get('project')) {
    window.location.href = 'index.html' + link.getAttribute('href');
    return;
  }
  document.body.classList.remove('menu-open');
  const targetId = link.getAttribute('href').replace('#', '');
  const targetEl = document.getElementById(targetId);
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}));

mobileToggle?.addEventListener('click', () => document.body.classList.toggle('menu-open'));
document.addEventListener('click', e => {
  if (window.innerWidth <= 1024 && document.body.classList.contains('menu-open') && !sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
    document.body.classList.remove('menu-open');
  }
});
window.addEventListener('scroll', scrollSpy);
window.addEventListener('load', () => { renderProjects(); toggleProjectPage(); startTyping(); initReveal(); scrollSpy(); });
