import '@/ui/styles/QuestionCard.css';
import Card from 'react-bootstrap/Card';

export default function QuestionCard({ category, children }){
    return (
        <Card className='question-card'>
            <Card.Header>Category: {category}</Card.Header>
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    );
}