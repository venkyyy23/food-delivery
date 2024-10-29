// signup.js

document.querySelector('.signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const mobile = document.querySelector('input[placeholder="Mobile Number"]').value;
    const dob = document.querySelector('#dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, mobile, dob, gender, password }),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            // Redirect or reset form
        } else {
            alert('Error: ' + result.message);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
});
