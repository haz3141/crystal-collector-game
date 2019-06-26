$(document).ready(function() {

    // Global Variables
    let counter = 0;
    let targetNum = 50;

    $('#number-to-guess').text(targetNum);

    $('.crystal-image').click(function() {
        counter += 1;
        alert('You clicked this crystal ' + counter + ' times!');
    });
});