'use client';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScoreBar from "./ScoreBar";
import QuestionPanel from "./QuestionPanel";

export default function MainPanel(){
    const quest1 = {
        question: "What day is it?",
        answers: ["Tomorrow", "Yesterday", "Someday", "Today"],
        correct: "Today",
        category: "Testing"
    };
    return (
        <Container>
            <Row>
                <Col>
                    <ScoreBar />
                </Col>
            </Row>
            <Row>
                <Col>
                    <QuestionPanel questionObj={quest1}/>
                </Col>
            </Row>
        </Container>
    );
}