import type { CSSProperties } from 'react';
import { topics } from '../data/topics';
import { questions } from '../data/questions';
import type { TopicId } from '../types';

interface TopicSelectProps {
  onSelect: (id: TopicId) => void;
  onBack: () => void;
}

export default function TopicSelect({ onSelect, onBack }: TopicSelectProps) {
  const countByTopic = (topicId: TopicId): number =>
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
              style={{ '--topic-color': t.color } as CSSProperties}
              onClick={() => onSelect(t.id)}
            >
              <div className="topic-emoji">{t.emoji}</div>
              <div className="topic-title">{t.title}</div>
              <div className="topic-desc">{t.description}</div>
              <div className="topic-count">{countByTopic(t.id)} завдань</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}