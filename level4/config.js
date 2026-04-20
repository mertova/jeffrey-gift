/* =====================================================
   LEVEL 4 CONFIG — Riddle Sequence
   -----------------------------------------------------
   Five riddles. No hints. Jeffrey sweats.

   Fragments: fragment-1.jpg → fragment-5.jpg
   Final:     final.jpg  (expedition brief or Tatras photo)
   ===================================================== */

const LEVEL4_CONFIG = {
  finalImage:   'final.jpg',
  finalMessage: 'Initial conditions set.',
  finalSub:     'pack light · belay included',

  riddles: [

    // ── 1 ── Caesar cipher, ROT-19
    // Plaintext:  WE SAW SEALS AT WORMS HEAD AND THE SEA WAITED FOR NO ONE
    // ROT-19 means shift each letter by +19 (i.e. A→T, B→U, C→V...)
    // Encoded:    PL ZLP ZLTGZ TM PHKFZ OLAR TAL MAL ZLT PTBMLA QHK GH HAL
    // Wait — let me recalculate cleanly.
    // ROT-7: A→H, B→I, C→J, D→K, E→L, F→M, G→N, H→O, I→P, J→Q,
    //        K→R, L→S, M→T, N→U, O→V, P→W, Q→X, R→Y, S→Z, T→A,
    //        U→B, V→C, W→D, X→E, Y→F, Z→G
    // W→D, E→L, S→Z, A→H, W→D  = DLZHD (WE SAW)
    // S→Z, E→L, A→H, L→S, S→Z  = ZLHSZ (SEALS)
    // A→H, T→A               = HA    (AT)
    // W→D, O→V, R→Y, M→T, S→Z  = DVYTZ (WORMS)
    // H→O, E→L, A→H, D→K      = OLHK  (HEAD)
    // A→H, N→U, D→K           = HUK   (AND)
    // T→A, H→O, E→L           = AOL   (THE)
    // S→Z, E→L, A→H           = ZLH   (SEA)
    // W→D, A→H, I→P, T→A, E→L, D→K = DHPALK (WAITED) — 6 letters
    // Actually WAITED: W→D,A→H,I→P,T→A,E→L,D→K = DHPALK
    // F→M, O→V, R→Y           = MVY   (FOR)
    // N→U, O→V               = UV    (NO)
    // O→V, N→U, E→L           = VUL   (ONE)
    //
    // Full encoded:
    // "DL ZHD ZLHSZ HA DVYTZ OLHK HUK AOL ZLH DHPALK MVY UV VUL"
    //
    // Answer = last word decoded = "ONE" (or "no one")
    {
      prompt: `Decode the following. ROT-7 cipher. The answer is the last word of the decoded message.\n\n"DL ZHD ZLHSZ HA DVYTZ OLHK HUK AOL ZLH DHPALK MVY UV VUL"`,
      answers: ['one', 'no one', 'no-one'],
      hint: null,
      fragmentImage: 'fragment-1.jpg',
    },

    // ── 2 ── Cryptic crossword clue
    // Answer: GERLACH (7 letters)
    // Definition: "Highest in the range"
    // Wordplay: anagram of LARGE HC → GERLACH
    {
      prompt: `Highest in the range, found by rearranging LARGE HC. (7)`,
      answers: ['gerlach', 'gerlachovsky', 'gerlachovský štít', 'gerlachovský'],
      hint: null,
      fragmentImage: 'fragment-2.jpg',
    },

    // ── 3 ── Logic puzzle (knights/knaves/alternator variant)
    // Answer: LEFT
    {
      prompt: `Three climbers at a fork — Anna, Boro, Ciara.\nOne always tells the truth about conditions.\nOne always lies.\nOne alternates each statement.\n\nBefore you ask anything, Anna volunteers:\n"I would tell you to go left."\n\nDo you go left or right?`,
      answers: ['left', 'go left'],
      hint: null,
      fragmentImage: 'fragment-3.jpg',
    },

    // ── 4 ── Lyric puzzle (Avett Brothers)
    // Song: "I and Love and You"
    // Line: "Brooklyn, Brooklyn, take me in / are you aware the shape I'm in?"
    {
      prompt: `Complete this line exactly as written:\n\n"Brooklyn, Brooklyn, take me in..."`,
      answers: [
        "are you aware the shape i'm in",
        "are you aware the shape im in",
        "are you aware the shape i'm in?",
      ],
      hint: null,
      fragmentImage: 'fragment-4.jpg',
    },

    // ── 5 ── Personal riddle — answer: JEFFREY
    // Each of 7 clues gives one letter.
    // J = 10th letter = √100th letter
    // E = most common letter in English; last letter of Lukrecia
    // F = musical note between E and G
    // F = same
    // R = 18th letter
    // E = same as clue 2
    // Y = last letter of "gravity"
    {
      prompt: `Seven clues. Seven letters. Assemble them in order.\n\n1. The (√100)th letter of the alphabet.\n2. The most common letter in English. Also the last letter of Lukrecia.\n3. The musical note between E and G.\n4. Same as 3.\n5. The 18th letter of the alphabet.\n6. Same as 2.\n7. The last letter of the word "gravity" — the force you're always working against.\n\nWhat do they spell?`,
      answers: ['jeffrey'],
      hint: null,
      fragmentImage: 'fragment-5.jpg',
    },

  ],
};
