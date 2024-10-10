import '@/ui/styles/WinPanel.css';
import { Button, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function WinPanel({score}){

    function handleClick(){
        window.location.replace("http://localhost:3000");
    }

    return (
        <Container className="mt-2">
            <Row className="justify-content-center">
                <Card className="text-center" style={{ width: '26rem' }}>
                    <Card.Header>The End!</Card.Header>
                    <Card.Body>
                        Score: {score}
                    </Card.Body>
                    <Card.Img variant='top' src='logo.webp'/>
                    <Card.Footer>
                        <Button onClick={handleClick}>Again?</Button>
                    </Card.Footer>
                </Card>
            </Row>
        </Container>
    );
}