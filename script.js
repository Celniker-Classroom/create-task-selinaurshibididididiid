var flashcards = [];

// Get id elements from HTML
var inputQuestion = document.querySelector("#question");
var inputAnswer = document.querySelector("#answer");
var button = document.querySelector("#btn");
var display = document.querySelector("#flashcardDisplay");
var currentIndex = 0;

button.addEventListener("click", function () {
    var question = inputQuestion.value;
    var answer = inputAnswer.value;

    addFlashcard(question, answer);
    displayFlashcards(flashcards);

    //clears user input after clicking add btn
    inputQuestion.value = "";
    inputAnswer.value = "";
});

// To add flashcards
function addFlashcard(question, answer) {
    flashcards.push({
        question: question,
        answer: answer
    });
}

function displayFlashcards(cardList) { display.innerHTML = "";

    // when no flashcards:
    if (cardList.length === 0) { display.innerHTML = "No flashcards to show"; }
    // displays answer to its corresponding question
    else { 
    for (var i = 0; i < cardList.length; i++) { 
    display.innerHTML += 
    "<div class='flip-card' style='z-index:" + (i === currentIndex ? 100 : i) + "'>" +
        "<div class='flip-card-inner'>" +
            "<div class='flip-card-front'>" + cardList[i].question + "</div>" +
            "<div class='flip-card-back'>" + cardList[i].answer + "</div>" +
        "</div>" +
    "</div>";
}

        // To flip flashcard when clicked
         var cards = document.querySelectorAll(".flip-card");
        for (var i = 0; i < cards.length; i++) {
            cards[i].addEventListener("click", function () {
                this.classList.toggle("is-flipped");
            });
        }
    } 
}

function goLeft() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = flashcards.length - 1;
    }

    displayFlashcards(flashcards);
}

function goRight() {
    currentIndex++;

    if (currentIndex >= flashcards.length) {
        currentIndex = 0;
    }

    displayFlashcards(flashcards);
}

document.querySelector("#flipLeft").addEventListener("click", goLeft);
document.querySelector("#flipRight").addEventListener("click", goRight);


