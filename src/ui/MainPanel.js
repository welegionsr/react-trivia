'use client';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScoreBar from "./ScoreBar";
import QuestionPanel from "./QuestionPanel";
import WinPanel from "./WinPanel";
import { useState, useEffect } from "react";
import questionsDB from "@/data/questionsdb";

function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default function MainPanel(){
    let [questionsCount, setQuestionsCount] = useState(1);
    let [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);


    // set up the timer
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer)
        }
    }, [timeLeft]);

    function handleCorrect(){
        setQuestionsCount(questionsCount + 1);
        setScore(score + 50);
        setTimeLeft(30);
    }

    if(questionsCount - 1 === questionsDB.count)
    {
        // end of game!
        return (
            <WinPanel score={score}/>
        );
    }
    let currentQuestion = questionsDB.questions[questionsCount - 1];
    return (
        <Container>
            <Row>
                <Col>
                    <ScoreBar current={questionsCount} total={questionsDB.count} score={score} timeLeft={(timeLeft)} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <QuestionPanel questionObj={currentQuestion} onCorrect={handleCorrect}/>
                </Col>
            </Row>
        </Container>
    );
}


