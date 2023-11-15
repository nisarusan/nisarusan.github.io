//Mobile image Change when resize
window.addEventListener("resize", (e) => {
    const windowWidth = window.innerWidth;
    if (window.innerWidth < 740) {
        document.querySelectorAll('.subscribe-img > img')[0].setAttribute('src', 'assets/images/illustration-sign-up-mobile.svg');
    } else {
        document.querySelectorAll('.subscribe-img > img')[0].setAttribute('src', 'assets/images/illustration-sign-up-desktop.svg');
    }
});

//Validate e-mail
const validateEmail = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (email.match(emailRegex)) {
        let hide = document.getElementById('card');
        let subscribe = document.getElementById('subscribe');
        hide.classList.remove('hide');

        //Email input
        let emailInput = document.querySelector('.email');
        emailInput.innerText = email;

        subscribe.classList.add('hide');
    } else {
        document.querySelector('.warning-message').innerHTML = "Valid e-mail required";
    }
};

const getBack = () => {
    document.querySelector('#subscribe').classList.remove('hide');
    document.querySelector('#card').classList.add('hide');
}
// dayArr.forEach(day => {
//     day.classList.add("required");
//     day.innerHTML = "This field is required";
//Playground testing key events
const getKey = (e) => {
console.log(e.target.value);
}
const buttonNew = document.querySelector('#email');
buttonNew.addEventListener('keypress', getKey);






