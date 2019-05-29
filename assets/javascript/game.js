var charLength = 0;

var compWord = []; // array to save the computer generate word

var compChoise ="" ; // computer generated word converted to uppercase

var generatedWord = ""; // computer generated word

var maxTurns = 10; //maximum no of turns allowed

/***********************************function creating the buttons with alphabet characters********************/
function createButtons(){

    // This function will create the letter button pallate when start button or play again button is pressed 

    // Array with alphabet letter
    var str = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    var grid = document.createElement('div');
    grid.className ="grid";

    for(var i=0; i<str.length;i++){

        if (i==21 || i == 26 ){
            // create a p tag for empty spaces to center the buttons in the last line 
            var txt = document.createElement('p');
            grid.appendChild(txt);
        }

        // creae a button for each letter
        var btn = document.createElement("BUTTON");
       
        // create button id as btnA
        var btnId = "btn" + str[i];

        // set button attributes
        btn.setAttribute("id",btnId);
        btn.setAttribute("value",str[i]);
        btn.setAttribute("text",str[i]);
        btn.innerHTML =str[i];
       
        btn.setAttribute('onclick',"validateChar( '" + btnId + "')");
        btn.className="btnKey";
        grid.appendChild(btn);
       
    }

    document.body.appendChild(grid);

} // end of function createButtons



/****************************************function to random generate the word***************Cl*********************************************** */
function generateWord(){

    
    var wordsArray = ["Quidditch","Muggle","Harry Potter","Polyjuice","Azkaban","Patronus","Hogwarts","Gryffindor","Slytherin","Ravenclaw","Hufflepuff",
                     "Basilisk","Death Eater","Diagon Alley","Dumbledore","Firebolt","Goblet of Fire","Golden Snitch","Hermione","Ron Weasley"];

    var hintsArray = ["Fly to race", "No magic", "It's all about him" , "Change your looks", 
                      "A place you don't want to be","Think of your happiest memory", 
                      "A Scottish castle", "Guarded by the Fat Lady","A long, stone room under the Great Lake",
                      "Founder with a diadem","golded cup", "Look into my eyes","devoted to You-Know-Who",
                      "School supplies", "Order of the Phoenix", "Best to seek","Triwizard tournament","Like a small brid",
                      "When in doubt, go to the library ", "Best Chess"];                 

    compChoise = "";

    // generate random word from array 
    generatedWord = wordsArray[Math.floor(Math.random()*wordsArray.length)];

    // trun word to upper case
    compChoise = generatedWord.toUpperCase(); 

    // get the hint relevant for the word from hints array 
    wordHint   = hintsArray[wordsArray.indexOf(generatedWord)];
    
    compWord = [];
   
    
    // length of the generated word
    charLength = compChoise.length;
    
    // assign word to an array 
    for (var i = 0; i < compChoise.length; i++){
        var x = compChoise.charAt(i);

        // if it's more than one word , check for spaces 
        if (x === ' '){
            compWord[i] = '\xA0';  //add the unicode character instead of space
        }
        else
        {
            compWord[i] = '_';
        }
    }

    var printWord ="";
    printWord = compWord.join(' ');

    //  debugger;
    
    var divWord = document.getElementById("wordGen"); // element id for div wordGen
    var pWordGuess = document.getElementById("wordGuess"); //element id for pragraph wordGuess
    var toolTipText = document.getElementById("toolTip");
    console.log(printWord);
    
    pWordGuess.textContent = printWord;
    toolTipText.textContent = wordHint;
    
} //end of function generateWord

/*******************************function to validate the user entered character*********************************** */
function validateChar(elementId){
    

   var buttonId = document.getElementById(elementId) ;
   var useChoise = buttonId.innerHTML;   
   var letterFound = false;

   
// check if user selected letter is found in the array of generated word
   for (var i = 0 ; i < compChoise.length; i++) {
       if (compChoise[i] === useChoise){
           letterFound = true;
           compWord[i] = useChoise;
       }
   }

//    if incorrect letter selected , reduce no of turns
  if(letterFound === false){
   maxTurns = maxTurns - 1;
   var noOfTurns = document.getElementById("textTri");
   noOfTurns.innerHTML = maxTurns;
  } 
  else {
      var modifiedWord = compWord.join(' ');
      var pWordGuess = document.getElementById("wordGuess"); //element id for pragraph wordGuess
     
      
      pWordGuess.textContent = modifiedWord;
  }
  buttonId.disabled = true;

  var turnValidate = validateTurns();
  
} // end of function validateChar

