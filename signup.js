document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    alert('Your account has been created successfully!'); // Display a popup message
    // Here you can add your code to handle form submission, e.g., sending data to the server
    // Optionally, you can redirect the user to another page
    // window.location.href = 'login.html'; // Uncomment this line to redirect to the login page
});
