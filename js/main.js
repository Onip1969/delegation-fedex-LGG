/* =====================================================
   CGSLB FedEx LGG — Scripts principaux
   ===================================================== */

// ─── Navigation mobile ───────────────────────────────
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

// ─── Lien actif selon la page courante ───────────────
document.querySelectorAll('.main-nav a').forEach(link => {
  if (link.href === location.href) link.classList.add('active');
});

// ─── Authentification Espace Membres ─────────────────
const SESSION_KEY = 'cgslb_auth';
const PASSWORD    = 'FedExLGG2025';   // ← Modifiez ce mot de passe

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

// ─── Modal de connexion ───────────────────────────────
const overlay     = document.getElementById('loginModal');
const loginForm   = document.getElementById('loginForm');
const loginError  = document.getElementById('loginError');
const loginBtn    = document.getElementById('openLogin');
const closeBtns   = document.querySelectorAll('.modal-close, .modal-cancel');
const membersArea = document.getElementById('membersArea');
const lockedArea  = document.getElementById('lockedArea');
const logoutBtn   = document.getElementById('logoutBtn');

function showMembers() {
  if (membersArea) membersArea.classList.add('active');
  if (lockedArea)  lockedArea.style.display = 'none';
  if (overlay)     overlay.classList.remove('active');
}

function showLocked() {
  if (membersArea) membersArea.classList.remove('active');
  if (lockedArea)  lockedArea.style.display = '';
}

if (loginBtn) {
  loginBtn.addEventListener('click', e => {
    e.preventDefault();
    if (isAuthenticated()) {
      showMembers();
    } else {
      overlay?.classList.add('active');
    }
  });
}

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => overlay?.classList.remove('active'));
});

overlay?.addEventListener('click', e => {
  if (e.target === overlay) overlay.classList.remove('active');
});

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const pwd = document.getElementById('passwordInput').value;
    if (login(pwd)) {
      loginError.classList.remove('show');
      showMembers();
    } else {
      loginError.classList.add('show');
      document.getElementById('passwordInput').value = '';
      document.getElementById('passwordInput').focus();
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', logout);
}

// Initialisation sur la page membres
if (lockedArea || membersArea) {
  if (isAuthenticated()) {
    showMembers();
  } else {
    showLocked();
  }
}
