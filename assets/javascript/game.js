$(document).ready(function() {

    //============= Variables =============//

    var spellSound
    var gameStart = false;        
    var gameEnd = false; 

    //============= Character Objects =============//

var characters = {

    "Harry":{
        name: "Harry",
        health: 230,
        attack: Math.floor((Math.random() * 30) + 0),
        imageUrl: "assets/images/Harry.jpg",
        "enemyAttackBack": 20,  
    },


    "Hermione":{
        name: "Hermione",
        health: 240,
        attack: Math.floor((Math.random() * 30) + 0),
        imageUrl: "assets/images/hermione.jpg",
        enemyAttackBack: 20,  
    },


    "Ron":{
        name: "Ron",
        health: 220,
        attack: Math.floor((Math.random() * 30) + 0),
        imageUrl: "assets/images/Ron.png",
        enemyAttackBack: 25,  
    },

    "Ginny":{
        name: "Ginny",
        health: 230,
        attack: Math.floor((Math.random() * 30) + 0),
        imageUrl: "assets/images/Ginny.jpg",
        enemyAttackBack: 25,  
    },

};

    var opponents = [];
    var opponent;
    var muggleChoice;
    var defeatedCount = 0;
    var characterTurn = 1;

   

    // var harryHealth = 200
    // var hermioneHealth = 200
    // var ronHealth = 200
    // var ginnyHealth = 200
   // var userSpell;
    //var opponentSpell;

    



   
    
    //============= Functions =============//


    //-------  Load Characters to HTML  -------//

    var renderCharacters = function (character, renderArea){

        //var characterDiv = $("<div class='col-lg-3 text-center' >");
        
        var characterName = $("<div class='cardText' class='card-body info'>").text(character.name);
        var characterCard = $("<div id = 'userChoice' class='card text-white bg-info'>");
        var characterBorder = $("<span id ='imgHover'> ");
        var characterImage = $("<img class='card-img-top' class='cardStyle' alt ='character image' class='cardStyle' id ='character-image'>").attr("src",character.imageUrl);

        (characterCard).append(characterBorder).append(characterImage).append(characterName);
       
        $(renderArea).append(characterCard);
    }

    

    var startGame = function(){
        for (var key in characters){
            renderCharacters(characters[key], "#character-selection")
        }
    };

    startGame();


   


    // //-------  Update Display  -------//

    var updateCharacters = function (characterObject, areaRender){
        $(areaRender).empty();
        renderCharacters(characterObject,areaRender);
    };



    // function updateDisplay() {

    //     //Displays health of characters
        //document.getElementById("harryHealth").innerText = harryHealth;
        //document.getElementById("hermioneHealth").innerText = hermioneHealth;
        //document.getElementById("ginnyHealth").innerText = ginnyHealth;
        //document.getElementById("ronHealth").innerText = ronHealth;

       // document.getElementById("userChoice").innerText = userChoice;
        //document.getElementById("userPlacement").innerText = userPlacement;


       // var audioElement = document.createElement("audio");
       // audioElement.setAttribute("/assets/sounds/spellSound.mp3");
        //Displays spells of characters
        //document.getElementById("userSpell").innerText = userSpell;
        //document.getElementById("opponentSpell").innerText = opponentSpell;
 //Displays power of spells
       // document.getElementById("userSpellDamage").innerText = userSpellDamage;
       // document.getElementById("opponentSpellDamage").innerText = opponentSpellDamage;


    // }


    // //-------  Reset Game  -------//

    // function resetGame() {
    //     remainingGuesses = numberOfGuesses;
    //     gameStart = false;
    
      
    //     // Show display
    //     updateDisplay();
    // };

    //-------  End Game  -------//



    //-------  Attack  -------//

    var spellList = [

        "confundus",
        "stupefy",
        "levicorpus",
        "expelliarmus",
        "petrificus totalus",
        "impedimenta",
        "reducto",
        "protego"
    ]


    //attack button click

   
    
    
    //newFunction()

//     document.getElementById("spell-button").addEventListener("click", attackFunction);

// //function newFunction() {
  

//     function attackFunction() {

//        // spellSound = new sound("/assets/sounds/spellSound.mp3");
// //        // spellSound.play();


//     }
   

//     // userSpell = Math.floor(Math.random() * (spellList.length));
//     // opponentSpell = Math.floor(Math.random() * (spellList.length));

    // userSpellDamage = Math.floor((Math.random() * 30) + 0);
    // opponentSpellDamage = Math.floor((Math.random() * 30) + 0);








    //-------  Choose Players  -------//


//    $('#userChoice').on('click', function (){

//         if (!userChoice){
//             $(this).appendTo('#userPlacement');
//             $(this).find('#imgHover')
//                 .removeId('#imgHover');

              
        
//         }

//         updateDisplay();
//     })





});
