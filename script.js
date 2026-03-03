// App State
let currentChapter = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// DOM Elements
const sections = {
    menu: document.getElementById('menu-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen')
};

const dom = {
    chapterList: document.getElementById('chapter-list'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    feedbackBox: document.getElementById('feedback-box'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackText: document.getElementById('feedback-text'),
    feedbackIcon: document.getElementById('feedback-icon'),
    nextBtn: document.getElementById('next-btn'),
    hintBtn: document.getElementById('hint-btn'),
    questionCounter: document.getElementById('question-counter'),
    progressBar: document.getElementById('quiz-progress-bar'),
    finalScore: document.getElementById('final-score'),
    totalQuestions: document.getElementById('total-questions')
};

// Utility: Shuffle Array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize
function init() {
    renderChapters();

    document.getElementById('back-to-menu').addEventListener('click', showMenu);
    dom.nextBtn.addEventListener('click', nextQuestion);
    dom.hintBtn.addEventListener('click', showHint);
    document.getElementById('finish-btn').addEventListener('click', showMenu);
}

function renderChapters() {
    dom.chapterList.innerHTML = '';
    QUIZ_DATA.forEach(chapter => {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.innerHTML = `
            <div class="chapter-info">
                <h3>${chapter.title}</h3>
                <p>${chapter.description}</p>
                <small>${chapter.questions.length} 문제</small>
            </div>
            <div class="start-badge">시작</div>
        `;
        card.onclick = () => startChapter(chapter);
        dom.chapterList.appendChild(card);
    });
}

function showScreen(screenId) {
    Object.values(sections).forEach(s => s.classList.add('hidden'));
    sections[screenId].classList.remove('hidden');
}

function startChapter(chapter) {
    if (!chapter.questions || chapter.questions.length === 0) {
        alert("이 챕터는 준비 중입니다.");
        return;
    }
    currentChapter = chapter;

    // Deep clone and shuffle questions
    currentQuestions = chapter.questions.map(q => {
        const optionsWithOriginal = q.options.map((opt, i) => ({
            text: opt,
            isCorrect: i === q.answer
        }));
        return {
            ...q,
            shuffledOptions: shuffle([...optionsWithOriginal])
        };
    });
    shuffle(currentQuestions);

    currentQuestionIndex = 0;
    score = 0;
    showScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    answered = false;
    const q = currentQuestions[currentQuestionIndex];

    dom.questionText.innerText = q.question;
    dom.optionsContainer.innerHTML = '';

    q.shuffledOptions.forEach((opt, idx) => {
        const btn = document.createElement('div');
        btn.className = 'option';
        const prefix = String.fromCharCode(65 + idx);
        btn.innerHTML = `
            <span class="option-prefix">${prefix}</span>
            <span class="option-text">${opt.text}</span>
        `;
        btn.onclick = () => checkAnswer(idx);
        dom.optionsContainer.appendChild(btn);
    });

    dom.feedbackBox.classList.add('hidden');
    dom.nextBtn.classList.add('hidden');
    dom.hintBtn.classList.remove('hidden');

    updateQuizUI();
}

function updateQuizUI() {
    const total = currentQuestions.length;
    dom.questionCounter.innerText = `${currentQuestionIndex + 1} / ${total}`;
    const progress = ((currentQuestionIndex + 1) / total) * 100;
    dom.progressBar.style.width = `${progress}%`;
}

function checkAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const q = currentQuestions[currentQuestionIndex];
    const isCorrect = q.shuffledOptions[selectedIndex].isCorrect;

    if (isCorrect) score++;

    const options = dom.optionsContainer.children;
    q.shuffledOptions.forEach((opt, idx) => {
        if (opt.isCorrect) {
            options[idx].classList.add('correct');
        } else if (idx === selectedIndex && !isCorrect) {
            options[idx].classList.add('wrong');
        }
    });

    // Show Feedback
    dom.feedbackBox.classList.remove('hidden');
    dom.feedbackBox.style.borderLeftColor = isCorrect ? 'var(--success)' : 'var(--error)';
    dom.feedbackTitle.innerText = isCorrect ? '정답입니다!' : '오답입니다.';
    dom.feedbackIcon.innerText = isCorrect ? '✓' : '✕';
    dom.feedbackText.innerText = q.explanation;

    dom.nextBtn.classList.remove('hidden');
    dom.hintBtn.classList.add('hidden');

    if (currentQuestionIndex === currentQuestions.length - 1) {
        dom.nextBtn.innerText = '결과 보기';
    } else {
        dom.nextBtn.innerText = '다음 문제';
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function showHint() {
    const q = currentQuestions[currentQuestionIndex];
    alert(`💡 힌트: ${q.hint || "질문을 천천히 다시 읽어보세요."}`);
}

function showResults() {
    dom.finalScore.innerText = score;
    dom.totalQuestions.innerText = currentQuestions.length;
    showScreen('result');
}

function showMenu() {
    showScreen('menu');
}

// Start the app
init();
