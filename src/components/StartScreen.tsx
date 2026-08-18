interface StartScreenProps {
  onStartFull: () => void;
  onStartPractice: () => void;
}

export default function StartScreen({ onStartFull, onStartPractice }: StartScreenProps) {
  return (
    <div className="card">
      <h2 className="section-title">Оберіть режим</h2>
      <div className="btn-group">
        <button className="btn" onClick={onStartFull}>
          Повний тест НМТ (22 завдання, 120 хв)
        </button>
        <button className="btn btn-secondary" onClick={onStartPractice}>
          Тест по темах
        </button>
      </div>
      <p className="note">
        Повний тест імітує формат НМТ: 22 завдання з усіх тем, таймер 120 хвилин.
        Тест по темах — перевірка знань з окремої теми без таймера.
      </p>
    </div>
  );
}