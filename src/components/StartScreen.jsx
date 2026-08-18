export default function StartScreen({ onStartFull, onStartPractice }) {
  return (
    <div className="card">
      <h2 className="section-title">Оберіть режим</h2>
      <div className="btn-group">
        <button className="btn" onClick={onStartFull}>
          Повний тест НМТ (22 завдання, 120 хв)
        </button>
        <button className="btn btn-secondary" onClick={onStartPractice}>
          Тренування по темах
        </button>
      </div>
      <p className="note">
        Повний тест імітує формат НМТ: 22 завдання з усіх тем, таймер 120 хвилин.
        Тренування — вибір окремої теми без таймера.
      </p>
    </div>
  );
}
