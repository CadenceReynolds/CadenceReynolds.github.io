(() => {
    try {
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
    } catch (_) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})();