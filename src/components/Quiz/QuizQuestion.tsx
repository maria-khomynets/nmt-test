import type { Question } from '../../types';

const LETTERS = ['А', 'Б', 'В', 'Г'];

interface QuizQuestionProps {
  question: Question;
  chosen: number | null;
  onChoose: (i: number) => void;
}

export default function QuizQuestion({ question, chosen, onChoose }: QuizQuestionProps) {
  return (
    <>
      <p className="question-text">{question.question}</p>
      <div className="options">
        {question.options.map((opt, i) => (
          <button
            key={i}
            className={chosen === i ? 'option selected' : 'option'}
            onClick={() => onChoose(i)}
          >
            <span className="letter">{LETTERS[i]}</span>
            <span>{opt}</span>
          </button>
        ))}
      </div>
    </>
  );
}
