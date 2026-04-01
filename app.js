/* ══════════════════════════════════════════════════════════
   PRN232 QUIZ — APP LOGIC
   ══════════════════════════════════════════════════════════ */

// ── State ──────────────────────────────────────────────────
const state = {
  lang: 'en',
  pool: [],
  index: 0,
  score: 0,
  answered: false,
  chapter: 'all',
  selected: new Set(),   // for multi-select questions
};

// ── DOM refs ───────────────────────────────────────────────
const $ = id => document.getElementById(id);

const screens = {
  home:   $('screen-home'),
  quiz:   $('screen-quiz'),
  result: $('screen-result'),
};

// ── Utility ────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

// ── Language toggle ────────────────────────────────────────
$('lang-toggle').addEventListener('click', () => {
  state.lang = state.lang === 'en' ? 'vi' : 'en';
  document.body.classList.toggle('lang-vi', state.lang === 'vi');
});

// ── Build HOME screen ──────────────────────────────────────
function buildHome() {
  const chapterMap = {};
  questions.forEach(q => {
    chapterMap[q.chapter] = (chapterMap[q.chapter] || 0) + 1;
  });

  const grid = $('chapter-grid');
  grid.innerHTML = '';

  // Sort chapters Ch01 → Ch10
  const sorted = Object.entries(chapterMap).sort((a, b) => a[0].localeCompare(b[0]));

  sorted.forEach(([ch, count]) => {
    const btn = document.createElement('button');
    btn.className = 'chapter-btn';
    btn.innerHTML = `
      <div class="ch-code">${ch}</div>
      <div class="ch-count">${count} question${count > 1 ? 's' : ''}</div>
    `;
    btn.addEventListener('click', () => startQuiz(ch));
    grid.appendChild(btn);
  });
}

$('btn-all').addEventListener('click', () => startQuiz('all'));

// ── Start Quiz ─────────────────────────────────────────────
function startQuiz(chapter) {
  state.chapter  = chapter;
  state.index    = 0;
  state.score    = 0;
  state.answered = false;
  state.selected = new Set();

  let pool = chapter === 'all'
    ? [...questions]
    : questions.filter(q => q.chapter === chapter);

  if ($('shuffle-check').checked) pool = shuffle(pool);
  state.pool = pool;

  $('quiz-chapter-label').textContent = chapter === 'all' ? 'All Chapters' : chapter;
  $('score-total').textContent = pool.length;
  $('score-live').textContent  = 0;

  showScreen('quiz');
  renderQuestion();
}

// ── Render current question ────────────────────────────────
function renderQuestion() {
  const q = state.pool[state.index];
  state.answered = false;
  state.selected = new Set();

  // Progress bar
  const pct = (state.index / state.pool.length) * 100;
  $('progress-bar').style.width = pct + '%';
  $('quiz-progress').textContent = `${state.index + 1} / ${state.pool.length}`;

  // Question text
  const multiTag = q.multi
    ? '<span class="multi-badge lang-en">Multiple answers</span><span class="multi-badge lang-vi">Nhiều đáp án</span>'
    : '';
  $('question-text').innerHTML = `
    <div class="q-en">${state.index + 1}. ${escHtml(q.en)} ${multiTag}</div>
    <div class="q-vi">${escHtml(q.vi)}</div>
  `;

  // Options
  const list = $('options-list');
  list.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.label = opt.label;
    btn.innerHTML = `
      <span class="option-label">${escHtml(opt.label)}</span>
      <span class="option-text">
        <div class="opt-en">${escHtml(opt.en)}</div>
        <div class="opt-vi">${escHtml(opt.vi)}</div>
      </span>
    `;

    if (q.multi) {
      btn.addEventListener('click', () => handleMultiToggle(btn, q));
    } else {
      btn.addEventListener('click', () => handleSingleAnswer(btn, q));
    }
    list.appendChild(btn);
  });

  // Show/hide check button for multi
  if (q.multi) {
    $('check-btn-wrap').classList.remove('hidden');
    $('btn-check').disabled = true;
    // Remove old listener and add fresh one
    const newBtn = $('btn-check').cloneNode(true);
    $('btn-check').parentNode.replaceChild(newBtn, $('btn-check'));
    $('btn-check').disabled = true;
    $('btn-check').addEventListener('click', () => submitMultiAnswer(q));
  } else {
    $('check-btn-wrap').classList.add('hidden');
  }

  $('explanation-box').classList.add('hidden');
  $('question-nav').classList.add('hidden');
}

