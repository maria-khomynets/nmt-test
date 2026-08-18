import { useState } from 'react';
import { topics } from '../data/topics';
import { questions } from '../data/questions';
import type { TopicId } from '../types';

interface StartScreenProps {
  onStart: (topic: TopicId | null, count: number) => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const [topic, setTopic] = useState<TopicId | 'all'>('all');
  const [count, setCount] = useState(10);

  const topicCounts = new Map<TopicId, number>();
  for (const q of questions) {
    topicCounts.set(q.topic, (topicCounts.get(q.topic) || 0) + 1);
  }

  const maxCount = topic === 'all'
    ? questions.length
    : topicCounts.get(topic as TopicId) || 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const safeCount = Math.min(Math.max(1, count), maxCount);
    onStart(topic === 'all' ? null : topic, safeCount);
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="start-row">
          <label className="start-label">Обери тему:</label>
          <select
            className="start-select"
            value={topic}
            onChange={(e) => setTopic(e.target.value as TopicId | 'all')}
          >
            <option value="all">Усі теми</option>
            {topics.map((t) => (
              <option key={t.id} value={t.id}>
                {t.emoji} {t.title} ({topicCounts.get(t.id) || 0})
              </option>
            ))}
          </select>
        </div>

        <div className="start-row">
          <label className="start-label">Пройти</label>
          <input
            type="number"
            className="start-input"
            min={1}
            max={maxCount}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <label className="start-label">
            {count === 1 ? 'завдання' : count < 5 ? 'завдання' : 'завдань'}
          </label>
          <button type="submit" className="btn">
            Старт
          </button>
        </div>
      </form>
    </div>
  );
}
