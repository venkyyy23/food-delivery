document.addEventListener('DOMContentLoaded', function() {
    let captchaAnswer;

    // Function to generate a new captcha question
    function generateCaptcha() {
        const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
        const num2 = Math.floor(Math.random() * 10) + 1;
        document.getElementById('captcha-question').textContent = `${num1} + ${num2} = ?`;
        captchaAnswer = num1 + num2; // Store the correct answer
    }

    // Generate captcha on page load
    generateCaptcha();

    // Refresh captcha when clicking the button
    document.getElementById('refresh-captcha').addEventListener('click', generateCaptcha);

    // Form submission handling
    document.getElementById('admin-login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page refresh on form submission

        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;
        const captcha = document.getElementById('captcha-answer').value;

        // Captcha validation
        if (parseInt(captcha) !== captchaAnswer) {
            alert('Incorrect captcha answer!');
            return;
        }

        // Basic admin credentials check (you can extend this later with actual backend validation)
        if (username === 'admin' && password === 'password123') {
            alert('Login successful');
            // Redirect to admin dashboard (add the correct URL)
            window.location.href = 'user_landingpage.html';
        } else {
            alert('Invalid username or password');
        }
    });
});
