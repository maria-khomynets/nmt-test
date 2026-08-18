'use client';

import { useState } from 'react';
import StartScreen from '../components/StartScreen';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import { questions } from '../data/questions';
import { shuffle } from '../lib/utils';
import type { Question, QuizResult, TopicId } from '../types';

type View = 'home' | 'quiz' | 'result';

export default function Home() {
  const [view, setView] = useState<View>('home');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  function startTest(topic: TopicId | null, count: number) {
    let pool = topic ? questions.filter((q) => q.topic === topic) : questions;
    setQuizQuestions(shuffle(pool).slice(0, count));
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
        <h1>📐 Тест з математики</h1>
        <p>Обери тему та кількість завдань</p>
      </header>

      {view === 'home' && <StartScreen onStart={startTest} />}

      {view === 'quiz' && (
        <Quiz questions={quizQuestions} onFinish={finishQuiz} />
      )}

      {view === 'result' && result && (
        <Result
          answers={result.answers}
          totalTime={result.totalTime}
          onRestart={() => setView('home')}
          onHome={() => {
            setView('home');
            setResult(null);
          }}
        />
      )}
    </div>
  );
}
