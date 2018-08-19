
//VARIABLES

    var word1 = ["L", "I", "G", "H", "T", "S", "A", "B", "E", "R"];

    var word2 = ["S", "K", "Y", "W", "A", "L", "K", "E", "R"];

    var word3 = ["V", "A", "D", "E", "R"];

    var word4 = ["C", "A", "N", "T", "I", "N", "A"];

    var word5 = ["S", "P", "E", "E", "D", "E", "R"];
    
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var userScore = 0;

    var userTick = 8;

    var scoredLetter;

    var userGuess;

    var stage = 0;

    var spaceFinder;




//FUNCTIONS


    //this checks the user's input against the stored array

    function guessCheck(x) {

        spaceFinder = 0;


        //this makes the number of checks against the word the number of letters in it

        var checks = x.length;

        //this begins the for loop for the check

        for (i = 0; i < checks; i++) {

            spaceFinder = spaceFinder + 1;

            //compares userGuess to the array containing word
            
            if (userGuess === x[i]) {

                //tracks stage, which allows the game to move forward

                stage = stage + 1;

                document.getElementById(spaceFinder).innerHTML = x[i];

                console.log(x[i]);

                console.log(stage);


            }

        }

        if (stage === 10) {

            userScore = userScore + 1;

            document.getElementById("score").innerHTML = userScore;

            document.getElementById("target").innerHTML = "";

            spacePlacement(word2);   

        }

        else if (stage === 19) {

            userScore = userScore + 1;

            document.getElementById("score").innerHTML = userScore;

            document.getElementById("target").innerHTML = "";  

            spacePlacement(word3);
            
        } 

        else if (stage === 24) {

            userScore = userScore + 1;

            document.getElementById("score").innerHTML = userScore;

            document.getElementById("target").innerHTML = "";  

            spacePlacement(word4);
            
        } 

        else if (stage === 31) {

            userScore = userScore + 1;

             document.getElementById("score").innerHTML = userScore;

            document.getElementById("target").innerHTML = "";  

            spacePlacement(word5);

        } 

    }

    function spacePlacement(x) {


        var wordSpaces = x.length;

        spaceFinder = 0;

        for (i = 0; i < wordSpaces; i++) {

            spaceFinder = spaceFinder + 1;

            var node = document.createElement("DIV");

            node.className = "spacers";

            node.setAttribute("id", spaceFinder);

            var t = document.createTextNode("_");

            var s = document.createTextNode(" ");

            node.appendChild(t);

            node.appendChild(s);

            document.getElementById("target").appendChild(node);

        }

    }

    function stageChecker() {

        if (stage < 10) {

            guessCheck(word1);

        }  else if (stage >= 10 && stage < 19) {

            guessCheck(word2);

        } else if (stage >= 19 && stage < 24) {

            guessCheck(word3);

        } else if (stage >= 24 && stage < 31) {

            guessCheck(word4);

         } else if (stage >= 31) {

            guessCheck(word5);


        }

    }

//SCRIPT
//when window loads, first word is set up for user to play

 window.onload = function (event) {

   spacePlacement(word1);


    // key checker for key press event, begins main functions


        document.onkeyup = function (event) {

            //this makes the guessed letter upper case to fix with the stored array syntax

            userGuess = event.key.toUpperCase();

            //this updates the HTML to have the proper guess stored

            document.getElementById("guess").innerHTML = userGuess;
        
            stageChecker();
            


        };


}

