import './styles/WelcomePage.css';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


export default function WelcomePage({onStart}){
    return (
        <Container className="mt-2">
            <Row className="justify-content-center">
                <Card className="text-center" style={{ width: '26rem', padding: 0 }}>
                    <Card.Img variant='top' src='logo.webp' />
                    <Card.Header><h4>Trivia Game</h4></Card.Header>
                    <Card.Body>
                        <p>
                            This is a simple trivia game!
                        </p>

                        <p>
                            (Soon there will be options here)
                        </p>

                    </Card.Body>
                    <Card.Footer>
                        <Button className='w-100 start-btn' onClick={onStart} style={{ fontSize: "1.2rem", fontWeight: "600" }}>New Game!</Button>
                    </Card.Footer>
                </Card>
            </Row>
        </Container>
    );
}