/* =====================================================
   LEVEL 3 CONFIG — Path / Maze Quiz
   ===================================================== */

const LEVEL3_CONFIG = {
  finalImage:   'final.jpg',
  finalMessage: 'Year three. Still going strong.',
  finalSub:     '// path complete',

  cols: 7,
  rows: 5,

  path: [
    [0,2],[1,2],[1,1],[2,1],[2,2],
    [3,2],[3,3],[4,3],[4,2],[5,2],[6,2]
  ],

  questions: [
    /* Geography / Tatras */
    {
      q: "Gerlachovský štít is the highest peak in the Carpathians. What is its elevation?",
      options: ["2495 m", "2655 m", "2711 m", "2499 m"],
      correct: 1
    },
    {
      q: "Worm's Head, Wales — accessible only when?",
      options: [
        "At high tide",
        "At low tide",
        "Only by boat",
        "Year-round via bridge"
      ],
      correct: 1
    },
    {
      q: "A fall factor is defined as fall distance divided by rope paid out. Worst possible fall factor?",
      options: ["0.5", "1", "2", "4"],
      correct: 2
    },
    {
      q: "In Rocket League, what does 'boost farming' refer to?",
      options: [
        "Stealing opponent's boost pads",
        "Collecting boost pads strategically to deny opponents",
        "Storing unused boost",
        "A defensive rotation pattern"
      ],
      correct: 1
    },
    {
      q: "Pink Floyd's 'Comfortably Numb' — which album?",
      options: ["Animals", "Wish You Were Here", "The Wall", "Meddle"],
      correct: 2
    },
    {
      q: "The Standard Model has how many fundamental particles (quarks + leptons + bosons)?",
      options: ["12", "17", "24", "36"],
      correct: 1
    },
    {
      q: "Neutral Milk Hotel's 'In the Aeroplane Over the Sea' was released in...",
      options: ["1994", "1996", "1998", "2001"],
      correct: 2
    },
    {
      q: "In climbing, what does 'on-sight' mean?",
      options: [
        "Climbed with prior knowledge of moves",
        "Climbed first attempt with no prior information",
        "Climbed with a top rope",
        "Climbed after watching another climber"
      ],
      correct: 1
    },
    {
      q: "The Higgs boson was confirmed experimentally at CERN in which year?",
      options: ["2008", "2010", "2012", "2015"],
      correct: 2
    },
    {
      q: "Mogwai is from which city?",
      options: ["London", "Edinburgh", "Glasgow", "Manchester"],
      correct: 2
    },
    {
      q: "In the Tatras, what does TANAP stand for?",
      options: [
        "Tatra Alpine National Area Park",
        "Tatranský Národný Park",
        "Tatras Natural Alpine Preserve",
        "Tatra National Area Protection"
      ],
      correct: 1
    },
    {
      q: "What is the speed of light in a vacuum, to 3 significant figures?",
      options: [
        "2.90 × 10⁸ m/s",
        "2.98 × 10⁸ m/s",
        "3.00 × 10⁸ m/s",
        "3.12 × 10⁸ m/s"
      ],
      correct: 2
    },
  ],
};
