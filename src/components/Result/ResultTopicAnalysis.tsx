import { topics } from '../../data/topics';
import type { AnswerRecord, TopicId } from '../../types';

interface ResultTopicAnalysisProps {
  answers: AnswerRecord[];
}

export default function ResultTopicAnalysis({ answers }: ResultTopicAnalysisProps) {
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
  );
}
