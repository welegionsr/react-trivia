'use client';

import '@/ui/styles/MainPanel.css';
import { useState } from "react";
import WinPanel from "./WinPanel";
import WelcomePage from './WelcomePage';
import GamePage from './GamePage';

function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default function MainPanel() {
    let [questionsCount, setQuestionsCount] = useState(1);
    let [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [gamePhase, setGamePhase] = useState('welcome'); // either 'welcome' / 'game' / 'end'

    const startGame = () => {
        setScore(0);
        setQuestionsCount(1);
        setGamePhase('game');
        setGameOver(false);
    };

    const endGame = () => {
        setQuestionsCount(questionsCount + 1);
        setGameOver(true);
        setGamePhase('end');
    };

    return (
        <>
            {
                gamePhase === 'welcome' && (
                    <WelcomePage onStart={startGame} />
                )
            }

            {
                gamePhase === 'game' && (
                    <GamePage
                        questionsCount={questionsCount}
                        setQuestionsCount={setQuestionsCount}
                        score={score}
                        setScore={setScore}
                        gameOver={gameOver}
                        endGame={endGame} // Function to call when game ends
                        correctCount={correctCount}
                        setCorrectCount={setCorrectCount}
                    />
                )
            }

            {
                gamePhase === 'end' && (
                    <WinPanel
                        score={score}
                        questionsCount={questionsCount}
                        correctCount={correctCount}
                    />
                )
            }

        </>
    );
}


