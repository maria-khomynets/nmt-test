interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="card">
      <h2 className="section-title">Тест НМТ з математики</h2>
      <p className="start-description">
        У форматі тесту — 22 завдання з усіх тем програми.
        Після завершення ти побачиш результат і розбір кожного завдання.
      </p>
      <button className="btn btn-mode" onClick={onStart}>
        <span className="btn-icon">🎯</span>
        <span className="btn-label">
          <span className="btn-main">Розпочати тест</span>
          <span className="btn-sub">22 завдання</span>
        </span>
      </button>
    </div>
  );
}