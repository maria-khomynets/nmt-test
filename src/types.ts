export type TopicId =
  | 'numbers'
  | 'equations'
  | 'functions'
  | 'geometry'
  | 'probability'
  | 'word';

export type Level = 'easy' | 'medium' | 'hard';

export interface Topic {
  id: TopicId;
  title: string;
  description: string;
  color: string;
  emoji: string;
}

export interface Question {
  id: number;
  topic: TopicId;
  level: Level;
  type: 'choice';
  question: string;
  options: [string, string, string, string];
  answer: number;
  explanation: string;
}

export interface AnswerRecord {
  question: Question;
  chosen: number | null;
  correct: boolean;
}

export interface QuizResult {
  answers: AnswerRecord[];
  totalTime: number;
}
