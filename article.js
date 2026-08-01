/* ============================================================================
   CCSS WEBSITE — ARTICLE PAGE RENDER LOGIC
   Reads ?id=<publication-id> from the URL, finds the matching entry in
   content.js, and renders the full article. Nothing here needs editing —
   to change what's shown, edit the publication's fields in content.js.
   ============================================================================ */

(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  function formatDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
  }

  function renderNavAndFooter() {
    const list = $("#nav-links");
    const mobile = $("#mobile-panel");
    SITE.nav.forEach((item) => {
      const href = item.href.startsWith("#") ? `index.html${item.href}` : item.href;
      const a = `<a href="${href}">${escapeHtml(item.label)}</a>`;
      list.insertAdjacentHTML("beforeend", `<li>${a}</li>`);
      mobile.insertAdjacentHTML("beforeend", a);
    });
    mobile.insertAdjacentHTML("beforeend", `<a href="index.html#submissions" class="mobile-cta">Submit your work</a>`);

    $("#wordmark-full").textContent = SITE.org.name;
    $("#wordmark-sub").textContent = "STRATEGY · POLICY · SECURITY";

    const toggle = $("#nav-toggle");
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      mobile.classList.toggle("open");
    });

    $("#footer-word").textContent = SITE.org.shortName;
    $("#footer-addr").textContent = SITE.org.address;
    $("#footer-year").textContent = new Date().getFullYear();
    $("#footer-name").textContent = SITE.org.name;
    $("#footer-links-col").innerHTML = SITE.nav
      .map((item) => {
        const href = item.href.startsWith("#") ? `index.html${item.href}` : item.href;
        return `<a href="${href}">${escapeHtml(item.label)}</a>`;
      })
      .join("");
  }

  function renderArticle() {
    const root = $("#article-root");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const pub = SITE.publications.find((p) => p.id === id);

    if (!pub) {
      root.innerHTML = `
        <div class="not-found">
          <h1>Piece not found</h1>
          <p style="color:var(--ink-soft); margin-top:16px;">We couldn't find that publication.</p>
          <a class="article-back" href="index.html#publications" style="margin-top:28px;">← Back to publications</a>
        </div>`;
      return;
    }

    document.title = `${pub.title} :: Canadian Center For Strategic Studies`;

    const bodyHtml = (pub.body || [pub.excerpt])
      .map((para) => `<p>${escapeHtml(para)}</p>`)
      .join("");

    const sourceHtml = pub.sourceUrl
      ? `<div class="article-source">Originally published on the CCSS site — <a href="${pub.sourceUrl}" target="_blank" rel="noopener">archived version →</a></div>`
      : "";

    root.innerHTML = `
      <a class="article-back" href="index.html#publications">← Back to publications</a>
      <div class="article-topic">${escapeHtml(pub.topic)}</div>
      <h1>${escapeHtml(pub.title)}</h1>
      <div class="article-meta">
        <span class="doc-tag">${escapeHtml(pub.doc)}</span>
        <span>${escapeHtml(pub.author)}</span>
        ${pub.date ? `<span>${formatDate(pub.date)}</span>` : ""}
      </div>
      <div class="article-body">${bodyHtml}</div>
      ${pub.authorBio ? `
      <div class="article-bio">
        <strong>${escapeHtml(pub.author)}</strong>
        ${escapeHtml(pub.authorBio)}
      </div>` : ""}
      ${sourceHtml}
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderNavAndFooter();
    renderArticle();
  });
})();
