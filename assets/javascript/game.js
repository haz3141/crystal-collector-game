$(document).ready(function() {

    // Global Variables
    let counter = 0;
    let targetNum = 0;
    let crystalNums = [];

    function newGame() {

        // Generate new random target and write to page
        targetNum = getRndInteger(19, 120);
        $('#number-to-guess').text(targetNum);

        // Generate four random numbers for crystals
        for (let i = 0; i < 4; i++) {
            crystalNums[i] = getRndInteger(1, 12);
        };
    };

    

    $('.crystal-image').click(function() {
        
        counter += crystalNums[0];
        alert('Your new score is: ' + counter);

        if (counter === targetNum) {
            alert('You Win!');
        } else if (counter > targetNum) {
            alert('You Lose!');
        };
    });

    // Random Number Function inclusive of min and max
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    };

    // Begin new game
    newGame();
});