document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetId === "header") {
            
            return;
        }

        if (targetElement) {
            e.preventDefault();
            const offsetPosition = targetElement.offsetTop - 124;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    });
});