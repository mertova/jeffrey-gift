/* =====================================================
   Level 1 — Pair Matching game logic
   15 pairs · 5 lives · penalty restart · collage win
   ===================================================== */

(function () {
  const board       = document.getElementById('board');
  const foundEl     = document.getElementById('found');
  const movesEl     = document.getElementById('moves');
  const livesFill   = document.getElementById('lives-fill');
  const livesCount  = document.getElementById('lives-count');

  const penaltyOverlay = document.getElementById('penalty-overlay');
  const penaltyBtn     = document.getElementById('penalty-btn');
  const collageOverlay = document.getElementById('collage-overlay');
  const collageGrid    = document.getElementById('collage-grid');
  const collageBtn     = document.getElementById('collage-btn');

  const { pairs, maxLives } = LEVEL1_CONFIG;

  let lives   = maxLives;
  let moves   = 0;
  let matched = 0;
  let first   = null;
  let second  = null;
  let lock    = false;

  // Build collage grid upfront (hidden until win)
  LEVEL1_CONFIG.collageImages.forEach(src => {
    const img = document.createElement('img');
    img.src = `../pictures/Level1/${src}`;
    img.alt = '';
    img.loading = 'lazy';
    collageGrid.appendChild(img);
  });

  // Build and shuffle deck (each image appears twice)
  const deck = shuffle(
    pairs.flatMap((p, id) => [
      { pairId: id, image: p.image, caption: p.caption },
      { pairId: id, image: p.image, caption: p.caption },
    ])
  );

  // Render cards
  deck.forEach(entry => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.pairId = entry.pairId;
    card.dataset.caption = entry.caption;
    card.innerHTML = `
      <div class="card-face card-back"></div>
      <div class="card-face card-front">
        <img src="../pictures/Level1/${entry.image}" alt="" loading="lazy">
      </div>
    `;
    card.addEventListener('click', () => handleClick(card));
    board.appendChild(card);
  });

  updateLivesBar();

  // ── Game logic ──

  function handleClick(card) {
    if (lock) return;
    if (card.classList.contains('flipped')) return;
    if (card.classList.contains('matched')) return;

    card.classList.add('flipped');

    if (!first) {
      first = card;
      return;
    }

    second = card;
    moves++;
    movesEl.textContent = moves;
    lock = true;

    if (first.dataset.pairId === second.dataset.pairId) {
      // ✓ Match
      first.classList.add('matched');
      second.classList.add('matched');
      matched++;
      foundEl.textContent = matched;
      resetTurn();
      if (matched === pairs.length) setTimeout(showWin, 700);

    } else {
      // ✗ Wrong pair — lose a life
      const a = first, b = second;
      setTimeout(() => {
        a.classList.add('wrong-flash');
        b.classList.add('wrong-flash');
        setTimeout(() => {
          a.classList.remove('flipped', 'wrong-flash');
          b.classList.remove('flipped', 'wrong-flash');
          loseLife();
          resetTurn();
        }, 500);
      }, 600);
    }
  }

  function resetTurn() {
    [first, second, lock] = [null, null, false];
  }

  function loseLife() {
    lives = Math.max(lives - 1, 0);
    updateLivesBar();
    if (lives === 0) setTimeout(showPenalty, 300);
  }

  function updateLivesBar() {
    const pct = (lives / maxLives) * 100;
    livesFill.style.width = pct + '%';
    livesCount.textContent = lives;

    const critical = lives <= 1;
    livesFill.classList.toggle('critical', critical);
    livesCount.classList.toggle('critical', critical);
  }

  // ── Penalty (lives = 0) ──

  function showPenalty() {
    penaltyOverlay.classList.add('visible');
  }

  penaltyBtn.addEventListener('click', () => {
    // Fade out and fully restart
    penaltyOverlay.classList.remove('visible');
    setTimeout(() => location.reload(), 400);
  });

  // ── Win (all pairs matched) ──

  function showWin() {
    Progress.set(1);
    collageOverlay.classList.add('visible');
  }

  collageBtn.addEventListener('click', () => {
    collageOverlay.classList.remove('visible');
    setTimeout(() => {
      document.getElementById('yearone-overlay').classList.add('visible');
    }, 400);
  });

  document.getElementById('yearone-btn').addEventListener('click', () => {
    document.getElementById('yearone-overlay').classList.remove('visible');
    setTimeout(() => {
      window.location.href = '../level2/index.html';
    }, 400);
  });

})();
