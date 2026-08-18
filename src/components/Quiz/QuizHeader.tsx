interface QuizHeaderProps {
  current: number;
  total: number;
  answeredCount: number;
}

export default function QuizHeader({ current, total, answeredCount }: QuizHeaderProps) {
  const progress = Math.round((answeredCount / total) * 100);

  return (
    <>
      <div className="progress-row">
        <span>
          Завдання {current + 1} з {total}
        </span>
        <span>Відповідей: {answeredCount}</span>
      </div>
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }} />
      </div>
    </>
  );
}
