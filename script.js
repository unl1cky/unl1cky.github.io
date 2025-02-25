let isEnglish = true;

function toggleLanguage() {
    if (isEnglish) {
        document.getElementById("title").innerText = "Добро пожаловать на мой сайт";
        document.getElementById("intro").innerText = "Привет, я Димаш, я играю вартандар .";

        document.getElementById("about-title").innerText = "Обо мне";
        document.getElementById("about-text").innerText = "Привет! Я увлекаюсь дебатами. Я специализируюсь в английском. В свободное время мне нравится вартандар.";

        document.getElementById("projects-title").innerText = "Мои проекты";
        document.getElementById("project1").innerText = "сигма.";
        document.getElementById("project2").innerText = "альфа.";
        document.getElementById("project3").innerText = "Сугма.";

        document.getElementById("contact-title").innerText = "Связаться со мной";
        document.getElementById("email").innerText = "Электронная почта: dnur5345@gmail.com";
        document.getElementById("github").innerHTML = "GitHub: <a href='https://github.com/unl1cky' target='_blank'>github.com/unl1cky</a>";

        document.getElementById("footer-text").innerText = "© 2025 Димаш. Все права защищены.";

        document.getElementById("translate-btn").innerText = "Translate to English";
    } else {
        document.getElementById("title").innerText = "Welcome to My Website";
        document.getElementById("intro").innerText = "Hi, I'm [Your Name], a [Your Profession or Interest].";

        document.getElementById("about-title").innerText = "About Me";
        document.getElementById("about-text").innerText = "Hello! I'm passionate about [your interests]. I specialize in [your skills]. In my free time, I enjoy [your hobbies].";

        document.getElementById("projects-title").innerText = "My Projects";
        document.getElementById("project1").innerText = "Description of your project.";
        document.getElementById("project2").innerText = "Description of your project.";
        document.getElementById("project3").innerText = "Description of your project.";

        document.getElementById("contact-title").innerText = "Contact Me";
        document.getElementById("email").innerText = "Email: your.email@example.com";
        document.getElementById("github").innerHTML = "GitHub: <a href='https://github.com/yourusername' target='_blank'>github.com/yourusername</a>";

        document.getElementById("footer-text").innerText = "© 2025 [Your Name]. All rights reserved.";

        document.getElementById("translate-btn").innerText = "Translate to Russian";
    }
    isEnglish = !isEnglish;
}