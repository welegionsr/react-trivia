'use client';

import './styles/GamePage.css';


import { useState, useEffect, useMemo, useCallback } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import ScoreBar from './ScoreBar';
import QuestionPanel from './QuestionPanel';
import questionsDB from '@/data/questionsdb';
import { motion, AnimatePresence } from 'framer-motion';

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
    return (
        <Container className="game-panel mb-5">
            <Row className='mb-2'>
                <Col>
                    <ScoreBar current={questionsCount} total={questionsDB.count} score={score} timeLeft={(timeLeft)} />
                </Col>
            </Row>
            <Row key={questionsCount}>
                <Col>
                    {currentQuestion ? (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={questionsCount}
                                initial={{ opacity: 0, y: -100, scale: 0 }} // Start hidden
                                animate={{ opacity: 1, y: 0, scale: 1 }}    // Fade and slide in
                                exit={{ opacity: 0, y: 100, scale: 0 }}     // Fade and slide out
                                transition={{ duration: 0.25 }}
                            >
                                <QuestionPanel questionObj={currentQuestion} onAnswer={handleAnswer} />
                            </motion.div>
                        </AnimatePresence>
                    ) : (
                        <div>No more questions</div>
                    )}
                </Col>
            </Row>

        </Container>
    );
}