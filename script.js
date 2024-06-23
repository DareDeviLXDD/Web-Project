document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Perform your login logic here (e.g., sending the data to the server)
    alert(`Email: ${email}\nPassword: ${password}`);
});

document.getElementById('sign-up-button').addEventListener('click', function() {
    // Redirect to the sign-up page
    window.location.href = 'signup.html'; // Change this to the URL of your sign-up page
});
