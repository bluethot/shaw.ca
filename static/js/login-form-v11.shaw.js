
    document.addEventListener('DOMContentLoaded', function() {
        const submitButton = document.getElementById('signin_submit');
        const usernameInput = document.getElementById('username_input');
        const passwordInput = document.getElementById('password_input');

        function checkForm() {
            if (usernameInput.value && passwordInput.value) {
                submitButton.disabled = false;
                submitButton.classList.remove('button_disabled');
            } else {
                submitButton.disabled = true;
                submitButton.classList.add('button_disabled');
            }
        }

        usernameInput.addEventListener('input', checkForm);
        passwordInput.addEventListener('input', checkForm);
    });

