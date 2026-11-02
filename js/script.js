
console.log("script.js connected!");

// Stores the user's answers
let selectedAnswers = {};

// Gets all the questions
const questions = document.querySelectorAll(".question-block");

// Goes through each question
questions.forEach((question, index) => {

    // Gets the answer buttons
    const buttons = question.querySelectorAll(".answer-btn");

    buttons.forEach((button) => {

        // Runs when an answer is clicked
        button.addEventListener("click", () => {

            // Removes selected style from other buttons
            buttons.forEach((btn) => {
                btn.classList.remove("selected");
            });

            // Highlights the selected answer
            button.classList.add("selected");

            // Saves the answer
            selectedAnswers[index] = button.dataset.answer;

            console.log(selectedAnswers);
        });
    });
});

// Calculates and displays the result
function displayResult() {

    const resultContainer = document.getElementById("result-container");

    // Makes sure all questions are answered
    if (Object.keys(selectedAnswers).length < questions.length) {
        resultContainer.textContent = "Please answer all questions first!";
        return;
    }

    // Starts each personality score at zero
    let fighter = 0;
    let thinker = 0;
    let protector = 0;

    // Counts the selected answers
    Object.values(selectedAnswers).forEach((answer) => {
        if (answer === "fighter") {
            fighter++;
        } else if (answer === "thinker") {
            thinker++;
        } else if (answer === "protector") {
            protector++;
        }
    });

    // Finds the personality with the most answers
    let result = "";
    let description = "";

    if (fighter >= thinker && fighter >= protector) {
        result = "The Fighter";
        description = "You are brave, strong, and never give up!";
    } else if (thinker >= fighter && thinker >= protector) {
        result = "The Thinker";
        description = "You are smart, calm, and always have a plan!";
    } else {
        result = "The Protector";
        description = "You are loyal, caring, and always help others!";
    }

    // Shows the result on the webpage
    resultContainer.innerHTML = `
        <h2>${result}</h2>
        <p>${description}</p>
    `;
}

// Runs when Show Results is clicked
document.getElementById("show-results").addEventListener("click", displayResult);
