// Function to check the answer
function checkAnswer(questionId, selectedOption) {
    let result = document.getElementById("result_" + questionId);
    let correctAnswer;

    // Set the correct answer for each question
    switch (questionId) {
        case 1:
            correctAnswer = 2; // 7
            break;
        case 2:
            correctAnswer = 1; // 5
            break;
        case 3:
            correctAnswer = 1; // 4
            break;
        case 4:
            correctAnswer = 1; // 2
            break;
        case 5:
            correctAnswer = 1; // Exits the current loop
            break;
        case 6:
            correctAnswer = 3; // Both Option 1 and Option 2
            break;
        case 7:
            correctAnswer = 3; // Both Option 1 and Option 2
            break;
        case 8:
            correctAnswer = 1; // 2.000000
            break;
        case 9:
            correctAnswer = 3; // float32
            break;
        case 10:
            correctAnswer = 1; // int
            break;
        default:
            correctAnswer = null;
    }

    // Check if the selected option is the correct answer
    if (selectedOption === correctAnswer) {
        result.textContent = "✅ Correct!";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Incorrect. Try again!";
        result.style.color = "red";
    }
}
