// @ts-check <--- refer to Gitpod Welcome, this is the JavaScript Type Checking to spot mistakes

// Game introductory modal
// lines 8 - 39 extracted & improvised from https://www.w3schools.com/howto/howto_css_modals.asp
// according to w3schools getElementById finds an HTML element with id e.g id="gameIntroModal"

// get the modal and assign it to a variable
const gameModal = document.getElementById("gameIntroModal");

// get the play button that opens the modal
const playIconButton = document.getElementById("playButtonModal");

// get the span element that closes the modal
const modalClose = document.getElementsByClassName("close")[0];

// get each of the game speed levels defined within the buttons
const gameEasy = document.getElementById("bslGameEasy");
const gameMedium = document.getElementById("bslGameMedium");
const gameHard = document.getElementById("bslGameHard");

// get the button element that commences the BSL game
const commenceGame = document.getElementById("playGame");

// when the user/visitor clicks the play icon button, open the modal
playIconButton.onclick = function() {
    gameModal.style.display = "block";
}

// when the user/visitor clicks on span element (x), close the modal
modalClose.onclick = function() {
    gameModal.style.display = "none";
}

// when the user/visitor clicks anywhere outside of the modal, close it
window.onclick = function(close) {
    if (close.target == gameModal) {
        gameModal.style.display = "none";
    }
}

/* when the user/visitor clicks on the 'Play Game' button, the game simply 
commences by displaying a series of images */
commenceGame.onclick = function() {
    
}

/* create a function that determines which of each specific speed i.e. 
easy/medium/hard (slow/normal/fast) has been clicked on so that a change in 
background colour can be applied, yet only one of the three options can be 
selected. Then specify a speed as a time in milliseconds. */



// declare an array variable associated with deaf culture
const bslwords = ["bond", "social", "touch", "rnid", "company", "dog", "attentive", 
"express", "deaf", "sign", "hand", "mouth", "lip", "read", "visual", "contact", "eye", 
"fingers", "sense", "belong", "culture", "diverse", "values", "beliefs", "identity"];
console.log(bslwords);

// grab a random word from the above array variable named bslwords and put into a new array, then split the word into letters
// source to select a random value:- https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
const randombslword = Math.floor(Math.random() * bslwords.length);
console.log(randombslword, bslwords[randombslword].split(""));

// create a variable to split the word into letters
let splitWord = bslwords[randombslword].split("");

// according to Fatima (CI) this retrieves the div from the frontend and Sean (CI) hold all the letters
let bslDivContainer = document.getElementById("bslWordContainer");

// this iterates over the bslwords array and for each word, create a html element and add the word to it
bslwords.forEach(letter => {
    bslDivContainer.innerHTML += `<div><img src="assets/images/bsl-alphabets/${letter}.png" /><p>${letter}</p></div>`
});
