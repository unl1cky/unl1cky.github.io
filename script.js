let qnaData = [];

function addQuestion() {
    const input = document.getElementById("question-input");
    const questionText = input.value.trim();

    if (questionText === "") return;

    const answerText = prompt("Answer the question:");
    
    if (answerText === null || answerText.trim() === "") return;

    qnaData.push({ question: questionText, answer: answerText });
    input.value = "";
    updateQnAList();
}

function updateQnAList() {
    const qnaList = document.getElementById("qna-list");
    qnaList.innerHTML = "";

    qnaData.forEach((qna, index) => {
        const qnaItem = document.createElement("div");
        qnaItem.classList.add("qna-item");
        qnaItem.innerHTML = `
            <p><strong>Q:</strong> ${qna.question}</p>
            <p><strong>A:</strong> ${qna.answer}</p>
            <button onclick="deleteQuestion(${index})">🗑️ Delete</button>
        `;
        qnaList.appendChild(qnaItem);
    });
}

function deleteQuestion(index) {
    qnaData.splice(index, 1);
    updateQnAList();
}

let isEnglish = true;

function toggleLanguage() {
    if (isEnglish) {
        document.getElementById("title").innerText = "Добро пожаловать на мой сайт";
        document.getElementById("intro").innerText = "Привет, я Димаш, я играю вартандар .";

        document.getElementById("about-title").innerText = "Обо мне";
        document.getElementById("about-text").innerText = "Привет! Я увлекаюсь дебатами sigma. Я специализируюсь в английском. В свободное время мне нравится вартандар.";

        document.getElementById("projects-title").innerText = "Мои проекты";
        document.getElementById("project1").innerText = "сигма.";
        document.getElementById("project2").innerText = "альфа.";
        document.getElementById("project3").innerText = "Сугма.";

        document.getElementById("qna").innerText = "Вопросы и ответы";

        document.getElementById("contact-title").innerText = "Связаться со мной";
        document.getElementById("email").innerText = " "📧 Электронная почта: dnur5345@gmail.com";
        document.getElementById("github").innerHTML = "💻GitHub: <a href='https://github.com/unl1cky' target='_blank'>github.com/unl1cky</a>";

        document.getElementById("translate-btn").innerText = "Translate to English";

        
    } else {
        document.getElementById("title").innerText = "Welcome to My Website";
        document.getElementById("intro").innerText = "Hi, I'm Dimash, a debater.";

        document.getElementById("about-title").innerText = "About Me";
        document.getElementById("about-text").innerText = "Hello! I'm passionate about debates. I specialize in English. In my free time, I enjoy War Thunder.";

        document.getElementById("projects-title").innerText = "My Projects";
        document.getElementById("project1").innerText = "Sigma.";
        document.getElementById("project2").innerText = "Alpha.";
        document.getElementById("project3").innerText = "Sugma.";

        document.getElementById("qna").innerText = "Q&A Section";

        document.getElementById("contact-title").innerText = "Contact Me";
        document.getElementById("email").innerText = "📧 Email: dnur5345@gmail.com";
        document.getElementById("github").innerHTML = "💻 GitHub: <a href='https://github.com/unl1cky' target='_blank'>github.com/unl1cky</a>";

        document.getElementById("footer-text").innerText = "© 2025 Dimash. All rights reserved.";

        document.getElementById("translate-btn").innerText = "Translate to Russian";
    }
    isEnglish = !isEnglish;
}
