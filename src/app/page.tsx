'use client';

import { useState } from 'react';
import StartScreen from '../components/StartScreen';
import TopicSelect from '../components/TopicSelect';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import { questions } from '../data/questions';
import { shuffle } from '../lib/utils';
import type { Question, QuizResult, TopicId } from '../types';

const FULL_LIMIT = 120 * 60; // 120 хвилин
const FULL_COUNT = 22;
const PRACTICE_COUNT = 10;

type View = 'home' | 'topics' | 'quiz' | 'result';

export default function Home() {
  const [view, setView] = useState<View>('home');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [timeLimit, setTimeLimit] = useState<number | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);

  function startFull() {
    setQuizQuestions(shuffle(questions).slice(0, FULL_COUNT));
    setTimeLimit(FULL_LIMIT);
    setView('quiz');
  }

  function startPractice(topicId: TopicId) {
    const pool = questions.filter((q) => q.topic === topicId);
    setQuizQuestions(shuffle(pool).slice(0, Math.min(PRACTICE_COUNT, pool.length)));
    setTimeLimit(null);
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
        <h1>📐 Тести з математики</h1>
        <p>Готуйся до НМТ: повний тест або тест по темах</p>
      </header>

      {view === 'home' && (
        <StartScreen
          onStartFull={startFull}
          onStartPractice={() => setView('topics')}
        />
      )}

      {view === 'topics' && <TopicSelect onSelect={startPractice} onBack={() => setView('home')} />}

      {view === 'quiz' && (
        <Quiz questions={quizQuestions} timeLimit={timeLimit} onFinish={finishQuiz} />
      )}

      {view === 'result' && result && (
        <Result
          answers={result.answers}
          timeLeft={result.timeLeft}
          timeLimit={timeLimit}
          onRestart={() => {
            setQuizQuestions(shuffle(quizQuestions.map((q) => q)));
            setView('quiz');
          }}
          onHome={() => {
            setView('home');
            setResult(null);
          }}
        />
      )}
    </div>
  );
}