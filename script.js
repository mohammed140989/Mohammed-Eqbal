cat > script.js <<'EOF'
const yearEl = document.getElementById('year');
const todayEl = document.getElementById('today');
const repoLink = document.getElementById('repoLink');

yearEl.textContent = new Date().getFullYear();
todayEl.textContent = new Date().toLocaleDateString('ar');

repoLink.href = window.location.href.replace(/\/$/, '');

const toast = document.getElementById('toast');
const toastBtn = document.getElementById('toastBtn');
const sendBtn = document.getElementById('sendBtn');

function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('show'), 1800);
}

toastBtn.addEventListener('click', () => showToast('✅ اشتغل كل شيء!'));
sendBtn.addEventListener('click', () => showToast('📨 تم (تجريبيًا)'));

const menuBtn = document.getElementById('menuBtn');
const links = document.querySelector('.links');

menuBtn.addEventListener('click', () => {
  const opened = links.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', opened ? 'true' : 'false');
});
EOF
