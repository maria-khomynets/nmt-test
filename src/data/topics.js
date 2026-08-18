export const topics = [
  {
    id: 'numbers',
    title: 'Числа і вирази',
    description: 'Дроби, степені, корені, відсотки, властивості чисел',
    color: '#3b82f6',
  },
  {
    id: 'equations',
    title: 'Рівняння і нерівності',
    description: 'Лінійні, квадратні рівняння, системи, нерівності',
    color: '#8b5cf6',
  },
  {
    id: 'functions',
    title: 'Функції',
    description: 'Графіки, області визначення, властивості функцій',
    color: '#10b981',
  },
  {
    id: 'geometry',
    title: 'Геометрія',
    description: 'Планіметрія, стереометрія, тригонометрія, об\'єми',
    color: '#f59e0b',
  },
  {
    id: 'probability',
    title: 'Ймовірність і статистика',
    description: 'Класична ймовірність, комбінаторика, статистика',
    color: '#ef4444',
  },
  {
    id: 'word',
    title: 'Текстові задачі',
    description: 'Рух, робота, суміші, відсоткові задачі',
    color: '#06b6d4',
  },
];

export const topicTitle = (id) => {
  const t = topics.find((x) => x.id === id);
  return t ? t.title : id;
};
