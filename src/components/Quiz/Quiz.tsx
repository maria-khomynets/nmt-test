import { useState, useEffect } from 'react';
import type { Question, QuizResult } from '../../types';
import QuizHeader from './QuizHeader';
import QuizQuestion from './QuizQuestion';
import QuizLiveStats from './QuizLiveStats';
import QuizNav from './QuizNav';

interface QuizProps {
  questions: Question[];
  onFinish: (result: QuizResult) => void;
}

export default function Quiz({ questions, onFinish }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [choices, setChoices] = useState<(number | null)[]>(() =>
    questions.map(() => null),
  );
  const [startTime] = useState(() => Date.now());
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000);
    return () => clearInterval(id);
  }, [startTime]);

  const q = questions[current];
  const chosen = choices[current];
  const answeredCount = choices.filter((c) => c !== null).length;
  const correctCount = questions.filter((q, i) => choices[i] !== null && choices[i] === q.answer).length;
  const avgTime = answeredCount > 0 ? (elapsed / answeredCount).toFixed(1) : '0';

  function choose(i: number) {
    setChoices((prev) => {
      const next = [...prev];
      next[current] = i;
      return next;
    });
  }

  function finish() {
    const unanswered = questions.length - answeredCount;
    if (
      unanswered > 0 &&
      !window.confirm(
        `Без відповіді залишилось ${unanswered} питань. Завершити тест?`,
      )
    ) {
      return;
    }
    onFinish({
      totalTime: Math.round((Date.now() - startTime) / 1000),
      answers: questions.map((question, i) => {
        const c = choices[i];
        return {
          question,
          chosen: c,
          correct: c !== null && c === question.answer,
        };
      }),
    });
  }

  return (
    <div className="card">
      <QuizHeader
        current={current}
        total={questions.length}
        answeredCount={answeredCount}
      />

      <QuizQuestion
        question={q}
        chosen={chosen}
        onChoose={choose}
      />

      <QuizLiveStats
        correctCount={correctCount}
        answeredCount={answeredCount}
        elapsed={elapsed}
        avgTime={avgTime}
      />

      <QuizNav
        current={current}
        total={questions.length}
        unansweredCount={questions.length - answeredCount}
        onPrev={() => setCurrent((c) => Math.max(0, c - 1))}
        onNext={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
        onFinish={finish}
      />
    </div>
  );
}
