const donationForm = document.getElementById('donation-form');

donationForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Extract form data and convert to JSON
    const formData = new FormData(event.target);
    const jsonData = {};

    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    try {
        const response = await fetch('https://donation-api-aevwb465ja-nw.a.run.app/donate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set content type to JSON
            },
            body: JSON.stringify(jsonData), // Convert JSON data to a string
        });

        if (response.ok) {
            const data = await response.json();
            // Handle successful donation, e.g., show a thank you message
            alert('Thank you for your donation!');
        } else {
            // Handle donation failure
            const errorData = await response.json();
            alert(`Donation failed. ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error during donation:', error);
    }
});
