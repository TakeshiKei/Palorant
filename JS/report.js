function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const server = document.getElementById('server').value;
    const description = document.getElementById('description').value.trim();
    const consent = document.getElementById('consent').checked;
    const errorMsg = document.getElementById('error-msg');

    errorMsg.textContent = '';

    // 1. Username
    if (username === '' || username.length < 3) {
        errorMsg.textContent = 'Username must be at least 3 characters.';
        return false;
    }

    // 2. Email
    if (!email.includes('@') || !email.includes('.')) {
        errorMsg.textContent = 'Please enter a valid email.';
        return false;
    }

    // 3. Server
    if (server === '') {
        errorMsg.textContent = 'Please select a server.';
        return false;
    }

    // 4. Description
    if (description.length < 10) {
        errorMsg.textContent = 'Description must be at least 10 characters.';
        return false;
    }

    // 5. Checkbox
    if (!consent) {
        errorMsg.textContent = 'You must agree to the privacy policy';
        return false;
    }

    alert('Bug report submitted successfully!');
    return true;
}
