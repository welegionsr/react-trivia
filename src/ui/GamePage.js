import './styles/GamePage.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ScoreBar from './ScoreBar';
import QuestionPanel from './QuestionPanel';

export default function GamePage({questionsCount, setQuestionsCount, setGameOver, score, setScore}){
    
    return (
        <>
            <Row className='mb-2'>
                <Col>
                    <ScoreBar current={questionsCount} total={questionsDB.count} score={score} timeLeft={(timeLeft)} />
                </Col>
            </Row>
            <Row>
                <Col>
                    {currentQuestion ? (
                        <QuestionPanel questionObj={currentQuestion} onAnswer={handleAnswer} />
                    ) : (
                        // Optionally, show something else here (like a "No more questions" message)
                        <div>No more questions</div>
                    )}
                </Col>
            </Row>
        </>
    );
}