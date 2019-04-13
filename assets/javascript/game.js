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
        // btn.setAttribute('onclick', "validateChar('" + btn.innerHTML + "')");
        btn.setAttribute('onclick',"validateChar( '" + btnId + "')");
        btn.className="btnKey";
        grid.appendChild(btn);
        // document.body.appendChild(btn);
    }

    document.body.appendChild(grid);

} // end of function createButtons



/****************************************function to random generate the word***************Cl*********************************************** */
function generateWord(){

    
    var wordsArray=["quidditch","muggle","Harry Potter","Polyjuice","Azkaban","Patronus","Hogwarts","Gryffindor","Slytherin","Ravenclaw","Hufflepuff",
                     "Basilisk","Death Eater","Diagon Alley","Dumbledore","Firebolt","Goblet of Fire","Golden Snitch","Hermione","Ron Weasley"];

    compChoise = "";
    compChoise = wordsArray[Math.floor(Math.random()*wordsArray.length)]; 
    // compChoise ="FIRE"
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
    printWord = compWord.join(' ');

    //  debugger;
    
    var divWord = document.getElementById("wordGen"); // element id for div wordGen
    var pWordGuess = document.getElementById("wordGuess"); //element id for pragraph wordGuess
    console.log(printWord);
    
    pWordGuess.textContent = printWord;
    
} //end of function generateWord

/*******************************function to validate the user entered character*********************************** */
function validateChar(elementId){
    // debugger;

   var buttonId = document.getElementById(elementId) ;
   var useChoise = buttonId.innerHTML;

   console.log(useChoise);
   var letterFound = false;

   console.log(useChoise);

   for (var i = 0 ; i < compChoise.length; i++) {
       if (compChoise[i] === useChoise){
           letterFound = true;
           compWord[i] = useChoise;
       }
   }
// debugger;
  if(letterFound === false){
   maxTurns = maxTurns - 1;
   var noOfTurns = document.getElementById("textTri");
   noOfTurns.innerHTML = maxTurns;
  } 
  else {
      var modifiedWord = compWord.join(' ');
      var pWordGuess = document.getElementById("wordGuess"); //element id for pragraph wordGuess
      console.log(modifiedWord);
      
      pWordGuess.textContent = modifiedWord;
  }
  buttonId.disabled = true;

  var turnValidate = validateTurns();
  
} // end of function validateChar

/***************************************funtion to validate the no of available turns****************************** */
function validateTurns(){
    debugger;
    if (maxTurns === 0 ){
        displayAlert("L");
        
    }
    else {
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
    debugger;
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
            audioSrc = 'http://soundfxcenter.com/movies/harry-potter/8d82b5_Harry_Potter_Lumos_Maxima_Sound_Effect.mp3';

        //  alert("Word Complete");
    }
    else if (optionId === "L"){ // alert when user lose
        
        alertContect = "You Lose, Do you want to play again?";
        imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuSGPM05ifu7VU_tXOGPt2WD8xxJGI7hxNAwTcfFS7EVKFpDb";
        audioSrc = 'http://soundfxcenter.com/movies/harry-potter/8d82b5_HP_Bellatrix_Lestrange_Avada_Kedavra_Sound_Effect.mp3';
    }
    else if(optionId === "E"){ //alert when user decided to quit game
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
    audioClip.play();

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
    var divAlert = document.getElementById("modal");
    divAlert.style.display = "none";
    endGame();
}

/**********************************function ending game************************************************************ */
function endGame(){
    var btnClass = document.getElementsByClassName("btnKey");

    for (var i = 0; i < btnClass.length; i++) {
        btnClass[i].disabled = true;
    }

    displayAlert("E");
}

