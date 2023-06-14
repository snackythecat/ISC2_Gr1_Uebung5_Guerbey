'use strict';
/*
    In diesem Spiel muss der Spieler das gesuchte Wort erraten, indem er Buchstaben eingibt.
    Der Computer wählt zufällig ein Wort aus einer vordefinierten Liste aus.
    Der Spieler gibt Buchstaben ein und überprüft, ob sie im Wort enthalten sind.
    Bei jedem richtigen Buchstaben wird er angezeigt und das Spiel prüft, ob das gesamte Wort erraten wurde.
    Bei jedem falschen Buchstaben wird eine Anzahl von Fehlversuchen gezählt und das Spiel endet,
    wenn der Spieler sechs falsche Versuche gemacht hat.

    Die Funktion checkGuess() überprüft die eingegebene Vermutung des Spielers und aktualisiert
    das versteckte Wort, wenn die Vermutung korrekt ist. Wenn die Vermutung falsch ist,
    wird die Anzahl der Versuche erhöht und die drawHangman()-Funktion aufgerufen, um das
    Galgenmännchen zu zeichnen. Wenn die maximale Anzahl von Versuchen erreicht ist, wird das Spiel beendet.

    Die Funktion drawHangman() zeichnet das Galgenmännchen basierend auf der Anzahl der Versuche.
    Sie ruft die entsprechende Funktion im hangmanParts-Array auf, um jeden Teil des Galgenmännchens
    zu zeichnen. Wenn die maximale Anzahl von Versuchen erreicht ist, wird das Spiel beendet und
    das korrekte Wort wird angezeigt.

    Der Code beginnt das Spiel automatisch, wenn die Seite geladen wird, indem die
    startGame()-Funktion aufgerufen wird.

    Ihr könnt euch an den Einrückungen daran orientieren was ggf in einer Schleife oder Verzweigung geschrieben werden muss

    Advanced Aufgabe:
    Du kannst die Liste der Wörter erweitern oder das Spiel weiter anpassen, indem du Grafiken
    für das Galgenmännchen hinzufügst oder weitere Spielregeln implementierst.
*/

// Das Array words enthält die möglichen Wörter, aus denen eines ausgewählt wird.
let words = ['hangman', 'javascript', 'programming', 'openai'];

// Zufälliges Wort auswählen
let randomWord = words[Math.floor(Math.random() * words.length)];

// Verstecktes Wort, das den aktuellen Status des Wortes darstellt
let hiddenWord = '';

// Anzahl der Versuche, um das Wort zu erraten
// attempts wird auf 0 gesetzt, um die Anzahl der Versuche zu verfolgen.
let attempts = 0;

// Canvas-Element und Kontext für das Zeichnen des Hangman
// canvas und ctx werden verwendet, um auf das Canvas-Element
// und den 2D-Kontext für das Zeichnen des Hangman zuzugreifen.
let canvas = document.querySelector('#hangmanCanvas');
let ctx = canvas.getContext('2d');

// Array mit Funktionen zum Zeichnen der Hangman-Teile
// hangmanParts ist ein Array von Funktionen, die jeweils einen Teil des Hangman zeichnen.
let hangmanParts = [
    function () { ctx.beginPath(); ctx.moveTo(50, 350); ctx.lineTo(150, 350); ctx.stroke(); }, // Base
    function () { ctx.beginPath(); ctx.moveTo(100, 350); ctx.lineTo(100, 50); ctx.stroke(); }, // Pole
    function () { ctx.beginPath(); ctx.moveTo(100, 50); ctx.lineTo(250, 50); ctx.stroke(); }, // Beam
    function () { ctx.beginPath(); ctx.moveTo(250, 50); ctx.lineTo(250, 100); ctx.stroke(); }, // Rope
    function () { ctx.beginPath(); ctx.arc(250, 130, 30, 0, Math.PI * 2); ctx.stroke(); }, // Head
    function () { ctx.beginPath(); ctx.moveTo(250, 160); ctx.lineTo(250, 270); ctx.stroke(); }, // Body
    function () { ctx.beginPath(); ctx.moveTo(250, 190); ctx.lineTo(200, 150); ctx.stroke(); }, // Left Arm
    function () { ctx.beginPath(); ctx.moveTo(250, 190); ctx.lineTo(300, 150); ctx.stroke(); }, // Right Arm
    function () { ctx.beginPath(); ctx.moveTo(250, 270); ctx.lineTo(200, 320); ctx.stroke(); }, // Left Leg
    function () { ctx.beginPath(); ctx.moveTo(250, 270); ctx.lineTo(300, 320); ctx.stroke(); } // Right Leg
];

