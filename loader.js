var value = 0;

function AnimatedProgressBar(){

    value += 5;

    $( ".progress-bar" ).css( "width", value + "%" ).attr( "aria-valuenow", value );

    if (value == 100){
        $("#loader").css("display","none");
        $("#content").css("display","inline");
        return true;
    }

    if ( value == 25 || value == 55 || value == 85 ) {
        return setTimeout(AnimatedProgressBar, 1500);
    }

    return value >= 100 || setTimeout(AnimatedProgressBar, 50);
}

setTimeout(AnimatedProgressBar, 100);