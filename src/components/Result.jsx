import { formatTime } from '../lib/utils';
import { topicTitle } from '../data/topics';

const LETTERS = ['А', 'Б', 'В', 'Г', 'Д'];

function formatAnswer(q, chosen) {
  if (q.type === 'input') {
    return `Відповідь: ${chosen}`;
  }
  return `Варіант ${LETTERS[chosen]}`;
}

export default function Result({ answers, timeLeft, timeLimit, onRestart, onHome }) {
  const correct = answers.filter((a) => a.correct).length;
  const total = answers.length;
  const percent = total ? Math.round((correct / total) * 100) : 0;

  const levelText = percent >= 80 ? 'Відмінно!' : percent >= 60 ? 'Добре!' : percent >= 40 ? 'Задовільно.' : 'Треба повторити теми.';

  return (
    <>
      <div className="card result-score">
        <div className="big">
          {correct} / {total}
        </div>
        <div className="sub">
          {percent}% · {levelText}
        </div>
        {timeLimit != null && (
          <div className="sub">
            Витрачено часу: {formatTime(timeLimit - timeLeft)}
          </div>
        )}
        <div className="btn-group" style={{ marginTop: 20 }}>
          <button className="btn" onClick={onRestart}>
            Пройти ще раз
          </button>
          <button className="btn btn-secondary" onClick={onHome}>
            На головну
          </button>
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">Розбір завдань</h2>
        {answers.map((a, i) => (
          <div className="review-item" key={i}>
            <div className="q">
              {i + 1}. {a.question.question}{' '}
              <span className="badge" style={{ background: a.correct ? '#16a34a' : '#dc2626' }}>
                {a.correct ? '✓' : '✗'}
              </span>
            </div>
            <div className="row">
              {a.correct ? (
                <span className="ok">Правильно. </span>
              ) : (
                <span className="no">Неправильно. </span>
              )}
              Ваша відповідь: {formatAnswer(a.question, a.chosen)}
              {!a.correct && (
                <>
                  . Правильна відповідь:{' '}
                  {formatAnswer(a.question, a.question.answer)}
                </>
              )}
            </div>
            <div className="expl">Тема: {topicTitle(a.question.topic)} · {a.question.explanation}</div>
          </div>
        ))}
      </div>
    </>
  );
}
