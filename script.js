//store and add new questions and answers 
const questionInput = document.getElementById("questionInput");
const answerInput = document.getElementById("answerInput");
const addCardBtn = document.getElementById("addCardBtn");

//store user input into arrays 
const questions = [];
const answers = []; 

//Store onto HTML as now its only stored on Java
function displayFlashcards() {
    const container = document.getElementById("flashcardContainer");
    container.innerHTML = "";

    //goes through flashcards one by one!!!
    for (let i = 0; i < questions.length; i++) {
        //creates new card element in Javascript for html as the input is unknown (user's input) and not fixed input (like so html)
        const card = document.createElement("div");
        //OUTER container
        card.classList.add("card");

        //final result: <div class="card"></div>

        //html code (INNER CONTAINER) 
        //get the item at position i
        card.innerHTML = `
            <div class="front">${questions[i]}</div>
            <div class="back">${answers[i]}</div>
        `;

        // flip on click, CSS does not react to javascript code --> html code IN javascript
        card.addEventListener("click", function () {
            card.classList.toggle("flip");
        });

        //displayed on the website as it is plugged BACk into HTML
        container.appendChild(card);
    }
}

//start the entire function when the user clicks the button and changes the user input into a string
addCardBtn.addEventListener("click", function() {
    const question = questionInput.value
    const answer = answerInput.value

//prevent INCOMPLETE flashcards (if either container is empty, the function is immediately stopped and returned to the top)
    if (question === "" || answer === "") return;

//adds the new item into the end of the array
    questions.push(question);
    answers.push(answer);

//for the visuals (CSS styling and more code TOP)
    displayFlashcards();

//after completing the code, the 2 inputs will be cleared for new input
    questionInput.value = "";
    answerInput.value = "";
});

