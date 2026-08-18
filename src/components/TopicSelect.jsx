import { topics } from '../data/topics';
import { questions } from '../data/questions';

export default function TopicSelect({ onSelect, onBack }) {
  const countByTopic = (topicId) =>
    questions.filter((q) => q.topic === topicId).length;

  return (
    <>
      <button className="back-link" onClick={onBack}>
        ← Назад
      </button>
      <div className="card">
        <h2 className="section-title">Оберіть тему</h2>
        <div className="topic-grid">
          {topics.map((t) => (
            <div
              key={t.id}
              className="topic-card"
              style={{ borderTop: `4px solid ${t.color}` }}
              onClick={() => onSelect(t.id)}
            >
              <div className="topic-title">{t.title}</div>
              <div className="topic-count">
                {countByTopic(t.id)} завдань
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
