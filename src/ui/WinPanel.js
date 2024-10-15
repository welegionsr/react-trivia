'use client';

import '@/ui/styles/WinPanel.css';
import { Badge, Button, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StarRating from './StarRating';

export default function WinPanel({ score, questionsCount, correctCount, setGamePhase }){

    function calculateStarRating(correctCount, questionsCount) {
        if (questionsCount === 0) return 0; // avoid division by zero

        // calculate the accuracy ratio and scale it to a 0-5 rating
        const accuracy = correctCount / (questionsCount - 1);
        const starRating = accuracy * 5;

        // round to nearest integer to get whole stars only
        console.log('accuracy: ' + accuracy);
        console.log('starRating(rounded):' + Math.round(starRating));
        console.log('starRating:' + starRating);
        return Math.floor(starRating);
    }

    function handleClick(){
        setGamePhase('welcome');
    }

    return (
        <Container className="mt-2">
            <Row className="justify-content-center">
                <Card className="text-center" style={{ width: '26rem', padding: 0 }}>
                    <Card.Img variant='top' src='the-end.webp'/>
                    <Card.Header><h4>Your results:</h4></Card.Header>
                    <Card.Body>
                        <p>
                            Questions: {' ' + correctCount + '/' + (questionsCount-1)} 
                        </p>
                        <p>
                            Score: {' '}
                            <Badge bg={`${(score / questionsCount) > 100 ? "success" : "danger"}`}>{score}</Badge>
                        </p>
                        <StarRating stars={calculateStarRating(correctCount, questionsCount)}/>
                        
                        
                    </Card.Body>
                    <Card.Footer>
                        <Button className='w-100 start-btn' onClick={handleClick} style={{fontSize: "1.2rem", fontWeight: "600"}}>Start a new round!</Button>
                    </Card.Footer>
                </Card>
            </Row>
        </Container>
    );
}