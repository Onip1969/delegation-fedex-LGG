/* =====================================================
   CGSLB FedEx LGG — Scripts principaux
   ===================================================== */

const SESSION_KEY = 'cgslb_auth';
const PASSWORD    = 'FedExLGG2025';

function isAuthenticated() {
  return sessionStorage.getItem(SESSION_KEY) === '1';
}

function showModal() {
  const modal = document.getElementById('loginModal');
  if (modal) modal.style.display = 'flex';
}

function hideModal() {
  const modal = document.getElementById('loginModal');
  if (modal) modal.style.display = 'none';
}

function showMembers() {
  const locked  = document.getElementById('lockedArea');
  const members = document.getElementById('membersArea');
  if (locked)  locked.style.display  = 'none';
  if (members) members.style.display = 'block';
}

function showLocked() {
  const locked  = document.getElementById('lockedArea');
  const members = document.getElementById('membersArea');
  if (locked)  locked.style.display  = 'block';
  if (members) members.style.display = 'none';
}

window.addEventListener('load', function() {

  // État initial
  if (document.getElementById('lockedArea')) {
    if (isAuthenticated()) {
      showMembers();
    } else {
      showLocked();
    }
  }

  // Bouton "Se connecter" dans la page
  const openBtn = document.getElementById('openLogin');
  if (openBtn) {
    openBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showModal();
    });
  }

  // Fermer le modal
  const closeBtn = document.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', hideModal);
  }

  // Soumettre mot de passe
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const pwd = document.getElementById('passwordInput').value;
      if (pwd === PASSWORD) {
        sessionStorage.setItem(SESSION_KEY, '1');
        hideModal();
        showMembers();
      } else {
        const err = document.getElementById('loginError');
        if (err) err.style.display = 'block';
      }
    });
  }

  // Déconnexion
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      sessionStorage.removeItem(SESSION_KEY);
      location.reload();
    });
  }

  // Navigation mobile
  const hamburger = document.querySelector('.hamburger');
  const mainNav   = document.querySelector('.main-nav');
  if (hamburger && mainNav) {
    hamburger.addEventListener('click', function() {
      mainNav.classList.toggle('open');
    });
  }

});
