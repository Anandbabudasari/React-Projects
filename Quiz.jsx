import React, { useState } from "react";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizComplete, setQuizComplete] = useState(false);

    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Berlin', isCorrect: false },
                { answerText: 'Madrid', isCorrect: false },
            ],
        },
        {
            questionText: 'Who wrote "To Kill a Mockingbird"?',
            answerOptions: [
                { answerText: 'Harper Lee', isCorrect: true },
                { answerText: 'J.K. Rowling', isCorrect: false },
                { answerText: 'William Shakespeare', isCorrect: false },
                { answerText: 'Charles Dickens', isCorrect: false },
            ],
        },
        // Add more questions here...
    ];

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setQuizComplete(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setQuizComplete(false);
    };

    return (
        <div className="quiz">
            {quizComplete ? (
                <div className="quiz-complete">
                    <h2>Quiz Complete!</h2>
                    <p>Your score: {score} out of {questions.length}</p>
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                    <div className="question-container">
                        <div className="question-section">
                            <div className="question-count">
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className="question-text">
                                {questions[currentQuestion].questionText}
                            </div>
                        </div>
                        <div className="answer-section">
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
        </div>
    );
}

export default Quiz;
