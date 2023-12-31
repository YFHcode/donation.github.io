const donationForm = document.getElementById('donation-form');

donationForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new URLSearchParams(new FormData(event.target));

    console.log('Form data:', formData);

        try {
        const response = await fetch('https://donation-api-aevwb465ja-nw.a.run.app/donate', {
            method: 'POST',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
            },
            body: formData,
        });

    console.log('Response:', response);

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
