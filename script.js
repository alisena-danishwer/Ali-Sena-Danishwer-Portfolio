document.querySelector('.contact-form').addEventListener('submit', function (e) {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});

