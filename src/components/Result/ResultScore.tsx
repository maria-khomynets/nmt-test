interface ResultScoreProps {
  percent: number;
  correct: number;
  total: number;
  totalTime: number;
  levelText: string;
  onRestart: () => void;
  onHome: () => void;
}

export default function ResultScore({ percent, correct, total, totalTime, levelText, onRestart, onHome }: ResultScoreProps) {
  const avgTime = total ? (totalTime / total).toFixed(1) : '0';
  const speedBetter = totalTime / total <= 15 ? 70 : totalTime / total <= 10 ? 80 : totalTime / total <= 5 ? 90 : 50;

  return (
    <div className="card result-score">
      <div className="big">{percent}%</div>
      <div className="result-stats">
        <div className="stat-row">
          <span className="stat-label">Правильних відповідей:</span>
          <span className="stat-value">{correct} з {total}</span>
        </div>
        <div className="stat-row">
          <span className="stat-badge">Краще ніж {percent}%</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Середній час відповіді:</span>
          <span className="stat-value">{avgTime} с</span>
        </div>
        <div className="stat-row">
          <span className="stat-badge">Краще ніж {speedBetter}%</span>
        </div>
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
  );
}
