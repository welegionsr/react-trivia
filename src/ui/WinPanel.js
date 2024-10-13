import '@/ui/styles/WinPanel.css';
import { Badge, Button, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function WinPanel({ score, questionsCount, correctCount }){

    function handleClick(){
        window.location.replace("http://localhost:3000");
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
                        
                    </Card.Body>
                    <Card.Footer>
                        <Button className='w-100 start-btn' onClick={handleClick} style={{fontSize: "1.2rem", fontWeight: "600"}}>Start a new round!</Button>
                    </Card.Footer>
                </Card>
            </Row>
        </Container>
    );
}