/* =====================================================
   CGSLB FedEx LGG — Composants HTML réutilisables
   ===================================================== */

const TOPBAR_HTML = `
<div class="topbar">
  <div class="container">
    <span>📍 FedEx Express — Aéroport de Liège (LGG) | Bierset</span>
    <div class="topbar-links">
      <a href="tel:+3242395976">📞 04 239 59 76</a>
      <a href="mailto:lgg.cgslb@gmail.com">✉️ lgg.cgslb@gmail.com</a>
    </div>
  </div>
</div>`;

const HEADER_HTML = `
<header class="site-header">
  <div class="container header-inner">
    <a href="index.html" class="logo">
      <div class="logo-badge">CGSLB</div>
      <div class="logo-text">
        <strong>Section FedEx LGG</strong>
        <span>Syndicat Libéral — Aéroport de Liège</span>
      </div>
    </a>
    <button class="hamburger" aria-label="Menu" aria-expanded="false">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
    <nav class="main-nav" role="navigation" aria-label="Navigation principale">
      <a href="index.html">Accueil</a>
      <a href="actualites.html">Actualités</a>
      <a href="services.html">Services</a>
      <a href="documents.html">Documents</a>
      <a href="contact.html">Contact</a>
      <a href="espace-membres.html" class="nav-members" id="openLogin">🔒 Espace Membres</a>
    </nav>
  </div>
</header>`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        <div class="logo-badge" style="display:inline-block;font-size:1rem;padding:.3rem .7rem">CGSLB</div>
        <p>La section CGSLB de FedEx LGG défend les droits et intérêts des travailleurs de FedEx Express à l'Aéroport de Liège depuis plus de 20 ans.</p>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="index.html">Accueil</a></li>
          <li><a href="actualites.html">Actualités</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="documents.html">Documents publics</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Membres</h4>
        <ul>
          <li><a href="espace-membres.html">Espace membres</a></li>
          <li><a href="contact.html">Contacter un délégué</a></li>
          <li><a href="cgslb.be">Site national CGSLB</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:cgslb.lgg@skynet.be">cgslb.lgg@skynet.be</a></li>
          <li><a href="tel:+3242348000">04 234 80 00</a></li>
          <li>Aéroport de Liège<br>B-4460 Bierset</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} CGSLB Section FedEx LGG — Tous droits réservés</p>
      <div>
        <a href="#">Mentions légales</a> &middot;
        <a href="#">Politique de confidentialité</a>
      </div>
    </div>
  </div>
</footer>`;

const LOGIN_MODAL_HTML = `
<div class="modal-overlay" id="loginModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
  <div class="modal">
    <button class="modal-close" aria-label="Fermer">✕</button>
    <div class="modal-logo">
      <span class="badge badge-yellow" style="font-size:1.1rem;padding:.5rem 1rem">CGSLB</span>
    </div>
    <h2 id="modalTitle">Espace Membres</h2>
    <p class="subtitle">Veuillez entrer votre mot de passe pour accéder à l'espace réservé aux membres.</p>
    <div class="form-error" id="loginError">
      ❌ Mot de passe incorrect. Veuillez réessayer.
    </div>
    <form id="loginForm" novalidate>
      <div class="form-group">
        <label for="passwordInput">Mot de passe</label>
        <input type="password" id="passwordInput" placeholder="Entrez votre mot de passe"
               autocomplete="current-password" required autofocus />
      </div>
      <button type="submit" class="btn btn-blue btn-full">Se connecter →</button>
    </form>
    <p style="text-align:center;font-size:.8rem;color:#9CA3AF;margin-top:1rem">
      Mot de passe oublié ? Contactez un délégué syndical.
    </p>
  </div>
</div>`;

document.addEventListener('DOMContentLoaded', () => {
  const topbarSlot  = document.getElementById('topbar-slot');
  const headerSlot  = document.getElementById('header-slot');
  const footerSlot  = document.getElementById('footer-slot');
  const modalSlot   = document.getElementById('modal-slot');

  if (topbarSlot) topbarSlot.innerHTML  = TOPBAR_HTML;
  if (headerSlot) headerSlot.innerHTML  = HEADER_HTML;
  if (footerSlot) footerSlot.innerHTML  = FOOTER_HTML;
  if (modalSlot)  modalSlot.innerHTML   = LOGIN_MODAL_HTML;
});
