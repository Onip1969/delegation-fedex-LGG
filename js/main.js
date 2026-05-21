/* =====================================================
   CGSLB FedEx LGG — Scripts principaux
   ===================================================== */

// ── Navigation mobile ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const mainNav   = document.querySelector('.main-nav');
  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', mainNav.classList.contains('open'));
    });
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove('open');
      }
    });
  }

  // Lien actif selon la page courante
  document.querySelectorAll('.main-nav a').forEach(link => {
    if (link.href === location.href) link.classList.add('active');
  });

  // ── Authentification Espace Membres ──────────────────
  const SESSION_KEY = 'cgslb_auth';
  const PASSWORD    = 'FedExLGG2025';

  function isAuthenticated() {
    return sessionStorage.getItem(SESSION_KEY) === '1';
  }

  function login(password) {
    if (password === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1');
      return true;
    }
    return false;
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    location.reload();
  }

  // ── Modal de connexion ────────────────────────────────
  const overlay   = document.getElementById('loginModal');
  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');
  const openBtns  = document.querySelectorAll('#openLogin');
  const closeBtns = document.querySelectorAll('.modal-close');
  const lockedArea  = document.getElementById('lockedArea');
  const membersArea = document.getElementById('membersArea');
  const logoutBtn   = document.getElementById('logoutBtn');

  function showModal() {
    if (overlay) overlay.classList.add('active');
  }

  function hideModal() {
    if (overlay) overlay.classList.remove('active');
  }

  function showMembers() {
    if (lockedArea)  lockedArea.style.display  = 'none';
    if (membersArea) membersArea.style.display  = 'block';
  }

  function showLocked() {
    if (lockedArea)  lockedArea.style.display  = 'block';
    if (membersArea) membersArea.style.display  = 'none';
  }

  // État initial
  if (lockedArea && membersArea) {
    if (isAuthenticated()) {
      showMembers();
    } else {
      showLocked();
    }
  }

  // Ouvrir modal
  document.addEventListener('click', e => {
    if (e.target && (e.target.id === 'openLogin' || e.target.closest('#openLogin'))) {
      e.preventDefault();
      showModal();
    }
  });

  // Fermer modal
  closeBtns.forEach(btn => btn.addEventListener('click', hideModal));
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) hideModal();
    });
  }

  // Soumettre le formulaire
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const pwd = document.getElementById('passwordInput').value;
      if (login(pwd)) {
        hideModal();
        showMembers();
      } else {
        if (loginError) loginError.style.display = 'block';
      }
    });
  }

  // Déconnexion
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }

});
