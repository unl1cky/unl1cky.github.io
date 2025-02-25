function translateToRussian() {
    document.getElementById("title").innerText = "Добро пожаловать на мой сайт";
    document.getElementById("intro").innerText = "Привет, я Димаш,я люблю играть в вартандар.";

    document.getElementById("about-title").innerText = "Обо мне";
    document.getElementById("about-text").innerText = "Привет! Я увлекаюсь дебатами. Я специализируюсь в английском. В свободное время мне нравится играть в вартандар.";

    document.getElementById("projects-title").innerText = "Мои проекты";
    document.getElementById("project1").innerText = "Приложение для поддержания голодающих детей.";
    document.getElementById("project2").innerText = "Описание вашего проекта.";
    document.getElementById("project3").innerText = "Описание вашего проекта.";

    document.getElementById("contact-title").innerText = "Связаться со мной";
    document.getElementById("email").innerText = "Электронная почта: dnur5345@gmail.com";
    document.getElementById("github").innerHTML = "GitHub: <a href='https://github.com/yourusername' target='_blank'>github.com/yourusername</a>";

    document.getElementById("footer-text").innerText = "© 2025 Dimash Nurkenuly. Все права защищены.";
}