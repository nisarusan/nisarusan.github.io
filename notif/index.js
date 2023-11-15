const h4 = document.querySelector('nav h4');
const bgElements = document.querySelectorAll('li.blue');
const notification = document.querySelector('.notification');
let notificationValue = 3;

h4.addEventListener('click', () => {
    bgElements.forEach(element => {
            element.classList.remove('blue');
    });
    notification.textContent = 0;
});

bgElements.forEach(element => {
    element.addEventListener('click', (e) => {
        e.currentTarget.classList.remove('blue');
        notificationValue -= 1;
        notification.textContent = notificationValue;
    });
});

