let isEnglish = true;

function toggleLanguage() {
    if (isEnglish) {
        document.getElementById("title").innerText = "Добро пожаловать на мой сайт";
        document.getElementById("intro").innerText = "Привет, я Димаш, я играю в вартандар .";

        document.getElementById("about-title").innerText = "Обо мне";
        document.getElementById("about-text").innerText = "Привет! Я увлекаюсь дебатами. Я специализируюсь в английском. В свободное время мне нравится играть в вартандар.";

        document.getElementById("projects-title").innerText = "Мои проекты";
        document.getElementById("project1").innerText = "Рикролл.";
        document.getElementById("project2").innerText = "Сигма.";
        document.getElementById("project3").innerText = "Незн.";

        document.getElementById("contact-title").innerText = "Связаться со мной";
        document.getElementById("email").innerText = "Электронная почта: dnur5345@gmail.com";
        document.getElementById("github").innerHTML = "GitHub: <a href='https://github.com/unl1cky' target='_blank'>github.com/unl1cky</a>";

        document.getElementById("footer-text").innerText = "© 2025 Димаш. Все права защищены.";

        document.getElementById("translate-btn").innerText = "Translate to English";
    } else {
        document.getElementById("title").innerText = "Welcome to My Website";
        document.getElementById("intro").innerText = "Hi, I'm Dimash, a debater.";

        document.getElementById("about-title").innerText = "About Me";
        document.getElementById("about-text").innerText = "Hello! I'm passionate about debates. I specialize in English. In my free time, I enjoy playing war thunder.";

        document.getElementById("projects-title").innerText = "My Projects";
        document.getElementById("project1").innerText = "Rickroll.";
        document.getElementById("project2").innerText = "Sigma.";
        document.getElementById("project3").innerText = "Sugma.";

        document.getElementById("contact-title").innerText = "Contact Me";
        document.getElementById("email").innerText = "Email: dnur5345@gmail.com";
        document.getElementById("github").innerHTML = "GitHub: <a href='https://github.com/unl1cky' target='_blank'>github.com/uno1cky</a>";

        document.getElementById("footer-text").innerText = "© 2025 Dimash. All rights reserved.";

        document.getElementById("translate-btn").innerText = "Translate to Russian";
    }
    isEnglish = !isEnglish;
}