const h4 = document.querySelector('nav h4');
const bgElements = document.querySelectorAll('.blue');
const notification = document.querySelector('.notification');



h4.addEventListener('click', () => {
    bgElements.forEach(element => {
        let iterationCount = 0;
        if(iterationCount < 2) {
            element.classList.remove('blue');
            iterationCount++;
        }
    notification.textContent = 0;
    });
});

bgElements.forEach(element => {
    element.addEventListener('click', (e) => {
        let iterationCount = 0;
        if(iterationCount < 2) {
            e.currentTarget.classList.remove('blue');
        }
    });
});