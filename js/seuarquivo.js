function validarEmail() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        emailInput.focus();
    } else {
        alert('Obrigado por se inscrever!');
       
    }
}