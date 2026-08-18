import { useEffect, useRef, useState } from 'react';
import { formatTime } from '../lib/utils';
import type { AnswerRecord, Question, QuizResult } from '../types';

const LETTERS = ['А', 'Б', 'В', 'Г'];

interface QuizProps {
  questions: Question[];
  timeLimit: number | null;
  onFinish: (result: QuizResult) => void;
}

export default function Quiz({ questions, timeLimit, onFinish }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimit ?? 0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!timeLimit) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timeLimit]);

  useEffect(() => {
    if (timeLimit && timeLeft === 0) {
      finishQuiz(answers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

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
      finishQuiz(answers);
    }
  }

  function finishQuiz(list: AnswerRecord[]) {
    if (timerRef.current) clearInterval(timerRef.current);
    onFinish({ answers: list, timeLeft });
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
          {timeLimit ? (
            <span className={`timer${timeLeft < 300 ? ' warning' : ''}`}>
              ⏱ {formatTime(timeLeft)}
            </span>
          ) : (
            <span className="timer">{q.level}</span>
          )}
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

      <p className="note">
        {timeLimit
          ? 'Час спливає автоматично — відповіді збережуться.'
          : 'Відповідай без поспіху — таймера в тесті по темах немає.'}
      </p>
    </>
  );
}