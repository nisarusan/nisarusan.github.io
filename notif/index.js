const h4 = document.querySelector('nav h4');
const bgElements = document.querySelectorAll('li.blue');
const notification = document.querySelector('.notification');

// Notification count
for (let i = 0; i <= bgElements.length; i++) {
    notification.textContent = [i];
}
h4.addEventListener('click', () => {
    bgElements.forEach(element => {
            element.classList.remove('blue');
    });
    notification.textContent = 0;
});
bgElements.forEach(element => {
    element.addEventListener('click', (e) => {
        e.currentTarget.classList.remove('blue');
        notification.textContent > 0 ? notification.textContent -= 1 : null;
    });
});

