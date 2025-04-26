function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const server = document.getElementById('server').value;
    const description = document.getElementById('description').value.trim();
    const consent = document.getElementById('consent').checked;
    const errorMsg = document.getElementById('error-msg');

    errorMsg.textContent = '';

    // 1. Username should not be empty and at least 3 characters
    if (username === '' || username.length < 3) {
        errorMsg.textContent = 'Username must be at least 3 characters.';
        return false;
    }

    // 2. Email must contain "@" and "."
    if (!email.includes('@') || !email.includes('.')) {
        errorMsg.textContent = 'Please enter a valid email.';
        return false;
    }

    // 3. Server must be selected
    if (server === '') {
        errorMsg.textContent = 'Please select a server.';
        return false;
    }

    // 4. Description should be at least 10 characters
    if (description.length < 10) {
        errorMsg.textContent = 'Description must be at least 10 characters.';
        return false;
    }

    // 5. Consent checkbox must be checked
    if (!consent) {
        errorMsg.textContent = 'You must agree to the privacy policy';
        return false;
    }

    alert('Bug report submitted successfully!');
    return true;
}
