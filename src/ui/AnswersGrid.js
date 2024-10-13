'use client';

import '@/ui/styles/AnswersGrid.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnswerBtn from "./AnswerBtn";
import { useLayoutEffect, useState } from 'react';


export default function AnswersGrid({answers, correct, onAnswer}){
    const answersPerRow = 2;
    const [shuffledAnswers, setShuffledAnswers] = useState([]);

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