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
