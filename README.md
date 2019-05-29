# Word-Guess-Game

## Web page - https://indimadias.github.io/Word-Guess-Game/

A traditional hangman style web app developed based on the fantasy series "Harry Potter".

### Instrunctions
 * Press the play button when the app is loaded.
 * Guess the automatically generated word by clicking the letters.
 * Each word is generated with a hint. Hint will be populated as a tool tip for the word
 * Maximum of 10 turns allowed 
 * If user guessed the word within the allowed turns user will win. 
 *  User can decide to continue playing or end game after winning or losing.
 

### Problem
    Choose a theme for your game! In the demo, You can choose any subject for your theme, though, so be creative!
    Use key events to listen for the letters that your players will type.
    Display the following on the page:
    Press any key to get started!
    Wins: (# of times user guessed the word correctly).


    If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
    As the user guesses the correct letters, reveal them: m a d o _  _ a.

    Number of Guesses Remaining: (# of guesses remaining for the user).
    Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
    After the user wins/loses the game should automatically choose another word and make the user play it.

### Approach
    I have used the Harry potter theme for the game.
        List of words and hints are saved in two arrays in the same order. 
            e.g : Word[0] = Quidditch
                  Hint[0] = Fly to race

        A random word is picked from the array using math.random function

        Alphabet letter are stored in an array

        Letter button layout is dynamacally generated 

        When a button is selected 
            validate on Click 
                Letter found in the word
                If true - populate in the word
                Disable seleted letter button 
                reduce the no of turns 

                If no of truns exceeds maximum before gussing - end game
                Declare win or loose 

        This app is developed only using html, css and javascript. No external libraries are used. 

#### IT's a fun game to play and see how much you know about the series.

## This page is created and maintained by Indima Dias



