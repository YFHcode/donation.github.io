loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new URLSearchParams(new FormData(event.target));

    try {
        const response = await fetch('https://default-servise-fastapi-aevwb465ja-nw.a.run.app/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            // Handle successful login, e.g., redirect to a new page
            window.location.href = '/site/index.html';
        } else {
            // Handle login failure
            const errorData = await response.json();
            alert(`Login failed. ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
});