/***************************************funtion to validate the no of available turns****************************** */
function validateTurns(){

    
    if (maxTurns === 0 ){ // if allowed truns reach 0 
        displayAlert("L");
        
    }
    else {
        // check if word is completed
        guessCompletWord();
    }
} //end of fucntion validateTurns

/******************************************function to reinitiate game********************* */


function initiateGame(){
    var btnClass = document.getElementsByClassName("btnKey");

    for (var i = 0; i < btnClass.length; i++) {
        btnClass[i].disabled = false;
    }
    maxTurns = 10;
    generateWord();
    
}// end of function initiateGame

/********************************************function to check if user guess all the letters********************* */

function guessCompletWord(){
    var compChoiseTemp = compChoise.replace(/ /g,'\xA0');
    var compChoiseArray = compChoiseTemp.split("");
    var isCompleted = true;

    console.log(compChoiseArray);
    
    if(compChoiseArray.length == compWord.length){
        for(var i = 0; i < compChoiseArray.length; i++ ){
            if (compChoiseArray[i] !== compWord[i]) {
                console.log("test" + compWord[i]);
                isCompleted = false ;
                break;
            }
        }
               
    }
    if (isCompleted === true) {
      displayAlert("W");
    } 
}

/*************************************function to display alert based on user winning or losing******************** */
function displayAlert(optionId) {
    
    var audioClip = new Audio;
    var alterImage= document.getElementById("alertImg");
    var alertText = document.getElementById("alertId");
    var alertContect ;
    var imgSrc;
    var audioSrc;


    if (optionId === 'W'){ // alert when user wins
    
            alertContect = "Congratulations!!!!! You won, Do you want to play again?";
            imgSrc = "https://s4.scoopwhoop.com/anj/sw/7543a1cb-193f-4745-9daf-4e607e806259.jpg";
            audioSrc = 'http://www.moviesoundclips.net/download.php?id=3506&ft=mp3';

        //  alert("Word Complete");
    }
    else if (optionId === "L"){ // alert when user lose
        
        alertContect = "It's " + generatedWord + "..... You Lose, Do you want to play again?";
        imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuSGPM05ifu7VU_tXOGPt2WD8xxJGI7hxNAwTcfFS7EVKFpDb";
        audioSrc = 'http://www.moviesoundclips.net/download.php?id=3505&ft=mp3';
    }
    else if(optionId === "E"){ //alert when user decided to quit game
        debugger;
        alertContect = "Game Over !!!!!!!";
        imgSrc = "";
        audioSrc = "";
        alterImage.style.display = 'none';

        var alertBtnYes = document.getElementById("btnYes");
        alertBtnYes.style.display = "none";
    
        var alertBtnNo = document.getElementById("btnNo");
        alertBtnNo.style.display = "none";

    }

    alertText.textContent = alertContect;        
    alterImage.src = imgSrc;
    audioClip.src = audioSrc;
    if (audioSrc !== ""){
        audioClip.play();
    }
    

    var divAlert = document.getElementById("modal");
    divAlert.style.display = "block";
}

/**********************************************function onclik of yes button in the alert************************************ */
function yesClick(){
    var divAlert = document.getElementById("modal");
    divAlert.style.display = "none";
    initiateGame();

}

/**************************************************Function onclick of No button in the alert********************* */
function noClick(){
    debugger;
    var divAlert = document.getElementById("modal");
    divAlert.style.display = "none";
    endGame();
}

/**********************************function ending game************************************************************ */
function endGame(){
    debugger;
    var btnClass = document.getElementsByClassName("btnKey");

    for (var i = 0; i < btnClass.length; i++) {
        btnClass[i].disabled = true;
    }

    displayAlert("E");
}

