import { useEffect, useRef, useState } from 'react';
import { formatTime } from '../lib/utils';

const LETTERS = ['А', 'Б', 'В', 'Г', 'Д'];

export default function Quiz({ questions, timeLimit, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [answered, setAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [answers, setAnswers] = useState([]);

  const timerRef = useRef(null);

  useEffect(() => {
    if (!timeLimit) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [timeLimit]);

  useEffect(() => {
    if (timeLimit && timeLeft === 0) {
      finishQuiz(answers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  const q = questions[current];
  const isChoice = q.type === 'choice';
  const isCorrect =
    isChoice
      ? selected === q.answer
      : inputValue.trim().replace(',', '.') === q.answer;

  function submitAnswer() {
    if (answered) return;
    if (!isChoice && inputValue.trim() === '') return;
    setAnswered(true);
    setAnswers((prev) => [
      ...prev,
      {
        question: q,
        chosen: isChoice ? selected : inputValue.trim(),
        correct: isCorrect,
      },
    ]);
  }

  function next() {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setInputValue('');
      setAnswered(false);
    } else {
      finishQuiz(answers);
    }
  }

  function finishQuiz(list) {
    clearInterval(timerRef.current);
    onFinish({ answers: list, timeLeft });
  }

  const answeredCount = answered ? answers.length + 1 : answers.length;
  const progress = Math.round((answeredCount / questions.length) * 100);

  const effectiveAnswers = answered
    ? [
        ...answers,
        {
          question: q,
          chosen: isChoice ? selected : inputValue.trim(),
          correct: isCorrect,
        },
      ]
    : answers;

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

        {isChoice ? (
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
        ) : (
          <input
            className="input-answer"
            type="text"
            inputMode="numeric"
            disabled={answered}
            placeholder="Введіть відповідь…"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') submitAnswer();
            }}
          />
        )}

        {!answered && (
          <button className="btn" onClick={submitAnswer} disabled={isChoice && selected === null}>
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
          : 'Відповідай без поспіху — таймера в тренуванні немає.'}
      </p>
    </>
  );
}
