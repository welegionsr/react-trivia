import './styles/GamePage.css';


import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import ScoreBar from './ScoreBar';
import QuestionPanel from './QuestionPanel';
import questionsDB from '@/data/questionsdb';

export default function GamePage({ questionsCount, setQuestionsCount, score, setScore, gameOver, endGame, correctCount, setCorrectCount }){
    const [timeLeft, setTimeLeft] = useState(30);


    // set up the timer
    useEffect(() => {
        if (timeLeft > 0 && !gameOver) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer)
        }
        else if (timeLeft === 0 && !gameOver) {
            // if time is up, move to next question! (or end the game)
            // TODO: show message of time passed!
            console.log("time passed!");
            setTimeout(() => {
                handleNextQuestion();
            }, 1000);
        }
    }, [timeLeft, gameOver]);

    function handleNextQuestion(){
        if(questionsCount >= questionsDB.count) {
            endGame();
        }
        else
        {
            setQuestionsCount(questionsCount + 1);
            setTimeLeft(30);
        }
    }

    function handleAnswer(isCorrect, btnElement) {
        console.log("Button element: ", btnElement);

        if (isCorrect) {
            setCorrectCount(correctCount + 1);
            btnElement.style.filter = "hue-rotate(-50deg)";
            setScore(score + (timeLeft != 0 ? timeLeft * 10 : 10));
        }
        else {
            btnElement.style.filter = "hue-rotate(50deg)";
        }

        setTimeout(() => {
            handleNextQuestion();
            if (btnElement) {
                btnElement.style.filter = "hue-rotate(0)";
            }
        }, 1000);

    }

    let currentQuestion = questionsDB.questions[questionsCount - 1];

    return (
        <Container className="game-panel mb-5">
            <Row className='mb-2'>
                <Col>
                    <ScoreBar current={questionsCount} total={questionsDB.count} score={score} timeLeft={(timeLeft)} />
                </Col>
            </Row>
            <Row>
                <Col>
                    {currentQuestion ? (
                        <QuestionPanel questionObj={currentQuestion} onAnswer={handleAnswer} />
                    ) : (
                        // Optionally, show something else here (like a "No more questions" message)
                        <div>No more questions</div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}