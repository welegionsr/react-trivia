import '@/ui/styles/QuestionCard.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function QuestionCard({ category, children, imageUrl }) {
    return (
        <Card className='question-card'>
            <Card.Header>
                <span>Category:</span> {' '}
                <Badge bg="dark">{category}</Badge>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        {children}
                    </Col>
                    {
                        imageUrl ?
                            <Col>
                                <Image
                                    className="question-image"
                                    alt="question image"
                                    src={imageUrl}
                                    fluid
                                    thumbnail
                                />
                            </Col>
                            : ""}
                </Row>

            </Card.Body>


        </Card>
    );
}