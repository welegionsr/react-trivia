'use client';

import '@/ui/styles/MainPanel.css';
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScoreBar from "./ScoreBar";
import QuestionPanel from "./QuestionPanel";
import WinPanel from "./WinPanel";
import questionsDB from "@/data/questionsdb";

function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default function MainPanel() {
    let [questionsCount, setQuestionsCount] = useState(1);
    let [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameOver, setGameOver] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);

    // Detect when game is over
    useEffect(() => {
        if (questionsCount - 1 === questionsDB.count) {
            setGameOver(true);
        }
    }, [questionsCount]);

    // set up the timer
    useEffect(() => {
        if (timeLeft > 0 && !gameOver) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer)
        }
        else if (timeLeft === 0 && !gameOver) {
            // if time is up, move to next question!
            // TODO: show message of time passed!
            console.log("time passed!");
            setTimeout(() => {
                setQuestionsCount(questionsCount + 1);
                setTimeLeft(30);
            }, 1000);
        }
        else {
            // if game is over, don't run a timer
        }
    }, [timeLeft, questionsCount, gameOver]);

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
            setQuestionsCount(questionsCount + 1);
            setTimeLeft(30);
            if (btnElement) {
                btnElement.style.filter = "hue-rotate(0)";
            }
        }, 1000);

    }

    if (gameOver) {
        return <WinPanel
            score={score}
            questionsCount={questionsCount}
            correctCount={correctCount}
        />
    }

    let currentQuestion = questionsDB.questions[questionsCount - 1];
    return (
        <Container className="main-panel mb-5">
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


