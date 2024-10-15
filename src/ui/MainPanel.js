'use client';

import '@/ui/styles/MainPanel.css';
import { useState } from "react";
import WinPanel from "./WinPanel";
import WelcomePage from './WelcomePage';
import GamePage from './GamePage';
import questionsDB from '@/data/questionsdb';

function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default function MainPanel() {
    const [questions, setQuestions] = useState(questionsDB.questions); // Store the original questions
    let [questionsCount, setQuestionsCount] = useState(1);
    let [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [gamePhase, setGamePhase] = useState('welcome'); // either 'welcome' / 'game' / 'end'
    const [questionsTotal, setQuestionsTotal] = useState(5);
    const [difficulty, setDifficulty] = useState(0);

    const startGame = () => {
        // get a fresh set of questions
        let questionsPool = [...questionsDB.questions];

        // first, shuffle the questions!
        shuffleQuestions(questionsPool);

        // now slice the questions array so that you'd get only the number of questions the user asked for
        const selectedQuestions = questionsPool.slice(0, questionsTotal);
        setQuestions(selectedQuestions); // set the new array of questions

        // reset game values
        setScore(0);
        setQuestionsCount(1);
        setCorrectCount(0);
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
                    <WelcomePage onStart={startGame} setDifficulty={setDifficulty} setQuestionsTotal={setQuestionsTotal}/>
                )
            }

            {
                gamePhase === 'game' && (
                    <GamePage
                        questions={questions}
                        questionsCount={questionsCount}
                        setQuestionsCount={setQuestionsCount}
                        score={score}
                        setScore={setScore}
                        gameOver={gameOver}
                        endGame={endGame} // Function to call when game ends
                        correctCount={correctCount}
                        setCorrectCount={setCorrectCount}
                        difficulty={difficulty}
                    />
                )
            }

            {
                gamePhase === 'end' && (
                    <WinPanel
                        score={score}
                        questionsCount={questionsCount}
                        correctCount={correctCount}
                        setGamePhase={setGamePhase}
                    />
                )
            }

        </>
    );
}


