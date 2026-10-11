const MAX = 200;
const $ = id => document.getElementById(id);
const msg = $('msg'), send = $('send'), dlg = $('dlg');

// Modal
document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => dlg.showModal()));
$('close').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

// Character counter
function update() {
  if (msg.value.length > MAX) msg.value = msg.value.slice(0, MAX);
  const n = msg.value.length;
  $('count').textContent = n + '/' + MAX + ' characters';
  $('remain').textContent = (MAX - n) + ' remaining';
  $('count').style.color = n >= MAX ? 'var(--bad)' : n >= 180 ? 'var(--warn)' : '';
  $('warn').textContent = n >= MAX ? 'Limit reached. You can\u2019t type more than ' + MAX + ' characters.' : '';
  const ready = msg.value.trim().length > 0;
  send.disabled = !ready;
  $('hint').textContent = ready ? '' : 'Write a few words to submit.';
}
msg.addEventListener('input', update);

send.addEventListener('click', () => {
  $('formBox').classList.add('hidden'); $('done').classList.remove('hidden');
  $('doneText').textContent = '\u201C' + msg.value.trim() + '\u201D';
});
$('again').addEventListener('click', () => {
  msg.value = ''; update();
  $('done').classList.add('hidden'); $('formBox').classList.remove('hidden');
});

$('menuBtn').addEventListener('click', () => {
  const open = $('mobileMenu').classList.toggle('hidden') === false;
  $('menuBtn').setAttribute('aria-expanded', open);
});
update();