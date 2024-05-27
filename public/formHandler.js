// formHandler.js

document.addEventListener('DOMContentLoaded', function() {
    window.handlePassword = function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        let password = document.getElementById('password').value;
        let correctPassword = 'a'; // Replace with the actual correct password

        if (password === correctPassword) {
            window.location.href = 'secret recipe.htm'; // Redirect to the secret recipe page
        } else {
            alert('Incorrect password. Please try again.');
        }
    };
});
