document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        html.classList.add('light-theme');
    }
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('light-theme');
            if (html.classList.contains('light-theme')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }
    const navLinks = document.querySelectorAll('.nav-link');
    const menuCheckbox = document.getElementById('menu-toggle');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuCheckbox) menuCheckbox.checked = false;
        });
    });
});