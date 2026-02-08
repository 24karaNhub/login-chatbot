const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const showbtn = document.querySelector('#passwordToggle');
const rememberMeCheckbox = document.getElementById('remember');

// 1. LOAD SAVED EMAIL (UI Feature)
// This stays because it doesn't interfere with Spring
window.addEventListener("DOMContentLoaded", () => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        emailInput.value = rememberedEmail;
        rememberMeCheckbox.checked = true;
    }
});

// 2. TOGGLE PASSWORD VISIBILITY (UI Feature)
// This stays so your "HIDE/SHOW" button still works
showbtn.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showbtn.textContent = 'HIDE';
    } else {
        passwordInput.type = 'password';
        showbtn.textContent = 'SHOW';
    }
});

// 3. REMEMBER ME LOGIC
// We only run this when the form is submitted, but we DON'T block the submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', () => {
    if (rememberMeCheckbox.checked) {
        localStorage.setItem('rememberedEmail', emailInput.value.trim());
    } else {
        localStorage.removeItem('rememberedEmail');
    }
    // NOTICE: e.preventDefault() is GONE. 
    // The browser will now send the data to your Spring Controller.
});