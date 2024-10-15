import { useEffect } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";


export default function OptionsMenu({setQuestionsTotal, setDifficulty}) {
    
    function handleDifficultyChange(e){

    }

    // Set default values when the component is first rendered
    useEffect(() => {
        setQuestionsTotal(5); // Default value for number of questions
        setDifficulty(0); // Default value for difficulty
    }, [setQuestionsTotal, setDifficulty]);
    
    return (
        <Container className="options-box">
            <h5>Game Options:</h5>
            <hr/>
            <Row>
                <Col>
                    <InputGroup className="mb-2">
                        <InputGroup.Text id="questionsCount-label">How many questions?</InputGroup.Text>
                        <Form.Select defaultValue="5" onChange={(e) => { setQuestionsTotal(e.target.value) }} aria-label="Select box for number of questions">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </Form.Select>
                    </InputGroup>

                    <InputGroup className="mb-2">
                        <InputGroup.Text id="questionsCount-label">Choose difficulty level</InputGroup.Text>
                        <Form.Select defaultValue="0" onChange={(e) => { setDifficulty(e.target.value)}} aria-label="Select box for difficulty">
                            <option value="0">Beginner</option>
                            <option value="1">Advanced</option>
                            <option value="2">Master</option>
                        </Form.Select>
                    </InputGroup>

                </Col>
            </Row>
        </Container>
    );
}