import '@/ui/styles/QuestionCard.css';
import Card from 'react-bootstrap/Card';

export default function QuestionCard({ category, children, imageUrl }){
    return (
        <Card className='question-card'>
            <Card.Header>Category: {category}</Card.Header>
            <Card.Body>
                {children}
            </Card.Body> 
            
            {imageUrl ? <Card.Img variant="bottom" src={imageUrl} /> : ""}
        </Card>
    );
}