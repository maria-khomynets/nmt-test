// Банк завдань для тестів НМТ з математики
// Усі завдання мають 4 варіанти відповіді (А–Г), answer — індекс правильної відповіді

export const questions = [
  {
    "id": 1,
    "topic": "numbers",
    "level": "easy",
    "type": "choice",
    "question": "Обчисліть значення виразу 2/3 + 1/6.",
    "options": [
      "1/2",
      "5/6",
      "3/4",
      "2/3"
    ],
    "answer": 1,
    "explanation": "Зведемо до спільного знаменника 6: 2/3 = 4/6, тоді 4/6 + 1/6 = 5/6."
  },
  {
    "id": 2,
    "topic": "numbers",
    "level": "easy",
    "type": "choice",
    "question": "Подайте десятковий дріб 0,75 у вигляді звичайного дробу.",
    "options": [
      "75/1000",
      "3/40",
      "7/5",
      "3/4"
    ],
    "answer": 3,
    "explanation": "0,75 = 75/100. Скорочуємо на 25: 75/100 = 3/4."
  },
  {
    "id": 3,
    "topic": "numbers",
    "level": "easy",
    "type": "choice",
    "question": "Знайдіть 25% від числа 80.",
    "options": [
      "16",
      "20",
      "25",
      "40"
    ],
    "answer": 1,
    "explanation": "25% = 1/4, тому 80 · 1/4 = 20."
  },
  {
    "id": 4,
    "topic": "numbers",
    "level": "easy",
    "type": "choice",
    "question": "Обчисліть 2³ · 2⁴.",
    "options": [
      "8¹²",
      "2⁷",
      "4⁷",
      "2¹²"
    ],
    "answer": 1,
    "explanation": "При множенні степенів з однаковою основою показники додаються: 2³ · 2⁴ = 2⁷."
  },
  {
    "id": 5,
    "topic": "numbers",
    "level": "easy",
    "type": "choice",
    "question": "Чому дорівнює √64?",
    "options": [
      "8",
      "16",
      "32",
      "4"
    ],
    "answer": 0,
    "explanation": "8 · 8 = 64, тому √64 = 8."
  },
  {
    "id": 6,
    "topic": "numbers",
    "level": "easy",
    "type": "choice",
    "question": "Чому дорівнює значення виразу (√5)²?",
    "options": [
      "25",
      "5",
      "2√5",
      "√10"
    ],
    "answer": 1,
    "explanation": "Квадрат кореня дорівнює підкореневому виразу: (√5)² = 5."
  },
  {
    "id": 7,
    "topic": "numbers",
    "level": "easy",
    "type": "choice",
    "question": "Скоротіть дріб 12/18.",
    "options": [
      "1/2",
      "3/4",
      "2/3",
      "6/9"
    ],
    "answer": 2,
    "explanation": "Ділимо чисельник і знаменник на 6: 12/18 = 2/3."
  },
  {
    "id": 8,
    "topic": "numbers",
    "level": "easy",
    "type": "choice",
    "question": "Обчисліть 3/4 · 2/5.",
    "options": [
      "6/9",
      "1/10",
      "3/10",
      "5/9"
    ],
    "answer": 2,
    "explanation": "Множимо чисельники та знаменники: 3·2/4·5 = 6/20 = 3/10."
  },
  {
    "id": 9,
    "topic": "numbers",
    "level": "medium",
    "type": "choice",
    "question": "Обчисліть 2/3 ÷ 4/9.",
    "options": [
      "2/3",
      "3/2",
      "8/27",
      "6/9"
    ],
    "answer": 1,
    "explanation": "Ділення замінюємо множенням на обернений дріб: 2/3 · 9/4 = 18/12 = 3/2."
  },
  {
    "id": 10,
    "topic": "numbers",
    "level": "easy",
    "type": "choice",
    "question": "Обчисліть |−7| + |3|.",
    "answer": 3,
    "explanation": "Модуль числа — його відстань до нуля: |−7| = 7, |3| = 3, тому 7 + 3 = 10.",
    "options": [
      "4",
      "7",
      "-10",
      "10"
    ]
  },
  {
    "id": 11,
    "topic": "numbers",
    "level": "easy",
    "type": "choice",
    "question": "Яке з чисел є найбільшим?",
    "options": [
      "0,5",
      "0,25",
      "0,75",
      "0,9"
    ],
    "answer": 3,
    "explanation": "Порівнюємо десяткові дроби: 0,9 — найбільше серед наведених."
  },
  {
    "id": 12,
    "topic": "numbers",
    "level": "medium",
    "type": "choice",
    "question": "Обчисліть 5! (факторіал п'яти).",
    "answer": 0,
    "explanation": "5! = 1 · 2 · 3 · 4 · 5 = 120.",
    "options": [
      "120",
      "15",
      "25",
      "720"
    ]
  },
  {
    "id": 13,
    "topic": "numbers",
    "level": "medium",
    "type": "choice",
    "question": "Чому дорівнює 10⁻²?",
    "options": [
      "0,01",
      "0,1",
      "100",
      "-20"
    ],
    "answer": 0,
    "explanation": "10⁻² = 1/10² = 1/100 = 0,01."
  },
  {
    "id": 14,
    "topic": "numbers",
    "level": "easy",
    "type": "choice",
    "question": "Спростіть вираз 3x + 2x − x.",
    "options": [
      "6x",
      "4x",
      "5x",
      "2x"
    ],
    "answer": 1,
    "explanation": "Зводимо подібні доданки: 3x + 2x − x = 4x."
  },
  {
    "id": 15,
    "topic": "numbers",
    "level": "medium",
    "type": "choice",
    "question": "Знайдіть значення виразу a² − b², якщо a = 5, b = 3.",
    "options": [
      "16",
      "4",
      "64",
      "2"
    ],
    "answer": 0,
    "explanation": "a² − b² = 25 − 9 = 16. Або за формулою різниці квадратів: (5−3)(5+3) = 2·8 = 16."
  },
  {
    "id": 16,
    "topic": "numbers",
    "level": "easy",
    "type": "choice",
    "question": "Обчисліть 2⁵.",
    "answer": 3,
    "explanation": "2⁵ = 2 · 2 · 2 · 2 · 2 = 32.",
    "options": [
      "25",
      "10",
      "64",
      "32"
    ]
  },
  {
    "id": 17,
    "topic": "numbers",
    "level": "easy",
    "type": "choice",
    "question": "Серед чисел −10, −3, 0, 2, 7 оберіть найменше.",
    "options": [
      "2",
      "0",
      "−3",
      "−10"
    ],
    "answer": 3,
    "explanation": "Чим далі від нуля вліво, тим число менше: −10 — найменше."
  },
  {
    "id": 18,
    "topic": "numbers",
    "level": "medium",
    "type": "choice",
    "question": "Знайдіть 20% від числа 45.",
    "options": [
      "15",
      "9",
      "4,5",
      "25"
    ],
    "answer": 1,
    "explanation": "20% = 0,2, тому 45 · 0,2 = 9."
  },
  {
    "id": 19,
    "topic": "numbers",
    "level": "medium",
    "type": "choice",
    "question": "Знайдіть середнє арифметичне чисел 4, 6 і 8.",
    "answer": 0,
    "explanation": "(4 + 6 + 8) / 3 = 18 / 3 = 6.",
    "options": [
      "6",
      "9",
      "4",
      "18"
    ]
  },
  {
    "id": 20,
    "topic": "numbers",
    "level": "easy",
    "type": "choice",
    "question": "Чому дорівнює √144?",
    "options": [
      "12",
      "11",
      "13",
      "14"
    ],
    "answer": 0,
    "explanation": "12 · 12 = 144, тому √144 = 12."
  },
  {
    "id": 21,
    "topic": "numbers",
    "level": "medium",
    "type": "choice",
    "question": "Обчисліть 1,2 · 0,3.",
    "options": [
      "3,6",
      "0,36",
      "36",
      "0,036"
    ],
    "answer": 1,
    "explanation": "12 · 3 = 36, у результаті відокремлюємо два знаки після коми: 0,36."
  },
  {
    "id": 22,
    "topic": "equations",
    "level": "easy",
    "type": "choice",
    "question": "Розв'яжіть рівняння 2x = 14.",
    "options": [
      "7",
      "12",
      "28",
      "14"
    ],
    "answer": 0,
    "explanation": "Ділимо обидві частини на 2: x = 7."
  },
  {
    "id": 23,
    "topic": "equations",
    "level": "easy",
    "type": "choice",
    "question": "Розв'яжіть рівняння x − 7 = 12.",
    "options": [
      "5",
      "12",
      "84",
      "19"
    ],
    "answer": 3,
    "explanation": "Додаємо 7 до обох частин: x = 19."
  },
  {
    "id": 24,
    "topic": "equations",
    "level": "easy",
    "type": "choice",
    "question": "Розв'яжіть рівняння 3x + 5 = 20.",
    "options": [
      "5",
      "15",
      "3",
      "25"
    ],
    "answer": 0,
    "explanation": "3x = 20 − 5 = 15, тому x = 15 : 3 = 5."
  },
  {
    "id": 25,
    "topic": "equations",
    "level": "medium",
    "type": "choice",
    "question": "Розв'яжіть рівняння x² = 81. У відповіді вкажіть додатний корінь.",
    "answer": 2,
    "explanation": "x = ±√81 = ±9. Додатний корінь — 9.",
    "options": [
      "81",
      "27",
      "9",
      "3"
    ]
  },
  {
    "id": 26,
    "topic": "equations",
    "level": "medium",
    "type": "choice",
    "question": "Розв'яжіть рівняння x² − 5x + 6 = 0.",
    "options": [
      "1; 6",
      "2; 3",
      "5; 6",
      "−2; −3"
    ],
    "answer": 1,
    "explanation": "За теоремою Вієта: сума коренів 5, добуток 6, отже корені 2 і 3."
  },
  {
    "id": 27,
    "topic": "equations",
    "level": "medium",
    "type": "choice",
    "question": "Укажіть суму коренів рівняння x² − 7x + 10 = 0.",
    "options": [
      "7",
      "10",
      "−7",
      "−10"
    ],
    "answer": 0,
    "explanation": "За теоремою Вієта сума коренів дорівнює другому коефіцієнту з протилежним знаком: 7."
  },
  {
    "id": 28,
    "topic": "equations",
    "level": "medium",
    "type": "choice",
    "question": "Розв'яжіть систему рівнянь: x + y = 10, x − y = 4.",
    "options": [
      "x = 4; y = 6",
      "x = 7; y = 3",
      "x = 6; y = 4",
      "x = 3; y = 7"
    ],
    "answer": 1,
    "explanation": "Додаємо рівняння: 2x = 14, x = 7. Тоді y = 10 − 7 = 3."
  },
  {
    "id": 29,
    "topic": "equations",
    "level": "easy",
    "type": "choice",
    "question": "Розв'яжіть рівняння x/4 = 6.",
    "answer": 2,
    "explanation": "Множимо обидві частини на 4: x = 24.",
    "options": [
      "10",
      "2",
      "24",
      "12"
    ]
  },
  {
    "id": 30,
    "topic": "equations",
    "level": "easy",
    "type": "choice",
    "question": "Розв'яжіть нерівність 2x > 8.",
    "options": [
      "x > 6",
      "x < 4",
      "x > 16",
      "x > 4"
    ],
    "answer": 3,
    "explanation": "Ділимо на 2 (позитивне число, знак не змінюється): x > 4."
  },
  {
    "id": 31,
    "topic": "equations",
    "level": "medium",
    "type": "choice",
    "question": "Розв'яжіть нерівність −3x ≤ 9.",
    "options": [
      "x ≥ 3",
      "x ≤ −3",
      "x ≤ 3",
      "x ≥ −3"
    ],
    "answer": 3,
    "explanation": "Ділимо на −3 і змінюємо знак нерівності на протилежний: x ≥ −3."
  },
  {
    "id": 32,
    "topic": "equations",
    "level": "medium",
    "type": "choice",
    "question": "Розв'яжіть рівняння 2x − 3 = x + 4.",
    "options": [
      "1",
      "7",
      "11",
      "−1"
    ],
    "answer": 1,
    "explanation": "Переносимо доданки: 2x − x = 4 + 3, отже x = 7."
  },
  {
    "id": 33,
    "topic": "equations",
    "level": "medium",
    "type": "choice",
    "question": "Розв'яжіть рівняння 3(x − 2) = 12.",
    "answer": 0,
    "explanation": "Розкриваємо дужки: 3x − 6 = 12, тоді 3x = 18, x = 6.",
    "options": [
      "6",
      "12",
      "2",
      "4"
    ]
  },
  {
    "id": 34,
    "topic": "equations",
    "level": "hard",
    "type": "choice",
    "question": "Укажіть дискримінант рівняння x² + 6x + 5 = 0.",
    "options": [
      "16",
      "4",
      "56",
      "26"
    ],
    "answer": 0,
    "explanation": "D = b² − 4ac = 36 − 4·1·5 = 36 − 20 = 16."
  },
  {
    "id": 35,
    "topic": "equations",
    "level": "medium",
    "type": "choice",
    "question": "Розв'яжіть рівняння x² = 25.",
    "options": [
      "−5",
      "5; −5",
      "5",
      "0; 5"
    ],
    "answer": 1,
    "explanation": "x = ±√25, отже корені 5 і −5."
  },
  {
    "id": 36,
    "topic": "equations",
    "level": "easy",
    "type": "choice",
    "question": "Розв'яжіть нерівність x + 3 < 10.",
    "options": [
      "x ≤ 7",
      "x < 13",
      "x > 7",
      "x < 7"
    ],
    "answer": 3,
    "explanation": "Віднімаємо 3: x < 7."
  },
  {
    "id": 37,
    "topic": "equations",
    "level": "hard",
    "type": "choice",
    "question": "Знайдіть менший корінь рівняння x² − 9x + 14 = 0.",
    "answer": 2,
    "explanation": "За теоремою Вієта корені 2 і 7 (добуток 14, сума 9). Менший — 2.",
    "options": [
      "14",
      "9",
      "2",
      "7"
    ]
  },
  {
    "id": 38,
    "topic": "equations",
    "level": "hard",
    "type": "choice",
    "question": "Розв'яжіть систему рівнянь: 2x + y = 7, x − y = 2.",
    "options": [
      "x = 1; y = 3",
      "x = 3; y = 2",
      "x = 2; y = 3",
      "x = 3; y = 1"
    ],
    "answer": 3,
    "explanation": "З другого рівняння y = x − 2. Підставляємо: 2x + x − 2 = 7, 3x = 9, x = 3, y = 1."
  },
  {
    "id": 39,
    "topic": "equations",
    "level": "hard",
    "type": "choice",
    "question": "При якому значенні a число 3 є коренем рівняння 2x + a = 11?",
    "options": [
      "17",
      "3",
      "5",
      "11"
    ],
    "answer": 2,
    "explanation": "Підставляємо x = 3: 6 + a = 11, тому a = 5."
  },
  {
    "id": 40,
    "topic": "equations",
    "level": "medium",
    "type": "choice",
    "question": "Розв'яжіть рівняння (x + 5)² = 0.",
    "answer": 1,
    "explanation": "Квадрат дорівнює нулю, коли основа дорівнює нулю: x + 5 = 0, x = −5.",
    "options": [
      "5",
      "-5",
      "0",
      "25"
    ]
  },
  {
    "id": 41,
    "topic": "equations",
    "level": "medium",
    "type": "choice",
    "question": "Скільки дійсних коренів має рівняння x² + 4 = 0?",
    "options": [
      "1",
      "2",
      "0",
      "4"
    ],
    "answer": 2,
    "explanation": "x² = −4 неможливо для дійсних чисел, тому дійсних коренів немає."
  },
  {
    "id": 42,
    "topic": "functions",
    "level": "medium",
    "type": "choice",
    "question": "Укажіть область визначення функції y = 1/x.",
    "options": [
      "x ≠ 0",
      "x < 0",
      "x > 0",
      "x ≥ 0"
    ],
    "answer": 0,
    "explanation": "На нуль ділити не можна, тому x ≠ 0."
  },
  {
    "id": 43,
    "topic": "functions",
    "level": "easy",
    "type": "choice",
    "question": "Графіком функції y = x² є …",
    "options": [
      "коло",
      "гіпербола",
      "пряма",
      "парабола"
    ],
    "answer": 3,
    "explanation": "Графік квадратичної функції y = x² — парабола."
  },
  {
    "id": 44,
    "topic": "functions",
    "level": "easy",
    "type": "choice",
    "question": "Знайдіть значення функції y = 2x + 1, якщо x = 3.",
    "options": [
      "8",
      "6",
      "7",
      "5"
    ],
    "answer": 2,
    "explanation": "y = 2 · 3 + 1 = 6 + 1 = 7."
  },
  {
    "id": 45,
    "topic": "functions",
    "level": "medium",
    "type": "choice",
    "question": "Укажіть найменше значення x, яке належить області визначення функції y = √x.",
    "answer": 2,
    "explanation": "Підкореневий вираз має бути невід'ємним: x ≥ 0. Найменше значення — 0.",
    "options": [
      "2",
      "-1",
      "0",
      "1"
    ]
  },
  {
    "id": 46,
    "topic": "functions",
    "level": "easy",
    "type": "choice",
    "question": "Укажіть нуль функції y = x − 4.",
    "options": [
      "4",
      "−4",
      "0",
      "1"
    ],
    "answer": 0,
    "explanation": "Нуль функції — значення x, при якому y = 0: x − 4 = 0, x = 4."
  },
  {
    "id": 47,
    "topic": "functions",
    "level": "easy",
    "type": "choice",
    "question": "Яка з функцій є прямою пропорційністю?",
    "options": [
      "y = 1/x",
      "y = 3x",
      "y = x + 3",
      "y = x²"
    ],
    "answer": 1,
    "explanation": "Пряма пропорційність має вигляд y = kx. Це y = 3x."
  },
  {
    "id": 48,
    "topic": "functions",
    "level": "medium",
    "type": "choice",
    "question": "Знайдіть значення функції y = x² − 1, якщо x = −3.",
    "answer": 1,
    "explanation": "y = (−3)² − 1 = 9 − 1 = 8.",
    "options": [
      "-10",
      "8",
      "-8",
      "10"
    ]
  },
  {
    "id": 49,
    "topic": "functions",
    "level": "medium",
    "type": "choice",
    "question": "Через яку точку проходить графік функції y = 2x + 3?",
    "options": [
      "(1; 5)",
      "(1; 3)",
      "(0; 0)",
      "(2; 2)"
    ],
    "answer": 0,
    "explanation": "Перевіряємо: при x = 1, y = 2·1 + 3 = 5. Отже, точка (1; 5)."
  },
  {
    "id": 50,
    "topic": "functions",
    "level": "medium",
    "type": "choice",
    "question": "Укажіть кутовий коефіцієнт прямої y = −4x + 7.",
    "options": [
      "4",
      "−7",
      "7",
      "−4"
    ],
    "answer": 3,
    "explanation": "У рівнянні y = kx + b кутовий коефіцієнт — число при x. Тут k = −4."
  },
  {
    "id": 51,
    "topic": "functions",
    "level": "medium",
    "type": "choice",
    "question": "При якому значенні k графік функції y = kx проходить через точку (2; 6)?",
    "options": [
      "12",
      "3",
      "2",
      "6"
    ],
    "answer": 1,
    "explanation": "6 = k · 2, тому k = 6 : 2 = 3."
  },
  {
    "id": 52,
    "topic": "functions",
    "level": "medium",
    "type": "choice",
    "question": "Укажіть найбільше значення функції y = −x².",
    "options": [
      "0",
      "1",
      "не існує",
      "−1"
    ],
    "answer": 0,
    "explanation": "Гілки параболи напрямлені вниз, вершина в точці (0; 0). Найбільше значення — 0."
  },
  {
    "id": 53,
    "topic": "functions",
    "level": "hard",
    "type": "choice",
    "question": "Знайдіть абсцису вершини параболи y = x² − 4x.",
    "answer": 1,
    "explanation": "x₀ = −b/(2a) = 4/2 = 2.",
    "options": [
      "0",
      "2",
      "4",
      "-2"
    ]
  },
  {
    "id": 54,
    "topic": "functions",
    "level": "medium",
    "type": "choice",
    "question": "Яка з функцій зростає на всій області визначення?",
    "options": [
      "y = 2x",
      "y = −2x",
      "y = x²",
      "y = 1/x"
    ],
    "answer": 0,
    "explanation": "Лінійна функція y = kx зростає, якщо k > 0. Це y = 2x."
  },
  {
    "id": 55,
    "topic": "functions",
    "level": "medium",
    "type": "choice",
    "question": "Укажіть область значень функції y = x².",
    "options": [
      "y > 0",
      "усі числа",
      "y ≥ 0",
      "y ≤ 0"
    ],
    "answer": 2,
    "explanation": "Квадрат будь-якого числа невід'ємний, тому y ≥ 0."
  },
  {
    "id": 56,
    "topic": "functions",
    "level": "medium",
    "type": "choice",
    "question": "Чому дорівнює f(−1), якщо f(x) = x³?",
    "options": [
      "−3",
      "3",
      "1",
      "−1"
    ],
    "answer": 3,
    "explanation": "f(−1) = (−1)³ = −1."
  },
  {
    "id": 57,
    "topic": "functions",
    "level": "easy",
    "type": "choice",
    "question": "Знайдіть f(2), якщо f(x) = 3x − 5.",
    "answer": 1,
    "explanation": "f(2) = 3 · 2 − 5 = 6 − 5 = 1.",
    "options": [
      "6",
      "1",
      "11",
      "-1"
    ]
  },
  {
    "id": 58,
    "topic": "functions",
    "level": "medium",
    "type": "choice",
    "question": "Укажіть парну функцію.",
    "options": [
      "y = x²",
      "y = x³",
      "y = 2x",
      "y = x + 1"
    ],
    "answer": 0,
    "explanation": "Парна функція не змінює значення при зміні знака x: f(−x) = f(x). Це y = x²."
  },
  {
    "id": 59,
    "topic": "functions",
    "level": "medium",
    "type": "choice",
    "question": "У якій точці графік функції y = x + 3 перетинає вісь Ox?",
    "options": [
      "(0; 3)",
      "(−3; 0)",
      "(3; 0)",
      "(0; −3)"
    ],
    "answer": 1,
    "explanation": "На осі Ox ордината y = 0: x + 3 = 0, x = −3. Точка (−3; 0)."
  },
  {
    "id": 60,
    "topic": "functions",
    "level": "easy",
    "type": "choice",
    "question": "Графіком функції y = sin x є …",
    "options": [
      "синусоїда",
      "парабола",
      "гіпербола",
      "пряма"
    ],
    "answer": 0,
    "explanation": "Графік функції синуса називають синусоїдою."
  },
  {
    "id": 61,
    "topic": "functions",
    "level": "medium",
    "type": "choice",
    "question": "Лінійна функція y = kx + b зростає, якщо …",
    "options": [
      "k < 0",
      "b > 0",
      "k = 0",
      "k > 0"
    ],
    "answer": 3,
    "explanation": "Зростання лінійної функції визначається кутовим коефіцієнтом: зростає при k > 0."
  },
  {
    "id": 62,
    "topic": "geometry",
    "level": "easy",
    "type": "choice",
    "question": "Сума кутів трикутника дорівнює …",
    "options": [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    "answer": 1,
    "explanation": "За теоремою про суму кутів трикутника вона дорівнює 180°."
  },
  {
    "id": 63,
    "topic": "geometry",
    "level": "easy",
    "type": "choice",
    "question": "Знайдіть площу прямокутника зі сторонами 4 і 7.",
    "options": [
      "22",
      "14",
      "28",
      "11"
    ],
    "answer": 2,
    "explanation": "S = a · b = 4 · 7 = 28."
  },
  {
    "id": 64,
    "topic": "geometry",
    "level": "easy",
    "type": "choice",
    "question": "Знайдіть площу квадрата зі стороною 6.",
    "answer": 3,
    "explanation": "S = a² = 6² = 36.",
    "options": [
      "24",
      "12",
      "18",
      "36"
    ]
  },
  {
    "id": 65,
    "topic": "geometry",
    "level": "easy",
    "type": "choice",
    "question": "Знайдіть периметр квадрата зі стороною 5.",
    "options": [
      "25",
      "20",
      "15",
      "10"
    ],
    "answer": 1,
    "explanation": "P = 4a = 4 · 5 = 20."
  },
  {
    "id": 66,
    "topic": "geometry",
    "level": "medium",
    "type": "choice",
    "question": "У прямокутному трикутнику катети дорівнюють 3 і 4. Знайдіть гіпотенузу.",
    "options": [
      "25",
      "5",
      "12",
      "7"
    ],
    "answer": 1,
    "explanation": "За теоремою Піфагора: c² = 3² + 4² = 9 + 16 = 25, c = 5."
  },
  {
    "id": 67,
    "topic": "geometry",
    "level": "medium",
    "type": "choice",
    "question": "Знайдіть площу трикутника з основою 10 і висотою 6.",
    "options": [
      "30",
      "16",
      "15",
      "60"
    ],
    "answer": 0,
    "explanation": "S = ½ · a · h = ½ · 10 · 6 = 30."
  },
  {
    "id": 68,
    "topic": "geometry",
    "level": "medium",
    "type": "choice",
    "question": "Знайдіть довжину кола радіусом 5.",
    "options": [
      "10π",
      "5π",
      "25π",
      "2π"
    ],
    "answer": 0,
    "explanation": "C = 2πr = 2π · 5 = 10π."
  },
  {
    "id": 69,
    "topic": "geometry",
    "level": "medium",
    "type": "choice",
    "question": "Знайдіть площу круга радіусом 3.",
    "options": [
      "9π",
      "6π",
      "27π",
      "3π"
    ],
    "answer": 0,
    "explanation": "S = πr² = π · 3² = 9π."
  },
  {
    "id": 70,
    "topic": "geometry",
    "level": "easy",
    "type": "choice",
    "question": "У прямокутному трикутнику синус гострого кута — це відношення протилежного катета до …",
    "options": [
      "гіпотенузи",
      "прилеглого катета",
      "іншого катета",
      "радіуса"
    ],
    "answer": 0,
    "explanation": "sin α = протилежний катет / гіпотенуза."
  },
  {
    "id": 71,
    "topic": "geometry",
    "level": "medium",
    "type": "choice",
    "question": "Знайдіть об'єм куба з ребром 3.",
    "answer": 1,
    "explanation": "V = a³ = 3³ = 27.",
    "options": [
      "81",
      "27",
      "9",
      "18"
    ]
  },
  {
    "id": 72,
    "topic": "geometry",
    "level": "medium",
    "type": "choice",
    "question": "Знайдіть об'єм прямокутного паралелепіпеда з вимірами 2, 3 і 5.",
    "options": [
      "15",
      "10",
      "25",
      "30"
    ],
    "answer": 3,
    "explanation": "V = a · b · c = 2 · 3 · 5 = 30."
  },
  {
    "id": 73,
    "topic": "geometry",
    "level": "easy",
    "type": "choice",
    "question": "Чому дорівнює кут правильного трикутника?",
    "options": [
      "120°",
      "60°",
      "45°",
      "90°"
    ],
    "answer": 1,
    "explanation": "Правильний трикутник рівносторонній: 180° : 3 = 60°."
  },
  {
    "id": 74,
    "topic": "geometry",
    "level": "easy",
    "type": "choice",
    "question": "Скільки сторін має шестикутник?",
    "options": [
      "6",
      "5",
      "7",
      "8"
    ],
    "answer": 0,
    "explanation": "Назва «шестикутник» означає, що сторін шість."
  },
  {
    "id": 75,
    "topic": "geometry",
    "level": "hard",
    "type": "choice",
    "question": "Знайдіть діагональ квадрата зі стороною 2.",
    "options": [
      "2√2",
      "4",
      "2",
      "√2"
    ],
    "answer": 0,
    "explanation": "d = a√2 = 2√2."
  },
  {
    "id": 76,
    "topic": "geometry",
    "level": "hard",
    "type": "choice",
    "question": "Кути трикутника відносяться як 1 : 2 : 3. Знайдіть найбільший кут.",
    "options": [
      "45°",
      "120°",
      "90°",
      "60°"
    ],
    "answer": 2,
    "explanation": "Сума частин 1 + 2 + 3 = 6, одна частина = 180° : 6 = 30°. Найбільший кут = 3 · 30° = 90°."
  },
  {
    "id": 77,
    "topic": "geometry",
    "level": "medium",
    "type": "choice",
    "question": "Знайдіть площу паралелограма з основою 8 і висотою 5.",
    "answer": 3,
    "explanation": "S = a · h = 8 · 5 = 40.",
    "options": [
      "80",
      "13",
      "26",
      "40"
    ]
  },
  {
    "id": 78,
    "topic": "geometry",
    "level": "hard",
    "type": "choice",
    "question": "Знайдіть об'єм циліндра, якщо радіус його основи дорівнює 2, а висота — 5.",
    "options": [
      "40π",
      "10π",
      "100π",
      "20π"
    ],
    "answer": 3,
    "explanation": "V = πr²h = π · 4 · 5 = 20π."
  },
  {
    "id": 79,
    "topic": "geometry",
    "level": "hard",
    "type": "choice",
    "question": "Знайдіть площу трапеції з основами 6 і 10 та висотою 4.",
    "options": [
      "16",
      "64",
      "32",
      "40"
    ],
    "answer": 2,
    "explanation": "S = (a + b)/2 · h = (6 + 10)/2 · 4 = 8 · 4 = 32."
  },
  {
    "id": 80,
    "topic": "geometry",
    "level": "medium",
    "type": "choice",
    "question": "Катет прямокутного трикутника дорівнює 6, гіпотенуза — 10. Знайдіть другий катет.",
    "options": [
      "8",
      "64",
      "4",
      "16"
    ],
    "answer": 0,
    "explanation": "b² = 10² − 6² = 100 − 36 = 64, b = 8."
  },
  {
    "id": 81,
    "topic": "geometry",
    "level": "medium",
    "type": "choice",
    "question": "Чому дорівнює центральний кут, що спирається на діаметр кола?",
    "options": [
      "90°",
      "360°",
      "180°",
      "60°"
    ],
    "answer": 2,
    "explanation": "Діаметр — це хорда, що проходить через центр, він розгортає коло на півоберта: 180°."
  },
  {
    "id": 82,
    "topic": "probability",
    "level": "easy",
    "type": "choice",
    "question": "Яка ймовірність випадання «орла» при одному підкиданні монети?",
    "options": [
      "1/4",
      "1/3",
      "2/3",
      "1/2"
    ],
    "answer": 3,
    "explanation": "Рівноможливих результатів два, сприятливий один: P = 1/2."
  },
  {
    "id": 83,
    "topic": "probability",
    "level": "easy",
    "type": "choice",
    "question": "Яка ймовірність того, що при підкиданні грального кубика випаде число 6?",
    "options": [
      "1/2",
      "1/3",
      "1/12",
      "1/6"
    ],
    "answer": 3,
    "explanation": "У кубика 6 граней, сприятливий результат один: P = 1/6."
  },
  {
    "id": 84,
    "topic": "probability",
    "level": "medium",
    "type": "choice",
    "question": "У коробці 3 білі та 7 чорних кульок. Яка ймовірність дістати білу кульку?",
    "options": [
      "3/10",
      "7/10",
      "1/10",
      "1/3"
    ],
    "answer": 0,
    "explanation": "Усього кульок 10, білих 3: P = 3/10."
  },
  {
    "id": 85,
    "topic": "probability",
    "level": "medium",
    "type": "choice",
    "question": "З чисел від 1 до 10 навмання обирають одне. Яка ймовірність, що воно парне?",
    "options": [
      "1/5",
      "1/2",
      "1/4",
      "1/10"
    ],
    "answer": 1,
    "explanation": "Парних чисел п'ять (2, 4, 6, 8, 10) із десяти: P = 5/10 = 1/2."
  },
  {
    "id": 86,
    "topic": "probability",
    "level": "easy",
    "type": "choice",
    "question": "Яка ймовірність того, що при підкиданні грального кубика випаде парне число?",
    "options": [
      "1/2",
      "1/3",
      "2/3",
      "1/6"
    ],
    "answer": 0,
    "explanation": "Парних чисел на кубику три (2, 4, 6) з шести: P = 3/6 = 1/2."
  },
  {
    "id": 87,
    "topic": "probability",
    "level": "medium",
    "type": "choice",
    "question": "Скількома способами можна розставити 3 книги на полиці?",
    "options": [
      "9",
      "3",
      "27",
      "6"
    ],
    "answer": 3,
    "explanation": "3! = 1 · 2 · 3 = 6."
  },
  {
    "id": 88,
    "topic": "probability",
    "level": "hard",
    "type": "choice",
    "question": "Скількома способами можна вибрати 2 учнів з 5 (порядок не важливий)?",
    "answer": 0,
    "explanation": "C(5,2) = 5! / (2! · 3!) = 120 / (2 · 6) = 10.",
    "options": [
      "10",
      "5",
      "60",
      "20"
    ]
  },
  {
    "id": 89,
    "topic": "probability",
    "level": "medium",
    "type": "choice",
    "question": "Укажіть моду ряду чисел: 2, 5, 5, 7, 9.",
    "options": [
      "5",
      "2",
      "7",
      "9"
    ],
    "answer": 0,
    "explanation": "Мода — число, що найчастіше зустрічається. Це 5."
  },
  {
    "id": 90,
    "topic": "probability",
    "level": "medium",
    "type": "choice",
    "question": "Укажіть медіану ряду чисел: 1, 3, 5, 7, 9.",
    "options": [
      "1",
      "7",
      "3",
      "5"
    ],
    "answer": 3,
    "explanation": "Медіана — середнє число впорядкованого ряду. Це 5."
  },
  {
    "id": 91,
    "topic": "probability",
    "level": "medium",
    "type": "choice",
    "question": "Знайдіть середнє арифметичне чисел 2, 4, 6, 8, 10.",
    "answer": 0,
    "explanation": "(2 + 4 + 6 + 8 + 10) / 5 = 30 / 5 = 6.",
    "options": [
      "6",
      "5",
      "10",
      "30"
    ]
  },
  {
    "id": 92,
    "topic": "probability",
    "level": "medium",
    "type": "choice",
    "question": "У мішку 4 зелені, 3 жовті та 5 червоних кульок. Яка ймовірність дістати жовту кульку?",
    "options": [
      "3/5",
      "1/12",
      "1/4",
      "1/3"
    ],
    "answer": 2,
    "explanation": "Усього 12 кульок, жовтих 3: P = 3/12 = 1/4."
  },
  {
    "id": 93,
    "topic": "probability",
    "level": "easy",
    "type": "choice",
    "question": "Значення ймовірності події завжди знаходиться в межах …",
    "options": [
      "від −1 до 1",
      "від 1 до 100",
      "від 0 до 1",
      "тільки 0 або 1"
    ],
    "answer": 2,
    "explanation": "Ймовірність — число від 0 (неможлива подія) до 1 (достовірна подія)."
  },
  {
    "id": 94,
    "topic": "probability",
    "level": "hard",
    "type": "choice",
    "question": "Скількома способами можна обрати першого і другого чергових з 6 учнів (порядок важливий)?",
    "answer": 2,
    "explanation": "Першого обираємо 6 способами, другого — 5: 6 · 5 = 30.",
    "options": [
      "6",
      "36",
      "30",
      "11"
    ]
  },
  {
    "id": 95,
    "topic": "probability",
    "level": "hard",
    "type": "choice",
    "question": "У грі «лото» витягують бочонок з числом від 1 до 90. Яка ймовірність, що число кратне 10?",
    "options": [
      "1/10",
      "1/9",
      "1/90",
      "1/100"
    ],
    "answer": 0,
    "explanation": "Чисел, кратних 10, дев'ять (10…90) із 90: P = 9/90 = 1/10."
  },
  {
    "id": 96,
    "topic": "probability",
    "level": "hard",
    "type": "choice",
    "question": "Підкидають два гральні кубики. Яка ймовірність, що сума очок дорівнює 7?",
    "options": [
      "1/6",
      "1/36",
      "1/12",
      "1/9"
    ],
    "answer": 0,
    "explanation": "Всього 36 результатів, сприятливих 6: (1;6), (2;5), (3;4), (4;3), (5;2), (6;1). P = 6/36 = 1/6."
  },
  {
    "id": 97,
    "topic": "probability",
    "level": "hard",
    "type": "choice",
    "question": "У класі 12 хлопців і 13 дівчат. Яка ймовірність, що навмання обраний учень — хлопець?",
    "answer": 2,
    "explanation": "Усього 25 учнів, хлопців 12: P = 12/25.",
    "options": [
      "12/13",
      "13/25",
      "12/25",
      "1/2"
    ]
  },
  {
    "id": 98,
    "topic": "probability",
    "level": "medium",
    "type": "choice",
    "question": "Укажіть розмах ряду чисел: 4, 9, 2, 7.",
    "options": [
      "7",
      "4",
      "9",
      "5"
    ],
    "answer": 0,
    "explanation": "Розмах — різниця найбільшого і найменшого: 9 − 2 = 7."
  },
  {
    "id": 99,
    "topic": "probability",
    "level": "easy",
    "type": "choice",
    "question": "Яка ймовірність достовірної події?",
    "options": [
      "1/2",
      "100",
      "1",
      "0"
    ],
    "answer": 2,
    "explanation": "Достовірна подія відбувається завжди, її ймовірність дорівнює 1."
  },
  {
    "id": 100,
    "topic": "probability",
    "level": "medium",
    "type": "choice",
    "question": "Обчисліть C(4, 2) — кількість сполук з 4 по 2.",
    "options": [
      "24",
      "12",
      "4",
      "6"
    ],
    "answer": 3,
    "explanation": "C(4,2) = 4! / (2! · 2!) = 24 / (2 · 2) = 6."
  },
  {
    "id": 101,
    "topic": "probability",
    "level": "hard",
    "type": "choice",
    "question": "У слові «МАТЕМАТИКА» навмання обирають одну літеру. Яка ймовірність, що це літера «М»?",
    "options": [
      "1/5",
      "1/10",
      "1/2",
      "2/5"
    ],
    "answer": 0,
    "explanation": "У слові 10 літер, літера «М» трапляється двічі: P = 2/10 = 1/5."
  },
  {
    "id": 102,
    "topic": "word",
    "level": "easy",
    "type": "choice",
    "question": "Автомобіль рухається зі швидкістю 60 км/год. Яку відстань він проїде за 3 години?",
    "options": [
      "240 км",
      "60 км",
      "120 км",
      "180 км"
    ],
    "answer": 3,
    "explanation": "S = v · t = 60 · 3 = 180 км."
  },
  {
    "id": 103,
    "topic": "word",
    "level": "easy",
    "type": "choice",
    "question": "За 5 хвилин насос перекачує 100 л води. Скільки літрів він перекачує за 1 хвилину?",
    "options": [
      "10 л",
      "100 л",
      "50 л",
      "20 л"
    ],
    "answer": 3,
    "explanation": "100 : 5 = 20 л/хв."
  },
  {
    "id": 104,
    "topic": "word",
    "level": "medium",
    "type": "choice",
    "question": "Ціна товару 200 грн. Скільки гривень він коштуватиме після знижки 10%?",
    "answer": 1,
    "explanation": "Знижка: 200 · 0,1 = 20 грн. Нова ціна: 200 − 20 = 180 грн.",
    "options": [
      "190",
      "180",
      "200",
      "20"
    ]
  },
  {
    "id": 105,
    "topic": "word",
    "level": "hard",
    "type": "choice",
    "question": "Два велосипедисти виїхали одночасно назустріч один одному зі швидкостями 10 і 12 км/год. Відстань між ними 44 км. Через скільки годин вони зустрінуться?",
    "options": [
      "2 год",
      "4 год",
      "22 год",
      "1 год"
    ],
    "answer": 0,
    "explanation": "Швидкість зближення: 10 + 12 = 22 км/год. Час: 44 : 22 = 2 год."
  },
  {
    "id": 106,
    "topic": "word",
    "level": "hard",
    "type": "choice",
    "question": "Перший робітник виконує роботу за 6 годин, другий — за 3 години. За скільки годин вони виконають роботу разом?",
    "options": [
      "2 год",
      "3 год",
      "4 год",
      "6 год"
    ],
    "answer": 0,
    "explanation": "Продуктивності: 1/6 і 1/3. Разом за годину: 1/6 + 1/3 = 1/2. Час: 1 : 1/2 = 2 год."
  },
  {
    "id": 107,
    "topic": "word",
    "level": "medium",
    "type": "choice",
    "question": "Число 60 збільшили на 25%. Яке число отримали?",
    "answer": 0,
    "explanation": "25% від 60 = 15. Результат: 60 + 15 = 75.",
    "options": [
      "75",
      "60",
      "100",
      "85"
    ]
  },
  {
    "id": 108,
    "topic": "word",
    "level": "easy",
    "type": "choice",
    "question": "Потяг проїхав 240 км за 3 години. Яка його швидкість?",
    "options": [
      "80 км/год",
      "60 км/год",
      "120 км/год",
      "240 км/год"
    ],
    "answer": 0,
    "explanation": "v = S / t = 240 : 3 = 80 км/год."
  },
  {
    "id": 109,
    "topic": "word",
    "level": "easy",
    "type": "choice",
    "question": "З кошика взяли половину яблук, і в ньому залишилось 12. Скільки яблук було спочатку?",
    "options": [
      "24",
      "12",
      "36",
      "48"
    ],
    "answer": 0,
    "explanation": "Залишилась половина, тобто спочатку було 12 · 2 = 24."
  },
  {
    "id": 110,
    "topic": "word",
    "level": "hard",
    "type": "choice",
    "question": "Басейн наповнюється через одну трубу за 4 години, а через другу спорожнюється за 6 годин. За скільки годин басейн наповниться, якщо відкриті обидві труби?",
    "options": [
      "24 год",
      "10 год",
      "12 год",
      "2 год"
    ],
    "answer": 2,
    "explanation": "За годину наповнюється 1/4, спорожнюється 1/6. Чисте наповнення: 1/4 − 1/6 = 1/12. Час: 12 год."
  },
  {
    "id": 111,
    "topic": "word",
    "level": "medium",
    "type": "choice",
    "question": "Обчисліть 40% від числа 250.",
    "answer": 2,
    "explanation": "250 · 0,4 = 100.",
    "options": [
      "190",
      "40",
      "100",
      "250"
    ]
  },
  {
    "id": 112,
    "topic": "word",
    "level": "hard",
    "type": "choice",
    "question": "Швидкість теплохода за течією 30 км/год, а проти течії — 20 км/год. Яка швидкість течії?",
    "options": [
      "50 км/год",
      "25 км/год",
      "10 км/год",
      "5 км/год"
    ],
    "answer": 3,
    "explanation": "Швидкість течії = (швидкість за течією − проти течії) : 2 = (30 − 20) : 2 = 5 км/год."
  },
  {
    "id": 113,
    "topic": "word",
    "level": "medium",
    "type": "choice",
    "question": "Відстань між містами 90 км. Мотоцикліст подолав її за 1,5 години. Яка його швидкість?",
    "options": [
      "90 км/год",
      "45 км/год",
      "30 км/год",
      "60 км/год"
    ],
    "answer": 3,
    "explanation": "v = 90 : 1,5 = 60 км/год."
  },
  {
    "id": 114,
    "topic": "word",
    "level": "medium",
    "type": "choice",
    "question": "Товар коштував 500 грн і подорожчав на 20%. Яка його нова ціна?",
    "options": [
      "600 грн",
      "520 грн",
      "620 грн",
      "400 грн"
    ],
    "answer": 0,
    "explanation": "Подорожчання: 500 · 0,2 = 100 грн. Нова ціна: 500 + 100 = 600 грн."
  },
  {
    "id": 115,
    "topic": "word",
    "level": "easy",
    "type": "choice",
    "question": "3 кг яблук коштують 45 грн. Скільки гривень коштують 5 кг яблук?",
    "answer": 0,
    "explanation": "Ціна 1 кг: 45 : 3 = 15 грн. 5 кг: 15 · 5 = 75 грн.",
    "options": [
      "75",
      "60",
      "135",
      "15"
    ]
  },
  {
    "id": 116,
    "topic": "word",
    "level": "hard",
    "type": "choice",
    "question": "Перший кран наповнює ванну за 30 хвилин, другий — за 20 хвилин. За скільки хвилин вони наповнять ванну разом?",
    "options": [
      "25 хв",
      "15 хв",
      "10 хв",
      "12 хв"
    ],
    "answer": 3,
    "explanation": "Продуктивності: 1/30 і 1/20, разом за хвилину: 1/30 + 1/20 = 5/60 = 1/12. Час: 12 хв."
  },
  {
    "id": 117,
    "topic": "word",
    "level": "medium",
    "type": "choice",
    "question": "Відстань між містами 300 км. Автобус проїхав 60% шляху. Скільки кілометрів йому залишилось проїхати?",
    "options": [
      "120 км",
      "180 км",
      "60 км",
      "240 км"
    ],
    "answer": 0,
    "explanation": "Залишилось 40%: 300 · 0,4 = 120 км."
  },
  {
    "id": 118,
    "topic": "word",
    "level": "hard",
    "type": "choice",
    "question": "Велосипедист проїхав 30 км за 2 години, а потім ще 30 км за 3 години. Яка його середня швидкість на всьому шляху?",
    "answer": 1,
    "explanation": "Весь шлях 60 км, весь час 5 год: 60 : 5 = 12 км/год.",
    "options": [
      "10",
      "12",
      "20",
      "15"
    ]
  },
  {
    "id": 119,
    "topic": "word",
    "level": "medium",
    "type": "choice",
    "question": "Десяток яєць коштує 36 грн. Скільки гривень коштують 15 яєць?",
    "options": [
      "45 грн",
      "54 грн",
      "60 грн",
      "36 грн"
    ],
    "answer": 1,
    "explanation": "Одне яйце: 36 : 10 = 3,6 грн. 15 яєць: 3,6 · 15 = 54 грн."
  },
  {
    "id": 120,
    "topic": "word",
    "level": "medium",
    "type": "choice",
    "question": "Сторони прямокутника дорівнюють 6 і 8. Знайдіть його площу.",
    "options": [
      "14",
      "48",
      "28",
      "24"
    ],
    "answer": 1,
    "explanation": "S = 6 · 8 = 48."
  },
  {
    "id": 121,
    "topic": "word",
    "level": "easy",
    "type": "choice",
    "question": "За 7 днів робітник виготовляє 140 деталей. Скільки деталей він виготовить за 4 дні, якщо продуктивність не зміниться?",
    "answer": 1,
    "explanation": "За день: 140 : 7 = 20 деталей. За 4 дні: 20 · 4 = 80.",
    "options": [
      "35",
      "80",
      "140",
      "20"
    ]
  }
];