/* Ein Event Listener wird dem "Guess" Button hinzugefügt, um die Funktion checkGuess auszulösen. */
// ToDo erstelle den Event Listener
    document.querySelector("button").addEventListener("click", function (){
        checkGuess();
    })
/* startGame initialisiert das Spiel, indem ein zufälliges Wort ausgewählt und das versteckte Wort aktualisiert wird. */
function startGame() {
    /*  randomWord wird initialisiert, indem ein zufälliges Wort aus dem Array words ausgewählt wird. */
    // ToDo initialisiere randomWord um ein zufälliges Wort aus dem Array words auszuwählen
    // ist schon vorhanden
    document.getElementById("guessInput").value = "";
    console.log(randomWord);
    /* hiddenWord wird initialisiert und als Zeichenkette von Unterstrichen dargestellt,
       um den aktuellen Zustand des zu erratenden Wortes darzustellen. */
    // ToDo initialisiere hiddenWord
    // ToDo erweitere die Variabel hiddenWord um JEDEN Buchstaben des zu erratenen Wortes um einen Unterstrich

    let correctGuess = false;

    for (let i = 0; i <=randomWord.length; i++){
        hiddenWord += "_";
    }

    /* Wort im HTML aktualisieren */
    // ToDo Selektiere das HTML Element mit der id word
    let word = document.getElementById("word");
    // ToDo Gib im HTML Element word die Variable hiddenWord aus
    word.innerHTML = hiddenWord;

    /* Canvas leeren  */
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


/* Funktion zum Überprüfen des eingegebenen Buchstabens
   checkGuess überprüft den eingegebenen Buchstaben und aktualisiert das
   versteckte Wort und das Ergebnis entsprechend.  */
function checkGuess() {
    // ToDo hol dir den Value aus dem Input Feld mit der ID guessInput und konvertiere den Value zu einem Kleinbuchstaben
    let guess = document.getElementById("guessInput").value.toLowerCase();
    console.log(guess);
    // ToDo speichere den Value in einer lokalen Variabel namens guess

    // ToDo selektiere das HTML Element mit der ID result und speichere es in die Variable result
    let result = document.getElementById("result");
    // ToDo initialisiere eine boolsche Variable correctGuess und setze sie auf false
    let correctGuess = false;

    /* Neues verstecktes Wort initialisieren  */
    // ToDo initialisiere die Variable newHiddenWord mit einem leeren String
    let newHiddenWord = '';

    // ToDo überprüfe in einer Schleife jeden Buchstaben des randomWord
    for (let i = 0; i < randomWord.length; i++) {
        console.log(randomWord[i]);
        if (randomWord[i] === guess) {
            newHiddenWord += guess;
            correctGuess = true;
            console.log("Richtiger Guess");
        } else {
            newHiddenWord += hiddenWord[i];
            console.log("Falscher Guess");
        }
    }
        /* Wenn der geratene Buchstabe mit dem aktuellen Buchstaben des zufälligen Wortes übereinstimmt  */
        // ToDo Wenn der Buchstabe des randomWord mit guess übereinstimmt

            /* Den Buchstaben dem neuen versteckten Wort hinzufügen  */
            // ToDo dann erweitere die Variable newHiddenWord um guess

            /* Markiere den richtigen Tipp als korrekt  */
            // ToDo setze correctGuess auf true

        // ToDo andernfalls
            /* Andernfalls den Buchstaben aus dem aktuellen versteckten Wort übernehmen  */
            // ToDo übernimm den Buchstaben aus dem aktuellen versteckten Wort




    /* Aktualisiere das versteckte Wort mit dem neuen versteckten Wort  */
    // ToDo weise dem hiddenWord das newHiddenWord zu
    hiddenWord = newHiddenWord;

    /* Überprüfe, ob das versteckte Wort mit dem zufälligen Wort übereinstimmt */
    // ToDo Wenn hiddenWord mit randomWord übereinstimmt

    if (hiddenWord === randomWord) {
        result.textContent = 'Congratulations! You guessed the word.';
       correctGuess = true;
    } else {
        if (correctGuess) {
            result.textContent = 'Correct guess!';
        } else {
            result.textContent = 'Wrong guess. Try again.';
            attempts++;
            drawHangman();
        }
    }

        /* Wenn das versteckte Wort mit dem zufälligen Wort übereinstimmt,
           zeige die Erfolgsmeldung an und deaktiviere das Eingabefeld */
        // ToDo Gratuliere im result dem User das er das Wort erraten hat und deaktiviere das Input Feld


        /* Wenn der Tipp korrekt ist, zeige die Meldung "Correct guess!" an */
        // ToDo wenn nur der Buchstabe richtig geraten wurde gib eine Erfolgsmeldung im result aus das der Buchstabe richtig ist


        /* Wenn der Tipp falsch ist, zeige die Meldung "Wrong guess. Try again." an,
           erhöhe die Anzahl der Versuche und zeichne den Hangman */
        // ToDo Ansonsten gib eine Meldung im result aus das der Versuch falsch war

        // ToDo erhöhe den attempts Counter um eines

        // ToDo ruf die drawHangman Funktion auf



    /* Aktualisiere das Wort im HTML mit dem aktuellen versteckten Wort */
    // ToDo Selektiere das HTML Element mit der ID word und gib die Variable hiddenWord aus
        document.getElementById("word").innerHTML= hiddenWord;

    /* Setze das Eingabefeld zurück */
    // ToDo leere das Input Feld
    document.getElementById("guessInput").value = "";

    /* Fokussiere das Eingabefeld für den nächsten Tipp */
    // ToDo setze den Fokus mit .focus() auf das Input Feld
    document.querySelector("#guessInput").focus;
}


/* Funktion zum Zeichnen des Hangman
   drawHangman zeichnet den aktuellen Stand des Hangman, basierend auf der Anzahl der Versuche.
   Zuerst wird der entsprechende Hangman-Teil basierend auf der Anzahl der Versuche gezeichnet.
   Anschließend wird überprüft, ob die maximale Anzahl der Versuche erreicht wurde.
   Wenn dies der Fall ist, wird die Meldung "Game over. The word was: [randomWord]" angezeigt und
   die endGame Funktion aufgerufen, um das Spiel zu beenden. */
function drawHangman() {
    /* Zeichne den Hangman-Teil entsprechend der aktuellen Anzahl der Versuche */
    hangmanParts[attempts]();

    /* Überprüfe, ob die maximale Anzahl der Versuche erreicht ist */
    // ToDo wenn die Anzahl der Versuche (attempts) mit der Anzahl der Länge des hangmanParts - 1 übereinstimmt

        // Wenn die maximale Anzahl der Versuche erreicht ist, zeige die Meldung "Game over. The word was: [randomWord]" an */
        // ToDo Gib im HTML Element mit der ID result den Text Game Over aus und das Wort das erraten werden sollte

        // ToDo Rufe die endGame Funktion auf, um das Spiel zu beenden

    if(hangmanParts.length -1 === attempts){
        document.getElementById("result").innerHTML = `Game over. The word was: ${randomWord}`
    } else{
        endGame();
    }

}


function endGame() {
    /* Das Eingabefeld und der Check-Button werden ausgewählt */
    // ToDo Selektiere das Input Feld und den Button mit der Klasse checkGuess und setze den Style display: none; darauf
    document.getElementById("guessInput").classList.add("checkGuess");
    document.querySelector(".checkGuess").classList.add("checkGuess");

}


/* Beim Laden der Seite wird das Spiel automatisch gestartet, indem die Funktion startGame aufgerufen wird. */
window.onload = startGame;
