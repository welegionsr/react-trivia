'use client';

import '@/ui/styles/AnswersGrid.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnswerBtn from "./AnswerBtn";


export default function AnswersGrid({answers, correct}){
    const answersPerRow = 2;

    // split answers into chunks (a chunk for each row)
    const chunkedAnswers = [];
    for(let i = 0; i < answers.length; i += answersPerRow)
    {
        chunkedAnswers.push(answers.slice(i, i + answersPerRow));
    }

    function handleClick(btnAnswer){
        if (btnAnswer === correct)
        {
            console.log("Correct!");
        }
        else
        {
            console.log("Incorrect! you pressed " + btnAnswer);
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