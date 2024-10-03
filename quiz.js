function checkAnswer() {
    let correctAnswer = '4';
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    let feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedback.textContent = 'Correct, Well done.';
    }
    else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

const click = document.getElementById('submit-answer');

click.addEventListener('click', checkAnswer);
console.log(feedback);