document.addEventListener("DOMContentLoaded", function () {
    const openMenuBtn = document.getElementById("openMenu");
    const closeMenuBtn = document.getElementById("closeMenu");
    const popupMenu = document.getElementById("popupMenu");

    // Open menu
    openMenuBtn.addEventListener("click", function () {
        popupMenu.style.display = "block";
        setTimeout(() => {
            popupMenu.classList.add("show");
        }, 10); // Add slight delay for smooth animation
    });

    // Close menu
    closeMenuBtn.addEventListener("click", function () {
        popupMenu.classList.remove("show");
        setTimeout(() => {
            popupMenu.style.display = "none";
        }, 300);
    });

    // Close when clicking outside menu
    popupMenu.addEventListener("click", function (event) {
        if (event.target === popupMenu) {
            popupMenu.classList.remove("show");
            setTimeout(() => {
                popupMenu.style.display = "none";
            }, 300);
        }
    });
});