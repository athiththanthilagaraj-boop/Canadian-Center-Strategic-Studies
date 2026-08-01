/* ============================================================================
   CCSS WEBSITE — RENDER LOGIC
   Reads the SITE object from content.js and builds the page. You should not
   need to edit this file to update content — edit content.js instead.
   ============================================================================ */

(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  // ---------------- NAV ----------------
  function renderNav() {
    const list = $("#nav-links");
    const mobile = $("#mobile-panel");
    SITE.nav.forEach((item) => {
      const a = `<a href="${item.href}">${escapeHtml(item.label)}</a>`;
      list.insertAdjacentHTML("beforeend", `<li>${a}</li>`);
      mobile.insertAdjacentHTML("beforeend", a);
    });
    mobile.insertAdjacentHTML(
      "beforeend",
      `<a href="#submissions" class="mobile-cta">Submit your work</a>`
    );

    $("#wordmark-full").textContent = SITE.org.name;
    $("#wordmark-sub").textContent = "STRATEGY · POLICY · SECURITY";

    const toggle = $("#nav-toggle");
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      mobile.classList.toggle("open");
    });
    mobile.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        toggle.classList.remove("open");
        mobile.classList.remove("open");
      }
    });
  }

  // ---------------- HERO ----------------
  function renderHero() {
    $("#hero-eyebrow").textContent = SITE.hero.eyebrow;
    $("#hero-coords").textContent = SITE.org.coordinates;
    $("#hero-heading").textContent = SITE.hero.heading;
    $("#hero-sub").textContent = SITE.hero.subhead;

    const ctaWrap = $("#hero-ctas");
    ctaWrap.innerHTML = `
      <a class="btn btn-primary" href="${SITE.hero.ctaPrimary.href}">${escapeHtml(SITE.hero.ctaPrimary.label)} →</a>
      <a class="btn btn-ghost" href="${SITE.hero.ctaSecondary.href}">${escapeHtml(SITE.hero.ctaSecondary.label)}</a>
    `;

    $("#stat-pubs").textContent = SITE.publications.length;
    $("#stat-team").textContent = SITE.team.length;
    $("#stat-location").textContent = SITE.org.founded;
  }

  // ---------------- PUBLICATIONS ----------------
  function renderPublications() {
    const grid = $("#pub-grid");
    grid.innerHTML = SITE.publications
      .map(
        (p) => `
      <article class="pub-card">
        <span class="pub-stamp">${escapeHtml(p.doc)} · OPEN SOURCE</span>
        <div class="pub-topic">${escapeHtml(p.topic)}</div>
        <h3><a href="article.html?id=${encodeURIComponent(p.id)}" style="color:inherit;">${escapeHtml(p.title)}</a></h3>
        <p class="pub-excerpt">${escapeHtml(p.excerpt)}</p>
        <div class="pub-foot">
          <span class="pub-author">${escapeHtml(p.author)}</span>
          <a class="pub-link" href="article.html?id=${encodeURIComponent(p.id)}">Read piece →</a>
        </div>
      </article>`
      )
      .join("");
  }

  // ---------------- PROGRAMS ----------------
  function renderPrograms() {
    const grid = $("#programs-grid");
    grid.innerHTML = SITE.programs
      .map(
        (p, i) => `
      <a class="program-card" href="${p.href}">
        <div class="program-index">${String(i + 1).padStart(2, "0")}</div>
        <h3>${escapeHtml(p.title)}</h3>
        <div class="program-sub">${escapeHtml(p.subtitle)}</div>
        <p>${escapeHtml(p.description)}</p>
      </a>`
      )
      .join("");
  }

  // ---------------- MISSION ----------------
  function renderMission() {
    $("#mission-heading").textContent = SITE.mission.heading;
    $("#mission-copy").innerHTML = SITE.mission.paragraphs
      .map((p) => `<p>${escapeHtml(p)}</p>`)
      .join("");
  }

  // ---------------- TEAM ----------------
  function renderTeam() {
    const grid = $("#team-grid");
    const sorted = [...SITE.team].sort((a, b) => a.rank - b.rank);
    grid.innerHTML = sorted
      .map(
        (m) => `
      <div class="team-card">
        <div class="team-name">${escapeHtml(m.name)}</div>
        <div class="team-role">${escapeHtml(m.role)}</div>
        <p class="team-bio">${escapeHtml(m.bio)}</p>
      </div>`
      )
      .join("");
  }

  // ---------------- SUBMISSIONS ----------------
  function renderSubmissions() {
    $("#submissions-heading").textContent = SITE.submissions.heading;
    $("#submissions-intro").textContent = SITE.submissions.intro;

    $("#rule-list").innerHTML = SITE.submissions.rules
      .map(
        (r, i) => `
      <li class="rule">
        <span class="rule-num">${String(i + 1).padStart(2, "0")}</span>
        <div>
          <div class="rule-title">${escapeHtml(r.title)}</div>
          <div class="rule-detail">${escapeHtml(r.detail)}</div>
        </div>
      </li>`
      )
      .join("");

    $("#submissions-note").textContent = SITE.submissions.note;

    $("#contrib-list").innerHTML = SITE.submissions.contributorRights
      .map((r) => `<li>${escapeHtml(r)}</li>`)
      .join("");

    const email = SITE.org.email;
    $("#email-cta").textContent = `Email your submission → ${email}`;
    $("#email-cta").href = `mailto:${email}`;
  }

  // ---------------- FOOTER ----------------
  function renderFooter() {
    $("#footer-word").textContent = SITE.org.shortName;
    $("#footer-addr").textContent = SITE.org.address;
    $("#footer-year").textContent = new Date().getFullYear();
    $("#footer-name").textContent = SITE.org.name;

    const linksCol = $("#footer-links-col");
    linksCol.innerHTML = SITE.nav
      .map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`)
      .join("");
  }

  // ---------------- SCROLL REVEAL ----------------
  function initReveal() {
    const cards = document.querySelectorAll(".pub-card");
    if (!("IntersectionObserver" in window)) {
      cards.forEach((c) => c.classList.add("in-view"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((c) => obs.observe(c));
  }

  // ---------------- INIT ----------------
  document.addEventListener("DOMContentLoaded", () => {
    renderNav();
    renderHero();
    renderPublications();
    renderPrograms();
    renderMission();
    renderTeam();
    renderSubmissions();
    renderFooter();
    initReveal();
  });
})();
