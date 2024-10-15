'use client';

import '@/ui/styles/AnswerBtn.css';
import Button from "react-bootstrap/Button";


export default function AnswerBtn({answer, clickHandler, disabled}){
    return (
        <Button 
            className="answer-btn w-100 mt-3" 
            onClick={(e) => {
                clickHandler(e, answer)
            }}
            disabled={disabled}
        >

                {answer}
        </Button>
    );
}