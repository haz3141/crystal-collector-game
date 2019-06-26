$(document).ready(function() {

    // Global Variables
    let counter = 0;

    $('.crystal-image').click(function() {
        counter += 1;
        alert('You clicked this crystal ' + counter + ' times!');
    });
});