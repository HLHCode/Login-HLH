$(document).ready(function() {
    $('#login-form').on('submit', function(event) {
        event.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();

        if (username === "HLH" && password === "Hlh0220112345*") {
            window.location.href = "./Principal/index.html";
        } else {
            $('#error-message').show();
        }
    });
});
