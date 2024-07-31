const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
}

$(document).ready(function () {
    $('#ClickMeButton').click(() => {
        clickMe();
    });

// Fahrenheit to Celsius, subtract 30 then divide by 2.
// Celsius to Fahrenheit, multiply by 2 then add 30.
    
        $("#submit1").on("click", function(){
        var a = parseFloat($('#a').val());
           var sum = (a * (9/5))+32;
            alert(sum.toFixed(2));
        })
        $("#submit2").on("click", function(){
            var a = parseFloat($('#a').val());
               var sum = a+273.15;
                alert(sum.toFixed(2));
            })

        $("#submit3").on("click", function(){
                var b = parseFloat($('#b').val());
                   var sum = (b - 32)*(5/9);
                    alert(sum.toFixed(2));
            })
        $("#submit4").on("click", function(){
                var b = parseFloat($('#b').val());
                   var sum = ((b - 32)*(5/9))+273.15;
                    alert(sum.toFixed(2));
            })
        $("#submit5").on("click", function(){
            var c = parseFloat($('#c').val());
               var sum = c - 273.15;
                alert(sum.toFixed(2));
            })
        $("#submit6").on("click", function(){
            var c = parseFloat($('#c').val());
               var sum = ((c - 273.15)*(9/5))+32;
               alert(sum.toFixed(2));
            })


    
});