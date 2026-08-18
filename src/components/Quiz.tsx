import { useState } from 'react';
import type { AnswerRecord, Question, QuizResult } from '../types';

const LETTERS = ['А', 'Б', 'В', 'Г'];

interface QuizProps {
  questions: Question[];
  onFinish: (result: QuizResult) => void;
}

export default function Quiz({ questions, onFinish }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const q = questions[current];
  const isCorrect = selected === q.answer;

  function submitAnswer() {
    if (answered || selected === null) return;
    setAnswered(true);
    setAnswers((prev) => [
      ...prev,
      {
        question: q,
        chosen: selected,
        correct: isCorrect,
      },
    ]);
  }

  function next() {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      onFinish({ answers });
    }
  }

  const answeredCount = answered ? answers.length + 1 : answers.length;
  const progress = Math.round((answeredCount / questions.length) * 100);

  return (
    <>
      <div className="card">
        <div className="progress-row">
          <span>
            Завдання {current + 1} з {questions.length}
          </span>
        </div>
        <div className="progress-bar">
          <div style={{ width: `${progress}%` }} />
        </div>

        <p className="question-text">{q.question}</p>

        <div className="options">
          {q.options.map((opt, i) => {
            let cls = 'option';
            if (answered) {
              if (i === q.answer) cls += ' correct';
              else if (i === selected) cls += ' wrong';
            }
            return (
              <button
                key={i}
                className={cls}
                disabled={answered}
                onClick={() => setSelected(i)}
              >
                <span className="letter">{LETTERS[i]}</span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {!answered && (
          <button className="btn" onClick={submitAnswer} disabled={selected === null}>
            Відповісти
          </button>
        )}

        {answered && (
          <>
            <div className={`feedback ${isCorrect ? 'correct' : 'wrong'}`}>
              {isCorrect ? '✓ Правильно!' : '✗ Неправильно.'}
              <div className="explanation">
                <strong>Розв'язання:</strong> {q.explanation}
              </div>
            </div>
            <button className="btn" onClick={next}>
              {current + 1 < questions.length ? 'Наступне завдання' : 'Завершити тест'}
            </button>
          </>
        )}
      </div>
    </>
  );
}