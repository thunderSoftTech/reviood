function showComment(meterid , ratingShow) {
$(function () {

    $(`#${meterid}`).rateYo({
        ratedFill: "#9A4E9F",
        "rating": 0.5,
        numStars: 5,
        spacing: "10px",
        "starSvg": `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1870.32 1816.09"><path d="M1870.32,0V1816.09h-200V281.28L1020.29,1804l-5.22-2.23H855.22L850,1804,200,281.35V1816.09H0V0H297.36L935.15,1494,1572.94,0Z"/></svg>`

    });

    $("#rateYo1").click(function () {
        debugger
        var MeterValue
        var SelectedMeter = $("#rateYo1 .jq-ry-rated-group ").css("width");
        var MeterWidthInPercentage = parseInt(SelectedMeter, 10) / 200 * 100;
       debugger
        if (MeterWidthInPercentage < 20) {
            if (MeterWidthInPercentage < 3) {
                MeterValue = 0.25;
            }
            else if (MeterWidthInPercentage < 9) {
                MeterValue = 0.5;
            }
            else if (MeterWidthInPercentage < 15) {
                MeterValue = 0.75;
            }
            else if ( MeterWidthInPercentage <= 20) {
                MeterValue = 1;
            }
        }
        if (MeterWidthInPercentage < 40 && MeterWidthInPercentage > 20) {
            if (MeterWidthInPercentage < 23) {
                MeterValue = 1.25;
            }
            else if (MeterWidthInPercentage < 28) {
                MeterValue = 1.5;
            }
            else if (MeterWidthInPercentage < 36) {
                MeterValue = 1.75;
            }
            else if ( MeterWidthInPercentage <= 40) {
                MeterValue = 2;
            }
        }
        
        if (MeterWidthInPercentage < 60 && MeterWidthInPercentage > 40) {
            if (MeterWidthInPercentage < 43) {
                MeterValue = 2.25;
            }
            else if (MeterWidthInPercentage < 51) {
                MeterValue = 2.5;
            }
            else if (MeterWidthInPercentage < 56) {
                MeterValue = 2.75;
            }
            else if (MeterWidthInPercentage <= 60 ) {
                MeterValue = 3;
            }
        }

            
        if (MeterWidthInPercentage < 80 && MeterWidthInPercentage > 60) {
            if (MeterWidthInPercentage < 65) {
                MeterValue = 3.25;
            }
            else if (MeterWidthInPercentage < 72) {
                MeterValue = 3.5;
            }
            else if (MeterWidthInPercentage < 78) {
                MeterValue = 3.75;
            }
            else if (MeterWidthInPercentage <= 80 ) {
                MeterValue = 4;
            }
        }

           debugger  
        if (MeterWidthInPercentage <= 100 && MeterWidthInPercentage > 80) {
            if (MeterWidthInPercentage < 86) {
                MeterValue = 4.25;
            }
            else if (MeterWidthInPercentage < 93) {
                MeterValue = 4.5;
            }
            else if (MeterWidthInPercentage < 99) {
                MeterValue = 4.75;
            }
            else if (MeterWidthInPercentage == 99 || MeterWidthInPercentage == 100) {
                MeterValue = 5;
            }
        }
     
     
        
             debugger
        $(`#${meterid} p`).empty();
        $(`#${meterid} p`).append(MeterValue);
    });

});

}
$(function () {

    $("#rateYo1").rateYo({
        ratedFill: "#9A4E9F",
        "rating": 0.5,
        numStars: 5,
        spacing: "10px",
        "starSvg": `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1870.32 1816.09"><path d="M1870.32,0V1816.09h-200V281.28L1020.29,1804l-5.22-2.23H855.22L850,1804,200,281.35V1816.09H0V0H297.36L935.15,1494,1572.94,0Z"/></svg>`

    });

    $("#rateYo1").click(function () {
        debugger
        var MeterValue
        var SelectedMeter = $("#rateYo1 .jq-ry-rated-group ").css("width");
        var MeterWidthInPercentage = parseInt(SelectedMeter, 10) / 200 * 100;
       debugger
        if (MeterWidthInPercentage < 20) {
            if (MeterWidthInPercentage < 3) {
                MeterValue = 0.25;
            }
            else if (MeterWidthInPercentage < 9) {
                MeterValue = 0.5;
            }
            else if (MeterWidthInPercentage < 15) {
                MeterValue = 0.75;
            }
            else if ( MeterWidthInPercentage <= 20) {
                MeterValue = 1;
            }
        }
        if (MeterWidthInPercentage < 40 && MeterWidthInPercentage > 20) {
            if (MeterWidthInPercentage < 23) {
                MeterValue = 1.25;
            }
            else if (MeterWidthInPercentage < 28) {
                MeterValue = 1.5;
            }
            else if (MeterWidthInPercentage < 36) {
                MeterValue = 1.75;
            }
            else if ( MeterWidthInPercentage <= 40) {
                MeterValue = 2;
            }
        }
        
        if (MeterWidthInPercentage < 60 && MeterWidthInPercentage > 40) {
            if (MeterWidthInPercentage < 43) {
                MeterValue = 2.25;
            }
            else if (MeterWidthInPercentage < 51) {
                MeterValue = 2.5;
            }
            else if (MeterWidthInPercentage < 56) {
                MeterValue = 2.75;
            }
            else if (MeterWidthInPercentage <= 60 ) {
                MeterValue = 3;
            }
        }

            
        if (MeterWidthInPercentage < 80 && MeterWidthInPercentage > 60) {
            if (MeterWidthInPercentage < 65) {
                MeterValue = 3.25;
            }
            else if (MeterWidthInPercentage < 72) {
                MeterValue = 3.5;
            }
            else if (MeterWidthInPercentage < 78) {
                MeterValue = 3.75;
            }
            else if (MeterWidthInPercentage <= 80 ) {
                MeterValue = 4;
            }
        }

           debugger  
        if (MeterWidthInPercentage <= 100 && MeterWidthInPercentage > 80) {
            if (MeterWidthInPercentage < 86) {
                MeterValue = 4.25;
            }
            else if (MeterWidthInPercentage < 93) {
                MeterValue = 4.5;
            }
            else if (MeterWidthInPercentage < 99) {
                MeterValue = 4.75;
            }
            else if (MeterWidthInPercentage == 99 || MeterWidthInPercentage == 100) {
                MeterValue = 5;
            }
        }
     
     
        
             debugger
        $("#data-show p").empty();
        $("#data-show p").append(MeterValue);
    });

});