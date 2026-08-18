'use client';

import { useState } from 'react';
import StartScreen from '../components/StartScreen';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import { questions } from '../data/questions';
import { shuffle } from '../lib/utils';
import type { Question, QuizResult } from '../types';

const FULL_COUNT = 22;

type View = 'home' | 'quiz' | 'result';

export default function Home() {
  const [view, setView] = useState<View>('home');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  function startTest() {
    setQuizQuestions(shuffle(questions).slice(0, FULL_COUNT));
    setResult(null);
    setView('quiz');
  }

  function finishQuiz(data: QuizResult) {
    setResult(data);
    setView('result');
  }

  return (
    <div className="container">
      <header className="header">
        <span className="app-badge">НМТ · Математика · 2026</span>
        <h1>📐 Тест з математики</h1>
        <p>Повний тест у форматі НМТ: 22 завдання</p>
      </header>

      {view === 'home' && <StartScreen onStart={startTest} />}

      {view === 'quiz' && (
        <Quiz questions={quizQuestions} onFinish={finishQuiz} />
      )}

      {view === 'result' && result && (
        <Result
          answers={result.answers}
          onRestart={startTest}
          onHome={() => {
            setView('home');
            setResult(null);
          }}
        />
      )}
    </div>
  );
}