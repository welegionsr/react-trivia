'use client';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import '../ui/styles/ScoreBar.css';

export default function ScoreBar(){
    return (
        <Container className="w-100 score-bar mb-3">
            <Row>
                <Col xs={5}>
                    Question X/X
                </Col>
                <Col xs={4}>
                    Time:
                </Col>
                <Col>
                    Score:
                </Col>
            </Row>
        </Container>
    );
}