const questions = [
    {
        question: "Apa itu bahasa pemrograman?",
        choices: ["Alat untuk membuat aplikasi", "Sekumpulan perintah untuk mengendalikan komputer", "Alat untuk mendesain website", "Perangkat keras komputer"],
        correct: 1
    },
    {
        question: "Apa fungsi dari 'if' dalam pemrograman?",
        choices: ["Menyimpan data", "Mengulang perintah", "Menyaring kondisi atau memilih perintah", "Menyelesaikan perhitungan"],
        correct: 2
    },
    {
        question: "Apa yang dimaksud dengan 'array'?",
        choices: ["Tipe data yang menyimpan banyak nilai dalam satu variabel", "Proses pengulangan dalam pemrograman", "Tipe data untuk menyimpan angka", "Struktur untuk menyimpan satu nilai dalam variabel"],
        correct: 0
    },
    {
        question: "Apa itu debugging dalam pemrograman?",
        choices: ["Menambahkan fitur baru dalam program", "Mengidentifikasi dan memperbaiki kesalahan dalam kode", "Menulis ulang kode dengan bahasa lain", "Mengubah tampilan program"],
        correct: 1
    },
    {
        question: "Apa arti dari istilah 'looping' dalam pemrograman?",
        choices: ["Proses menghentikan program", "Proses menjalankan program secara berulang", "Proses menulis kode dalam program", "Proses menyimpan data"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const questionObj = questions[currentQuestion];
    document.getElementById('question').textContent = questionObj.question;

    const choices = document.querySelectorAll('.choice');
    questionObj.choices.forEach((choice, index) => {
        choices[index].textContent = choice;
    });
}

function checkAnswer(selected) {
    const questionObj = questions[currentQuestion];
    if (selected === questionObj.correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    document.getElementById('score').textContent = `Skor Anda: ${score} dari ${questions.length}`;
}

startQuiz();