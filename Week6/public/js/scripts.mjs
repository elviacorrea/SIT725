// scripts.js (DOM Interactions)

import { 
    convertCelsiusToFahrenheit, 
    convertCelsiusToKelvin, 
    convertFahrenheitToCelsius, 
    convertFahrenheitToKelvin, 
    convertKelvinToCelsius, 
    convertKelvinToFahrenheit 
} from './temperatureConversion.mjs';

// Function to show alert message
export function showAlert(message) {
    alert(message);
}

// Wait for the DOM to be ready
$(document).ready(function () {
    // Button click handler for a generic message
    $('#ClickMeButton').click(function () {
        showAlert("Thanks for clicking me. Hope you have a nice day!");
    });

    // Celsius to Fahrenheit conversion
    $("#submit1").click(function () {
        var celsius = parseFloat($('#a').val());
        var fahrenheit = convertCelsiusToFahrenheit(celsius);
        showAlert(fahrenheit.toFixed(2));
    });

    // Celsius to Kelvin conversion
    $("#submit2").click(function () {
        var celsius = parseFloat($('#a').val());
        var kelvin = convertCelsiusToKelvin(celsius);
        showAlert(kelvin.toFixed(2));
    });

    // Fahrenheit to Celsius conversion
    $("#submit3").click(function () {
        var fahrenheit = parseFloat($('#b').val());
        var celsius = convertFahrenheitToCelsius(fahrenheit);
        showAlert(celsius.toFixed(2));
    });

    // Fahrenheit to Kelvin conversion
    $("#submit4").click(function () {
        var fahrenheit = parseFloat($('#b').val());
        var kelvin = convertFahrenheitToKelvin(fahrenheit);
        showAlert(kelvin.toFixed(2));
    });

    // Kelvin to Celsius conversion
    $("#submit5").click(function () {
        var kelvin = parseFloat($('#c').val());
        var celsius = convertKelvinToCelsius(kelvin);
        showAlert(celsius.toFixed(2));
    });

    // Kelvin to Fahrenheit conversion
    $("#submit6").click(function () {
        var kelvin = parseFloat($('#c').val());
        var fahrenheit = convertKelvinToFahrenheit(kelvin);
        showAlert(fahrenheit.toFixed(2));
    });

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
                showAlert(response.message);
                window.location.href = 'http://localhost:3000/index.html'; // Redirect after successful login
            },
            error: function (error) {
                let errorMessage = 'Login failed'; // Default error message
                if (error.responseJSON && error.responseJSON.message) {
                    errorMessage = error.responseJSON.message;
                } else if (error.responseText) {
                    errorMessage = error.responseText;
                }
                showAlert('Error: ' + errorMessage);
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
                showAlert(response.message);
                window.location.href = 'http://localhost:3000/login.html'; // Redirect after successful signup
            },
            error: function (error) {
                let errorMessage = 'Signup failed'; // Default error message
                if (error.responseJSON && error.responseJSON.message) {
                    errorMessage = error.responseJSON.message;
                } else if (error.responseText) {
                    errorMessage = error.responseText;
                }
                showAlert('Error: ' + errorMessage);
            }
        });
    });

});
