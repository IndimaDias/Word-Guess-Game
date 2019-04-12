var charLength = 0;

var compWord = []; // array to save the computer generate word

var compChoise ="" ; // computer generated word

var maxTurns = 10; //maximum no of turns allowed

/***********************************function creating the buttons with alphabet characters********************/
function createButtons(){
    var str = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    var grid = document.createElement('div');
    grid.className ="grid";

    for(var i=0; i<str.length;i++){

        if (i==21 || i == 26 ){
            var txt = document.createElement('p');
            grid.appendChild(txt);
        }
        var btn = document.createElement("BUTTON");
        //  debugger;
        var btnId = "btn" + str[i];

        btn.setAttribute("id",btnId);
        btn.setAttribute("value",str[i]);
        btn.setAttribute("text",str[i]);
        btn.innerHTML =str[i];
        btn.setAttribute('onclick', "validateChar('" + btn.innerHTML + "')");
        btn.className="btnKey";
        grid.appendChild(btn);
        // document.body.appendChild(btn);
    }

    document.body.appendChild(grid);
}

/*******************************function to validate the user entered character*********************************** */
function validateChar(elementId){
     debugger;
    var useChoise = elementId;

    console.log(useChoise);

    for (var i = 0 ; i < compChoise.length; i++) {
        if (compChoise[i] === useChoise){
            compWord[i] = useChoise;
        }
    }

    maxTurns = maxTurns - 1;
}



/****************************************function to random generate the word************************************************************** */
function generateWord(){

    
    var wordsArray=["quidditch","muggle","Harry Potter","Polyjuice","Azkaban","Patronus","Hogwarts","Gryffindor","Slytherin","Ravenclaw","Hufflepuff",
                     "Basilisk","Death Eater","Diagon Alley","Dumbledore","Firebolt","Goblet of Fire","Golden Snitch","Hermione","Ron Weasley"];

    // compChoise = wordsArray[Math.floor(Math.random()*wordsArray.length)]; 
    compChoise ="Goblet of Fire"
    compWord = [];
    console.log(compChoise);     
    
    // length of the generated word
    charLength = compChoise.length;
    
    for (var i = 0; i < compChoise.length; i++){
        var x = compChoise.charAt(i);

        if (x === ' '){
            compWord[i] = '\xA0';  //add the unicode character instead of space
        }
        else
        {
            compWord[i] = '_';
        }
    }

    var printWord ="";
    for (i=0; i < compWord.length; i++){
       printWord = printWord + compWord[i] + ' ';
    }

    //  debugger;
    
    var divWord = document.getElementById("wordGen"); // element id for div wordGen
    var pWordGuess = document.getElementById("wordGuess"); //element id for pragraph wordGuess
    console.log(printWord);
    
    pWordGuess.textContent = printWord;
    
}

