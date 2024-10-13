'use client';

import './styles/GamePage.css';


import { useState, useEffect, useMemo, useCallback } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import ScoreBar from './ScoreBar';
import QuestionPanel from './QuestionPanel';
import questionsDB from '@/data/questionsdb';
import { CSSTransition } from 'react-transition-group';

export default function GamePage({ questionsCount, setQuestionsCount, score, setScore, gameOver, endGame, correctCount, setCorrectCount }) {
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

    const handleNextQuestion = useCallback(() => {
        if (questionsCount >= questionsDB.count) {
            endGame();
        } else {
            setQuestionsCount(prevCount => prevCount + 1);
            setTimeLeft(30);
        }
    }, [questionsCount, endGame]);

    const handleAnswer = useCallback((isCorrect, btnElement) => {
        if (isCorrect) {
            setCorrectCount(prevCount => prevCount + 1);
            setScore(prevScore => prevScore + (timeLeft !== 0 ? timeLeft * 10 : 10));
            btnElement.style.filter = "hue-rotate(-50deg)";
        } else {
            btnElement.style.filter = "hue-rotate(50deg)";
        }

        setTimeout(() => {
            handleNextQuestion();
            if (btnElement) {
                btnElement.style.filter = "hue-rotate(0)";
            }
        }, 1000);
    }, [handleNextQuestion, timeLeft]);

    let currentQuestion = useMemo(() => questionsDB.questions[questionsCount - 1], [questionsCount]); // currentQuestion will only be recalculated (and cause re-renders) when questionsCount changes.
    console.log("Current question: ", currentQuestion);
    return (
        <Container className="game-panel mb-5">
            <Row className='mb-2'>
                <Col>
                    <ScoreBar current={questionsCount} total={questionsDB.count} score={score} timeLeft={(timeLeft)} />
                </Col>
            </Row>
            <CSSTransition
                in={!!currentQuestion}
                timeout={500}
                classNames="question-slide"
                unmountOnExit
                onEnter={() => console.log('Enter animation triggered')}
                onEntered={() => console.log('Enter animation completed')}
                onExit={() => console.log('Exit animation triggered')}
                onExited={() => console.log('Exit animation completed')}
            >
                <Row key={questionsCount}>
                    <Col>
                        {currentQuestion ? (
                            <QuestionPanel questionObj={currentQuestion} onAnswer={handleAnswer} />
                        ) : (
                            <div>No more questions</div>
                        )}
                    </Col>
                </Row>
            </CSSTransition>
        </Container>
    );
}