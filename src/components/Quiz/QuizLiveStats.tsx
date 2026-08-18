interface QuizLiveStatsProps {
  correctCount: number;
  answeredCount: number;
  elapsed: number;
  avgTime: string;
}

export default function QuizLiveStats({ correctCount, answeredCount, elapsed, avgTime }: QuizLiveStatsProps) {
  return (
    <div className="quiz-live-stats">
      <div className="stat-row">
        <span className="stat-label">Правильних відповідей:</span>
        <span className="stat-value">{correctCount} з {answeredCount}</span>
      </div>
      <div className="stat-row">
        <span className="stat-label">Час:</span>
        <span className="stat-value">{elapsed} с</span>
      </div>
      <div className="stat-row">
        <span className="stat-label">Середній час відповіді:</span>
        <span className="stat-value">{avgTime} с</span>
      </div>
    </div>
  );
}
