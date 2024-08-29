// temperatureConversion.js

export function convertCelsiusToFahrenheit(celsius) {
    return (celsius * (9 / 5)) + 32;
}

export function convertCelsiusToKelvin(celsius) {
    return celsius + 273.15;
}

export function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

export function convertFahrenheitToKelvin(fahrenheit) {
    return ((fahrenheit - 32) * (5 / 9)) + 273.15;
}

export function convertKelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

export function convertKelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * (9 / 5)) + 32;
}
