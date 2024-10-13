import { Button, Row } from "react-bootstrap";


export default function WelcomePage({onStart}){
    return (
        <>
            <Row>
                <h2>Hello!</h2>
                <p>This is a trivia game!</p>
                <Button onClick={onStart}>New Game</Button>
            </Row>
        </>
    );
}