$(document).ready(function () {
    // Button click handlers for temperature conversion
    $('#ClickMeButton').click(() => {
        alert("Thanks for clicking me. Hope you have a nice day!");
    });

    $("#submit1").on("click", function () {
        var a = parseFloat($('#a').val());
        var sum = (a * (9 / 5)) + 32;
        alert(sum.toFixed(2));
    });

    $("#submit2").on("click", function () {
        var a = parseFloat($('#a').val());
        var sum = a + 273.15;
        alert(sum.toFixed(2));
    });

    $("#submit3").on("click", function () {
        var b = parseFloat($('#b').val());
        var sum = (b - 32) * (5 / 9);
        alert(sum.toFixed(2));
    });

    $("#submit4").on("click", function () {
        var b = parseFloat($('#b').val());
        var sum = ((b - 32) * (5 / 9)) + 273.15;
        alert(sum.toFixed(2));
    });

    $("#submit5").on("click", function () {
        var c = parseFloat($('#c').val());
        var sum = c - 273.15;
        alert(sum.toFixed(2));
    });

    $("#submit6").on("click", function () {
        var c = parseFloat($('#c').val());
        var sum = ((c - 273.15) * (9 / 5)) + 32;
        alert(sum.toFixed(2));
    });

    // Login form submission
    // Login form submission
$('#loginForm').submit(function (e) {
    e.preventDefault();
    const username = $('#loginUsername').val();
    const password = $('#loginPassword').val();

    $.ajax({
        url: 'http://localhost:3000/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ username, password }),
        success: function (response) {
            alert(response.message);
            window.location.href = 'http://localhost:3000/index.html'; // Redirect to index.html after successful login
        },
        error: function (error) {
            // Check if error.responseJSON is defined and has a message property
            let errorMessage = 'Login failed'; // Default error message
            if (error.responseJSON && error.responseJSON.message) {
                errorMessage = error.responseJSON.message;
            } else if (error.responseText) {
                // Fallback to raw responseText if JSON parsing failed
                errorMessage = error.responseText;
            }

            alert('Error: ' + errorMessage);
        }
    });
});


    // Signup form submission
    $('#signupForm').submit(function (e) {
        e.preventDefault();
        const username = $('#signupUsername').val();
        const password = $('#signupPassword').val();

        $.ajax({
            url: 'http://localhost:3000/signup',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ username, password }),
            success: function (response) {
                alert(response.message);
                window.location.href = 'http://localhost:3000/login.html'; // Redirect to login.html after successful signup
            },
            error: function (error) {
                alert('Error: ' + error.responseJSON.message);
            }
        });
    });
});
