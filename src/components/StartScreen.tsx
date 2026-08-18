interface StartScreenProps {
  onStartFull: () => void;
  onStartPractice: () => void;
}

export default function StartScreen({ onStartFull, onStartPractice }: StartScreenProps) {
  return (
    <div className="card">
      <h2 className="section-title">Оберіть режим</h2>
      <div className="btn-group">
        <button className="btn btn-mode" onClick={onStartFull}>
          <span className="btn-icon">🎯</span>
          <span className="btn-label">
            <span className="btn-main">Повний тест НМТ</span>
            <span className="btn-sub">22 завдання · 120 хв · усі теми</span>
          </span>
        </button>
        <button className="btn btn-secondary btn-mode" onClick={onStartPractice}>
          <span className="btn-icon">📚</span>
          <span className="btn-label">
            <span className="btn-main">Тест по темах</span>
            <span className="btn-sub">10 завдань · вибір теми · без таймера</span>
          </span>
        </button>
      </div>
      <p className="note">
        Повний тест імітує формат НМТ: 22 завдання з усіх тем та таймер 120 хвилин.
        Тест по темах — перевірка знань з окремої теми без таймера.
      </p>
    </div>
  );
}