// Login functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    // User data embedded directly in JavaScript (no external file needed)
    const userData = {
        users: [
            {
                id: 1,
                fullName: "Herbert Scholz",
                username: "herbertscholz",
                password: "Kalle1997"
            }
        ]
    };

    // Check if user is already logged in
    if (localStorage.getItem('currentUser')) {
        window.location.href = 'dashboard.html';
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Find matching user in embedded data
        const user = userData.users.find(u => 
            u.username === username && u.password === password
        );
        
        if (user) {
            // Store user in localStorage
            localStorage.setItem('currentUser', JSON.stringify({
                id: user.id,
                fullName: user.fullName,
                username: user.username
            }));
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            showError('Invalid username or password!');
        }
    });

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        // Hide error message after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
}); 