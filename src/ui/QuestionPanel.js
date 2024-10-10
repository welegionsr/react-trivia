'use client';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import '../ui/styles/QuestionPanel.css';
import QuestionCard from "./QuestionCard";
import AnswersGrid from "./AnswersGrid";

export default function QuestionPanel({ questionObj, onCorrect }){
    return (
        <Container className="w-100 question-panel">
            <Row>
                <Col>
                    <QuestionCard 
                        category={questionObj.category}
                        imageUrl={questionObj.imageUrl}
                    >
                        {questionObj.question}
                    </QuestionCard>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AnswersGrid answers={questionObj.answers} correct={questionObj.correct} onCorrect={onCorrect}/>
                </Col>
            </Row>
        </Container>
    );
}