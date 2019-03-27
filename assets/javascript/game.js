$(document).ready(function () {

    //============= Variables =============//

    var spellSound
    var startGame = false;
    var gameEnd = false;

    //============= Character Objects =============//

    var characters = {

        "Harry": {
            name: "Harry",
            health: 230,
            attack: 20,
            imageUrl: "assets/images/Harry.jpg",
            "enemyAttackBack": 20,
        },

        "Hermione": {
            name: "Hermione",
            health: 240,
            attack: 20,
            imageUrl: "assets/images/hermione.jpg",
            enemyAttackBack: 20,
        },

        "Ron": {
            name: "Ron",
            health: 220,
            attack: 20,
            imageUrl: "assets/images/Ron.png",
            enemyAttackBack: 25,
        },

        "Ginny": {
            name: "Ginny",
            health: 230,
            attack: 20,
            imageUrl: "assets/images/Ginny.jpg",
            enemyAttackBack: 25,
        },

    };

    var opponents = []; //opponent array
    var opponent; //chosen opp
    //var userChoice;
    var defeatedCount = 0;
    var characterTurn = 1;



    //var userSpell;    //<--------------Here is the variable for adding a random spell later in the code is the math.random and spell array list
   // var opponentSpell;







    //============= Functions =============//


    //-------  Load Characters to HTML  -------//

    var renderCharacters = function (character, renderArea) {

        //var characterDiv = $("<div class='col-lg-3' >");

        var characterName = $("<div class='cardText' class='card-body info'>").text(character.name+" " +character.health);
        var characterCard = $("<div id = 'userChoice' class='card text-white bg-info' class ='cardBorder'>");
        var characterBorder = $("<span id ='imgHover'class ='cardBorder'> ");
        var characterImage = $("<img class='card-img-top' class='cardStyle' alt ='character image' class='cardStyle' id ='character-image'>").attr("src", character.imageUrl);
        
        characterCard.append(characterBorder).append(characterImage).append(characterName);

        $(renderArea).append(characterCard);
    }



    var startGame = function () {
        for (var key in characters) {
            renderCharacters(characters[key], "#character-selection")
        }
    };

    startGame();





    // //-------  Update Display  -------//

    var updateCharacters = function (characterObject, areaRender) {
        $(areaRender).empty();
        renderCharacters(characterObject, areaRender);
    };


    // //-------  Reset Game  -------//

    // function resetGame() {
    //     remainingGuesses = numberOfGuesses;
    //     gameStart = false;


    //     // Show display
    //     updateDisplay();
    // };

    //-------  End Game  -------//




    //-------  Choose Players  -------//


       $('#userChoice').on('click', function (){

            if (userChoice){
                $(this).appendTo('#userPlacement');
                
            }

            updateCharacters();
        })


        
//-------  Attack  -------//


    //attack button click 


    
       var obj = document.createElement("audio");
        obj.src="assets/sounds/spellSound.mp3";
        obj.volume=0.10;
        obj.autoPlay=false;
        obj.preLoad=true;       
 
        $("#spell-button").click(function() {
            obj.play();

        });



    





    var spellList = [   //array for a random spell to be chosen

        "confundus",
        "stupefy",
        "levicorpus",
        "expelliarmus",
        "petrificus totalus",
        "impedimenta",
        "reducto",
        "protego"
    ]



    //userSpell = Math.floor(Math.random() * (spellList.length));  <------------ a random spell is chosen from the spellList array for the user's character
    //opponentSpell = Math.floor(Math.random() * (spellList.length));  <------------ a random spell is chosen from the spellList array for the opponents




});
