import type { AnswerRecord } from '../../types';
import ResultScore from './ResultScore';
import ResultTopicAnalysis from './ResultTopicAnalysis';
import ResultReview from './ResultReview';

interface ResultProps {
  answers: AnswerRecord[];
  totalTime: number;
  onRestart: () => void;
  onHome: () => void;
}

export default function Result({ answers, totalTime, onRestart, onHome }: ResultProps) {
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

  return (
    <>
      <ResultScore
        percent={percent}
        correct={correct}
        total={total}
        totalTime={totalTime}
        levelText={levelText}
        onRestart={onRestart}
        onHome={onHome}
      />
      <ResultTopicAnalysis answers={answers} />
      <ResultReview answers={answers} />
    </>
  );
}
