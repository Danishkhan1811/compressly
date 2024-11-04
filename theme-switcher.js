// Get the toggle button container
const themeToggle = document.querySelector('.toggle-container');

// Check for saved theme preference, otherwise use system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

// Function to update theme
function updateTheme(isDark) {
    const root = document.documentElement;

    if (isDark) {
        root.style.setProperty('--main-text', '#0080ff');
        root.style.setProperty('--light-mode-text', '#000000');
        root.style.setProperty('--dark-mode-text', '#fff');
        root.style.setProperty('--light-mode-card', '#fff');
        root.style.setProperty('--dark-mode-card', '#2b2b2b');
        root.style.setProperty('--light-mode-shadow', 'rgba(0, 0, 0, 0.1)');
        root.style.setProperty('--dark-mode-shadow', 'rgba(255, 255, 255, 0.077)');
        document.body.style.backgroundImage = 'var(--dark-mode-bg)';
        themeToggle.classList.add('active');
    } else {
        root.style.setProperty('--main-text', '#0080ff');
        root.style.setProperty('--light-mode-text', '#000000');
        root.style.setProperty('--dark-mode-text', '#000000');
        root.style.setProperty('--light-mode-card', '#fff');
        root.style.setProperty('--dark-mode-card', '#fff');
        root.style.setProperty('--light-mode-shadow', 'rgba(0, 0, 0, 0.1)');
        root.style.setProperty('--dark-mode-shadow', 'rgba(0, 0, 0, 0.1)');
        document.body.style.backgroundImage = 'var(--light-mode-bg)';
        themeToggle.classList.remove('active');
    }
}

// Set initial theme
if (currentTheme === 'dark') {
    updateTheme(true);
} else if (currentTheme === 'light') {
    updateTheme(false);
} else {
    updateTheme(prefersDarkScheme.matches);
}

// Update toggle button function
function toggleButton(element) {
    const isDark = !element.classList.contains('active');
    updateTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        updateTheme(e.matches);
    }
});