import { expect } from 'chai';
import { 
    convertCelsiusToFahrenheit, 
    convertCelsiusToKelvin, 
    convertFahrenheitToCelsius, 
    convertFahrenheitToKelvin, 
    convertKelvinToCelsius, 
    convertKelvinToFahrenheit 
} from '../public/js/temperatureConversion.mjs'; 

describe('Temperature Conversion Functions', function() {
    describe('Celsius to Fahrenheit', function() {
        it('should convert 0°C to 32°F', function() {
            expect(convertCelsiusToFahrenheit(0)).to.be.closeTo(32, 0.01);
        });

        it('should convert 100°C to 212°F', function() {
            expect(convertCelsiusToFahrenheit(100)).to.be.closeTo(212, 0.01);
        });
    });

    describe('Celsius to Kelvin', function() {
        it('should convert 0°C to 273.15K', function() {
            expect(convertCelsiusToKelvin(0)).to.be.closeTo(273.15, 0.01);
        });

        it('should convert 100°C to 373.15K', function() {
            expect(convertCelsiusToKelvin(100)).to.be.closeTo(373.15, 0.01);
        });
    });

    describe('Fahrenheit to Celsius', function() {
        it('should convert 32°F to 0°C', function() {
            expect(convertFahrenheitToCelsius(32)).to.be.closeTo(0, 0.01);
        });

        it('should convert 212°F to 100°C', function() {
            expect(convertFahrenheitToCelsius(212)).to.be.closeTo(100, 0.01);
        });
    });

    describe('Fahrenheit to Kelvin', function() {
        it('should convert 32°F to 273.15K', function() {
            expect(convertFahrenheitToKelvin(32)).to.be.closeTo(273.15, 0.01);
        });

        it('should convert 212°F to 373.15K', function() {
            expect(convertFahrenheitToKelvin(212)).to.be.closeTo(373.15, 0.01);
        });
    });

    describe('Kelvin to Celsius', function() {
        it('should convert 273.15K to 0°C', function() {
            expect(convertKelvinToCelsius(273.15)).to.be.closeTo(0, 0.01);
        });

        it('should convert 373.15K to 100°C', function() {
            expect(convertKelvinToCelsius(373.15)).to.be.closeTo(100, 0.01);
        });
    });

    describe('Kelvin to Fahrenheit', function() {
        it('should convert 273.15K to 32°F', function() {
            expect(convertKelvinToFahrenheit(273.15)).to.be.closeTo(32, 0.01);
        });

        it('should convert 373.15K to 212°F', function() {
            expect(convertKelvinToFahrenheit(373.15)).to.be.closeTo(212, 0.01);
        });
    });
});