// ── Single answer ──────────────────────────────────────────
function handleSingleAnswer(clickedBtn, q) {
  if (state.answered) return;
  state.answered = true;

  const chosen  = clickedBtn.dataset.label;
  const correct = q.answer; // string

  const allBtns = $('options-list').querySelectorAll('.option-btn');
  allBtns.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.label === correct) {
      btn.classList.add(chosen === correct ? 'correct' : 'reveal');
    }
  });

  if (chosen === correct) {
    clickedBtn.classList.add('correct');
    state.score++;
    $('score-live').textContent = state.score;
  } else {
    clickedBtn.classList.add('wrong');
  }

  showExplanation(q);
  $('question-nav').classList.remove('hidden');
}

// ── Multi-select toggle ────────────────────────────────────
function handleMultiToggle(btn, q) {
  if (state.answered) return;
  const label = btn.dataset.label;

  if (state.selected.has(label)) {
    state.selected.delete(label);
    btn.classList.remove('selected');
  } else {
    state.selected.add(label);
    btn.classList.add('selected');
  }

  $('btn-check').disabled = state.selected.size === 0;
}

// ── Submit multi answer ────────────────────────────────────
function submitMultiAnswer(q) {
  if (state.answered) return;
  state.answered = true;

  const correctSet = new Set(q.answer); // array → Set
  let fullyCorrect = true;

  const allBtns = $('options-list').querySelectorAll('.option-btn');
  allBtns.forEach(btn => {
    btn.disabled = true;
    const label      = btn.dataset.label;
    const isCorrect  = correctSet.has(label);
    const isSelected = state.selected.has(label);

    btn.classList.remove('selected');

    if (isCorrect && isSelected) {
      btn.classList.add('correct');       // hit: correct and selected ✓
    } else if (!isCorrect && isSelected) {
      btn.classList.add('wrong');         // wrong selection ✗
      fullyCorrect = false;
    } else if (isCorrect && !isSelected) {
      btn.classList.add('reveal');        // missed correct answer
      fullyCorrect = false;
    }
  });

  if (fullyCorrect) {
    state.score++;
    $('score-live').textContent = state.score;
  }

  $('check-btn-wrap').classList.add('hidden');
  showExplanation(q);
  $('question-nav').classList.remove('hidden');
}

// ── Show explanation ───────────────────────────────────────
function showExplanation(q) {
  if (!q.explanation) return;
  $('explanation-body').innerHTML = formatExplanation(q.explanation);
  $('explanation-box').classList.remove('hidden');
}

// ── Next button ────────────────────────────────────────────
$('btn-next').addEventListener('click', () => {
  state.index++;
  if (state.index >= state.pool.length) {
    showResult();
  } else {
    renderQuestion();
  }
});

// ── Back button ────────────────────────────────────────────
$('btn-back').addEventListener('click', () => {
  if (confirm('Quit this quiz?')) showScreen('home');
});

// ── Result screen ──────────────────────────────────────────
function showResult() {
  const pct  = Math.round((state.score / state.pool.length) * 100);
  const icon = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : pct >= 40 ? '😅' : '💪';

  $('result-icon').textContent   = icon;
  $('result-score').textContent  = `${state.score} / ${state.pool.length}`;
  $('result-percent').textContent = `${pct}%`;

  const wrong = state.pool.length - state.score;
  $('result-breakdown').innerHTML = `
    <span class="rb-correct">✓ Correct: ${state.score}</span><br>
    <span class="rb-wrong">✗ Wrong: ${wrong}</span>
  `;

  showScreen('result');
}

$('btn-retry').addEventListener('click', () => startQuiz(state.chapter));
$('btn-home').addEventListener('click', () => showScreen('home'));

// ── Helpers ────────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatExplanation(text) {
  let html = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\n/g, '<br>');
  return html;
}

// ── Init ───────────────────────────────────────────────────
buildHome();
showScreen('home');
