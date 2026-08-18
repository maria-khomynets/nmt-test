interface QuizNavProps {
  current: number;
  total: number;
  unansweredCount: number;
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
}

export default function QuizNav({ current, total, unansweredCount, onPrev, onNext, onFinish }: QuizNavProps) {
  return (
    <>
      <div className="quiz-nav">
        <button
          className="btn btn-secondary"
          onClick={onPrev}
          disabled={current === 0}
        >
          ← Назад
        </button>
        <button
          className="btn"
          onClick={onNext}
          disabled={current === total - 1}
        >
          Далі →
        </button>
      </div>

      {unansweredCount > 0 && (
        <p className="quiz-warn">
          Без відповіді: {unansweredCount}. Питання без
          відповіді зараховуються як помилка.
        </p>
      )}

      <button className="btn" onClick={onFinish}>
        Завершити тест
      </button>
    </>
  );
}
