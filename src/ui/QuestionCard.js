import '@/ui/styles/QuestionCard.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export default function QuestionCard({ category, children, imageUrl }){
    return (
        <Card className='question-card'>
            <Card.Header>
                <span>Category:</span> {' '}
                <Badge bg="dark">{category}</Badge>
            </Card.Header>
            <Card.Body>
                {children}
            </Card.Body> 
            
            {imageUrl ? <Card.Img variant="bottom" src={imageUrl} /> : ""}
        </Card>
    );
}