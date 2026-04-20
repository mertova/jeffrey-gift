/* =====================================================
   SHARED UTILITIES
   ===================================================== */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function picturePath(levelNumber, filename) {
  return `../pictures/Level${levelNumber}/${filename}`;
}

function preloadImages(urls) {
  return Promise.all(urls.map(url => new Promise(resolve => {
    const img = new Image();
    img.onload = img.onerror = () => resolve(url);
    img.src = url;
  })));
}

function showReveal({ imageSrc, message, sub = '', buttonText = 'continue', onContinue }) {
  const overlay = document.getElementById('reveal');
  if (!overlay) return;
  overlay.innerHTML = `
    <div class="reveal-frame scanlines">
      <img src="${imageSrc}" alt="">
    </div>
    <div class="reveal-text">${message}</div>
    ${sub ? `<div class="reveal-sub">${sub}</div>` : ''}
    <button class="btn btn-solid" id="reveal-continue">${buttonText}</button>
  `;
  requestAnimationFrame(() => overlay.classList.add('visible'));
  document.getElementById('reveal-continue').addEventListener('click', () => {
    overlay.classList.remove('visible');
    if (typeof onContinue === 'function') onContinue();
  });

  // Play finale music if loaded
  if (window.finaleAudio) {
    window.finaleAudio.currentTime = 0;
    window.finaleAudio.volume = 0;
    window.finaleAudio.play().catch(() => {});
    let vol = 0;
    const fade = setInterval(() => {
      vol = Math.min(vol + 0.02, 0.7);
      window.finaleAudio.volume = vol;
      if (vol >= 0.7) clearInterval(fade);
    }, 80);
  }
}

/* Progress tracking */
const Progress = {
  key: 'jeffrey-gift-progress',
  get() {
    try { return JSON.parse(localStorage.getItem(this.key)) || {}; }
    catch { return {}; }
  },
  set(level) {
    const p = this.get();
    p[`level${level}`] = true;
    localStorage.setItem(this.key, JSON.stringify(p));
  },
  isDone(level) { return !!this.get()[`level${level}`]; },
  reset() { localStorage.removeItem(this.key); }
};

/* Music — one song per page, starts on first interaction */
function initMusic(src, volume) {
  if (!src) return;
  var vol = volume || 0.28;
  var audio = new Audio(src);
  audio.loop = true;
  audio.volume = 0;

  function startPlaying() {
    audio.play().then(function() {
      var current = 0;
      var fade = setInterval(function() {
        current = Math.min(current + 0.008, vol);
        audio.volume = current;
        if (current >= vol) clearInterval(fade);
      }, 80);
    }).catch(function() {});
  }

  // Start on first click or keypress anywhere on the page
  document.addEventListener('click', function go() {
    startPlaying();
    document.removeEventListener('click', go);
  }, { once: true });

  document.addEventListener('keydown', function go() {
    startPlaying();
    document.removeEventListener('keydown', go);
  }, { once: true });

  window.ambientAudio = audio;
  return audio;
}

function initFinaleMusic(src) {
  if (!src) return;
  try {
    window.finaleAudio = new Audio(src);
    window.finaleAudio.volume = 0;
  } catch(e) {}
}

/* Typewriter effect */
function typewrite(el, text, speed = 28) {
  el.textContent = '';
  let i = 0;
  const tick = () => {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(tick, speed + Math.random() * 20);
    }
  };
  tick();
}
