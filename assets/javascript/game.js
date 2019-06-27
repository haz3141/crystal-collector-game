$(document).ready(function() {

    // Global Variables
    let counter = 0;
    let targetNum = 0;
    let crystalNum = [1,2,3,4,5,6,7,8,9,10,11,12];
    let crystals = ['red.png', 'blue.png', 'yellow.png', 'purple.png'];
    let wins = 0;
    let losses = 0;

    function newGame() {

        // Generate new random target and write to page
        targetNum = getRndInteger(19, 120);
        counter = 0;
        $('#number-to-guess').text(targetNum);
        $('#total-score').text(counter);
        $('#crystals').empty();

        // Sort array of numbers and pick from sorted array to avoid duplicate numbers
        crystalNum.sort(function(a, b){return 0.5 - Math.random()});

        // Pick first four random numbers for crystals
        for (let i = 0; i < crystals.length; i++) {
            
            // crystalNum[i] = getRndInteger(1, 12);
            let imageCrystal = $('<img>');
            imageCrystal.addClass('crystal-image');
            imageCrystal.attr('src', 'assets/images/' + crystals[i]);
            $('#crystals').append(imageCrystal);
            imageCrystal.attr('data-crystalvalue', crystalNum[i]);
        };

        $('#wins').text(wins);
        $('#losses').text(losses);

        clickCrystals();
    };

    function checkWinsLosses() {
        if (counter === targetNum) {
            alert('You Win!');
            wins++;
            newGame();
        } else if (counter > targetNum) {
            alert('You Lose!');
            losses++;
            newGame();
        } else {
            $('#total-score').text(counter);
        };
    }

    // Random Number Function inclusive of min and max
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    };

    // Logic for clicking crystals
    function clickCrystals() {
        $('.crystal-image').click(function() {
        
            let crystalValue = parseInt($(this).attr('data-crystalvalue'));
            counter += crystalValue;
    
            // alert('Your new score is: ' + counter);
    
            checkWinsLosses();
        });
    };

    // Begin new game
    newGame();
});