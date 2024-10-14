'use client';

import './styles/WelcomePage.css';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import OptionsMenu from './OptionsMenu';


export default function WelcomePage({onStart, setQuestionsTotal, setDifficulty}){
    return (
        <Container className="mt-2">
            <Row className="justify-content-center">
                <Card className="text-center" style={{ width: '26rem', padding: 0 }}>
                    <Card.Img variant='top' src='logo.webp' />
                    <Card.Header><h4>Trivia Game</h4></Card.Header>
                    <Card.Body>
                        <p className="mb-4">
                            This is a simple trivia game!
                        </p>
                        
                       
                        <OptionsMenu setQuestionsTotal={setQuestionsTotal} setDifficulty={setDifficulty}/>
                       

                    </Card.Body>
                    <Card.Footer>
                        <Button className='w-100 start-btn' onClick={onStart} style={{ fontSize: "1.2rem", fontWeight: "600" }}>New Game!</Button>
                    </Card.Footer>
                </Card>
            </Row>
        </Container>
    );
}