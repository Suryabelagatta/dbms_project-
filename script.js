document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message); // Show success message
        } else {
            const errorData = await response.json();
            alert(errorData.error); // Show error message
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
