import { topicTitle } from '../../data/topics';
import type { AnswerRecord } from '../../types';

const LETTERS = ['А', 'Б', 'В', 'Г'];

function formatAnswer(chosen: number | null): string {
  return chosen === null ? 'Не відповіли' : `Варіант ${LETTERS[chosen]}`;
}

interface ResultReviewProps {
  answers: AnswerRecord[];
}

export default function ResultReview({ answers }: ResultReviewProps) {
  return (
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
  );
}
