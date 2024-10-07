'use client';

import '@/ui/styles/AnswerBtn.css';
import Button from "react-bootstrap/Button";


export default function AnswerBtn({answer, clickHandler}){
    return (
        <Button 
            className="answer-btn w-100 mt-3" 
            onClick={() => {
                clickHandler(answer);
            }}
        >

                {answer}
        </Button>
    );
}