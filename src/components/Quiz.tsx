import { useState, useEffect } from 'react';
import type { Question, QuizResult } from '../types';

const LETTERS = ['А', 'Б', 'В', 'Г'];

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

  const q = questions[current];
  const chosen = choices[current];
  const answeredCount = choices.filter((c) => c !== null).length;
  const progress = Math.round((answeredCount / questions.length) * 100);

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
      <div className="progress-row">
        <span>
          Завдання {current + 1} з {questions.length}
        </span>
        <span>Відповідей: {answeredCount}</span>
      </div>
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }} />
      </div>

      <p className="question-text">{q.question}</p>

      <div className="options">
        {q.options.map((opt, i) => (
          <button
            key={i}
            className={chosen === i ? 'option selected' : 'option'}
            onClick={() => choose(i)}
          >
            <span className="letter">{LETTERS[i]}</span>
            <span>{opt}</span>
          </button>
        ))}
      </div>

      <div className="quiz-nav">
        <button
          className="btn btn-secondary"
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
        >
          ← Назад
        </button>
        <button
          className="btn"
          onClick={() =>
            setCurrent((c) => Math.min(questions.length - 1, c + 1))
          }
          disabled={current === questions.length - 1}
        >
          Далі →
        </button>
      </div>

      {questions.length - answeredCount > 0 && (
        <p className="quiz-warn">
          Без відповіді: {questions.length - answeredCount}. Питання без
          відповіді зараховуються як помилка.
        </p>
      )}

      <button className="btn" onClick={finish}>
        Завершити тест
      </button>
    </div>
  );
}
