$(document).ready(function() {

    // Global Variables
    let counter = 0;
    let targetNum = 50;

    $('#number-to-guess').text(targetNum);

    $('.crystal-image').click(function() {
        
        counter += 10;
        alert('Your new score is: ' + counter);

        if (counter === targetNum) {
            alert('You Win!');
        };
    });

});