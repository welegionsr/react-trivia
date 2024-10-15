'use client';

import '@/ui/styles/AnswersGrid.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnswerBtn from "./AnswerBtn";
import { useLayoutEffect, useState } from 'react';


export default function AnswersGrid({answers, correct, onAnswer}){
    const answersPerRow = 2;
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [answered, setAnswered] = useState(false); // Track whether the question has been answered (to avoid multiple clicks)

    useLayoutEffect(() => {
        const shuffled = [...answers];

        for(let i = shuffled.length - 1; i > 0; --i)
        {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setShuffledAnswers(shuffled);
    }, [answers]);

    // split answers into chunks (a chunk for each row)
    const chunkedAnswers = [];
    for (let i = 0; i < shuffledAnswers.length; i += answersPerRow)
    {
        chunkedAnswers.push(shuffledAnswers.slice(i, i + answersPerRow));
    }

    function handleClick(e, btnAnswer){
        if (answered) return; // Prevent further clicks after the first answer is given

        setAnswered(true); // Set to true to block further answers

        e.persist(); // prevents the event from being nullified
        
        console.log("Event: ", e);  // Log the event to check
        console.log("Target: ", e.target);  // Log target element
        
        if (btnAnswer === correct)
        {
            onAnswer(true, e.target);
        }
        else
        {
            console.log("Incorrect! you pressed " + btnAnswer);
            onAnswer(false, e.target);
        }

        // Optionally reset the flag after some delay if needed (e.g., after a new question)
        setTimeout(() => {
            setAnswered(false);
        }, 1000); // Reset after 1 second (adjust as needed)
    }

    return (
        <div className="answers-grid mt-2 p-1">
            {
                chunkedAnswers.map( (rowAnswers, rowIndex) => (
                    <Row key={rowIndex}>
                        {
                            rowAnswers.map((answer, colIndex) => (
                                <Col key={colIndex} className="text-center">
                                    <AnswerBtn 
                                        answer={answer} 
                                        clickHandler={handleClick}
                                        key={`${answer}-${colIndex}`} // Unique key
                                        disabled={answered}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                ))
            }
        </div>
    );
}