// Modern Brutalist Login Form JavaScript
class ModernBrutalistLoginForm {
    constructor() {
        this.form = document.getElementById('loginForm');
        this.emailInput = document.getElementById('email');
        this.passwordInput = document.getElementById('password');
        this.passwordToggle = document.getElementById('passwordToggle');
        this.submitButton = this.form.querySelector('.login-btn');
        this.successMessage = document.getElementById('successMessage');
        this.socialButtons = document.querySelectorAll('.social-btn');

        this.init();
    }

    init() {
        this.bindEvents();
        this.setupPasswordToggle();
        this.setupSocialButtons();
    }

    bindEvents() {
        /*
         ❌ DO NOT intercept submit in Option 1
         ❌ Spring Boot must handle form submission
         ❌ JS must NOT decide success / failure
        */
        // this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // ✅ Client-side validation helpers (optional but allowed)
        this.emailInput.addEventListener('blur', () => this.validateEmail());
        this.passwordInput.addEventListener('blur', () => this.validatePassword());
        this.emailInput.addEventListener('input', () => this.clearError('email'));
        this.passwordInput.addEventListener('input', () => this.clearError('password'));
    }

    // ✅ KEEP: Password show/hide (pure UX)
    setupPasswordToggle() {
        this.passwordToggle.addEventListener('click', () => {
            const type = this.passwordInput.type === 'password' ? 'text' : 'password';
            this.passwordInput.type = type;

            const toggleText = this.passwordToggle.querySelector('.toggle-text');
            toggleText.textContent = type === 'password' ? 'SHOW' : 'HIDE';
        });
    }

    // ❌ OPTIONAL — not part of core auth flow
    setupSocialButtons() {
        this.socialButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert("Social login not implemented yet");
            });
        });
    }

    // ✅ KEEP: Email validation (frontend hint only)
    validateEmail() {
        const email = this.emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            this.showError('email', 'Email address is required');
            return false;
        }

        if (!emailRegex.test(email)) {
            this.showError('email', 'Please enter a valid email address');
            return false;
        }

        this.clearError('email');
        return true;
    }

    // ✅ KEEP: Password length hint
    validatePassword() {
        const password = this.passwordInput.value;

        if (!password) {
            this.showError('password', 'Password is required');
            return false;
        }

        if (password.length < 6) {
            this.showError('password', 'Password must be at least 6 characters long');
            return false;
        }

        this.clearError('password');
        return true;
    }

    // ✅ KEEP: Error UI
    showError(field, message) {
        const formGroup = document.getElementById(field).closest('.form-group');
        const errorElement = document.getElementById(`${field}Error`);

        formGroup.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    clearError(field) {
        const formGroup = document.getElementById(field).closest('.form-group');
        const errorElement = document.getElementById(`${field}Error`);

        formGroup.classList.remove('error');
        errorElement.classList.remove('show');
        setTimeout(() => {
            errorElement.textContent = '';
        }, 300);
    }

    /*
     ❌ REMOVE ENTIRELY (Option 1 violation)
     - e.preventDefault()
     - fake auth
     - fake success
     - fake redirect
     - loading simulation
    */

    /*
    async handleSubmit(e) { }
    setLoading() { }
    showSuccess() { }
    handleSocialLogin() { }
    */
}

// ✅ SAFE: DOM init
document.addEventListener('DOMContentLoaded', () => {
    new ModernBrutalistLoginForm();
});