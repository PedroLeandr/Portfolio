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

const root = document.documentElement;
const toggleButton = document.getElementById('toggletheme');
const themeIcon = document.getElementById('themeicon');

toggleButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('light-theme');

    if (isDarkMode) {
        root.style.setProperty('--white-color', '#093474');
        root.style.setProperty('--landing-gradient', '#E3F2FD, #BBDEFB, #90CAF9');
        root.style.setProperty('--header-gradient', '#E3F2FD, #E3F2FD, #E3F2FD, transparent');
        root.style.setProperty('--landing-button-color', 'transparent');
        root.style.setProperty('--landing-button-text-hover-color', '#1565C0');
        root.style.setProperty('--background-color', '#E3F2FD');
        root.style.setProperty('--text-color', '#546E7A');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        root.style.setProperty('--white-color', '#EDEDED');
        root.style.setProperty('--landing-gradient', '#1E1E2C, #5D3F6E, #8A4C93');
        root.style.setProperty('--header-gradient', '#1E1E2C, #1E1E2C, #1E1E2C, transparent');
        root.style.setProperty('--landing-button-color', 'transparent');
        root.style.setProperty('--landing-button-text-hover-color', '#4B0082');
        root.style.setProperty('--background-color', '#1E1E2C');
        root.style.setProperty('--text-color', '#A0A0B2');
        themeIcon.classList.replace('fa-moon', 'fa-sun')
    }
});
