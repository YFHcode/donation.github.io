loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new URLSearchParams(new FormData(event.target));

    try {
        const response = await fetch('http://127.0.0.1:8000/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            // Log to console for debugging
            console.log('Redirecting to https://www.google.com');
            // Handle successful login, e.g., redirect to a new page
            window.location.href = 'https://www.google.com';
        } else {
            // Handle login failure
            const errorData = await response.json();
            alert(`Login failed. ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
});
