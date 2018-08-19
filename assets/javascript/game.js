
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



//FUNCTIONS


    //this checks the user's input against the stored array

    function guessCheck(x) {

        var pointGiven = false;

        var checks = x.length;

        for (i = 0; i < checks; i++) {
            
            if (userGuess === x[i]) {

                if (pointGiven == false) {

                    userScore = userScore + 1;
                
                    pointGiven = true;
                }

            document.getElementById(x[i]).innerHTML = x[i];
            console.log(x[i])


            }

        }

    }

    function spacePlacement(x) {

        var wordSpaces = x.length;

        for (i = 0; i < wordSpaces; i++) {

            var node = document.createElement("DIV");

            node.className = "spacers";

            node.setAttribute("id", x[i]);

            var t = document.createTextNode("_");

            var s = document.createTextNode(" ");

            node.appendChild(t);

            node.appendChild(s);

            document.getElementById("target").appendChild(node);

        }

    }





    //SCRIPT

    // key checker for key press event, begins main functions

        document.onkeyup = function (event) {

            //this makes the guessed letter upper case to fix with the stored array syntax

            var userGuess = event.key.toUpperCase();

            //this updates the HTML to have the proper guess stored

            document.getElementById("guess").innerHTML = userGuess;

            // this checks the state of the game by checking score, starting with the first word

            if (userScore === 0) {

                spacePlacement(word1);

            }
        };

