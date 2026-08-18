'use client';

import { useState } from 'react';
import StartScreen from '../components/StartScreen';
import TopicSelect from '../components/TopicSelect';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import { questions } from '../data/questions';
import { shuffle } from '../lib/utils';

const FULL_LIMIT = 120 * 60; // 120 хвилин
const FULL_COUNT = 22;
const PRACTICE_COUNT = 10;

export default function Home() {
  const [view, setView] = useState('home');
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [timeLimit, setTimeLimit] = useState(null);
  const [result, setResult] = useState(null);

  function startFull() {
    setQuizQuestions(shuffle(questions).slice(0, FULL_COUNT));
    setTimeLimit(FULL_LIMIT);
    setView('quiz');
  }

  function startPractice(topicId) {
    const pool = questions.filter((q) => q.topic === topicId);
    setQuizQuestions(shuffle(pool).slice(0, Math.min(PRACTICE_COUNT, pool.length)));
    setTimeLimit(null);
    setView('quiz');
  }

  function finishQuiz(data) {
    setResult(data);
    setView('result');
  }

  return (
    <div className="container">
      <header className="header">
        <h1>📐 Тренажер НМТ з математики</h1>
        <p>Готуйся до НМТ: повний тест або тренування по темах</p>
      </header>

      {view === 'home' && (
        <StartScreen
          onStartFull={startFull}
          onStartPractice={() => setView('topics')}
        />
      )}

      {view === 'topics' && (
        <TopicSelect
          onSelect={startPractice}
          onBack={() => setView('home')}
        />
      )}

      {view === 'quiz' && (
        <Quiz
          questions={quizQuestions}
          timeLimit={timeLimit}
          onFinish={finishQuiz}
        />
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
