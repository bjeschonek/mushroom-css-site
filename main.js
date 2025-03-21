document.addEventListener('DOMContentLoaded', function main() {
    const navToggleBtn = document.querySelector('[aria-controls="primary-nav"]');
    const primaryNav = document.querySelector('#primary-navigation');

    navToggleBtn.addEventListener('click', function toggleMenu() {
        const isNavOpened = navToggleBtn.getAttribute('aria-expanded');

        if (isNavOpened == 'false') {
            navToggleBtn.setAttribute('aria-expanded', 'true');
        } else {
            navToggleBtn.setAttribute('aria-expanded', 'false');
        }
    });
});