import { topics, topicTitle } from '../data/topics';
import type { AnswerRecord, TopicId } from '../types';

const LETTERS = ['А', 'Б', 'В', 'Г'];

function formatAnswer(chosen: number | null): string {
  return chosen === null ? 'Не відповіли' : `Варіант ${LETTERS[chosen]}`;
}

interface ResultProps {
  answers: AnswerRecord[];
  onRestart: () => void;
  onHome: () => void;
}

export default function Result({ answers, onRestart, onHome }: ResultProps) {
  const correct = answers.filter((a) => a.correct).length;
  const total = answers.length;
  const percent = total ? Math.round((correct / total) * 100) : 0;

  const levelText =
    percent >= 80
      ? 'Відмінно!'
      : percent >= 60
        ? 'Добре!'
        : percent >= 40
          ? 'Задовільно.'
          : 'Треба повторити теми.';

  const byTopic = new Map<TopicId, { total: number; wrong: number }>();
  for (const a of answers) {
    const entry = byTopic.get(a.question.topic) ?? { total: 0, wrong: 0 };
    entry.total += 1;
    if (!a.correct) entry.wrong += 1;
    byTopic.set(a.question.topic, entry);
  }
  const topicRows = [...byTopic.entries()]
    .map(([id, v]) => ({ id, ...v }))
    .sort((a, b) => b.wrong - a.wrong);

  return (
    <>
      <div className="card result-score">
        <div className="big">{percent}%</div>
        <div className="correct-count">
          {correct} правильних із {total}
        </div>
        <div className="sub">{levelText}</div>
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
        <h2 className="section-title">Аналіз помилок за темами</h2>
        {topicRows.map(({ id, total: t, wrong }) => {
          const topic = topics.find((x) => x.id === id);
          const pct = t ? Math.round((wrong / t) * 100) : 0;
          return (
            <div className="topic-row" key={id}>
              <div className="topic-head">
                <span>
                  {topic?.emoji} {topic ? topic.title : id}
                </span>
                <span className={wrong === 0 ? 'ok' : 'no'}>
                  {wrong === 0 ? 'Без помилок' : `Помилок: ${wrong} / ${t}`}
                </span>
              </div>
              <div className="topic-bar">
                <div
                  style={{
                    width: `${pct}%`,
                    background: wrong === 0 ? 'var(--success)' : 'var(--danger)',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="card">
        <h2 className="section-title">Розбір завдань</h2>
        {answers.map((a, i) => (
          <div className="review-item" key={i}>
            <div className="q">
              {i + 1}. {a.question.question}{' '}
              <span
                className="badge"
                style={{ background: a.correct ? '#16a34a' : '#dc2626' }}
              >
                {a.correct ? '✓' : '✗'}
              </span>
            </div>
            <div className="row">
              {a.correct ? (
                <span className="ok">Правильно. </span>
              ) : (
                <span className="no">Неправильно. </span>
              )}
              Ваша відповідь: {formatAnswer(a.chosen)}
              {!a.correct && (
                <>
                  . Правильна відповідь: {formatAnswer(a.question.answer)}
                </>
              )}
            </div>
            <div className="expl">
              Тема: {topicTitle(a.question.topic)} · {a.question.explanation}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
