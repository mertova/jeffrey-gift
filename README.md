# Field Notes

A browser-based gift app built as a personal project. Four levels, 
four different game mechanics — pair matching, Sudoku reveal, 
a question-gated maze, and a riddle sequence.

Built with vanilla HTML, CSS and JavaScript — no frameworks, 
no build step, no dependencies. A Python FastAPI backend handles 
optional LLM-generated quiz questions via the Anthropic Claude API.

## Stack
- Frontend: vanilla HTML/CSS/JS, modular one-folder-per-level structure
- Backend: Python FastAPI + Anthropic Claude API (optional)
- Music: one song per level, fades in on first interaction
- No build step — runs with python -m http.server or any static host

## Levels
1. Pair matching — 15 pairs, lives system, penalty screen
2. Sudoku — correct cells reveal a hidden image behind the grid
3. Path quiz — answer correctly to walk a maze node by node
4. Riddle sequence — cipher, cryptic clue, logic puzzle, lyric, personal

## Run it
cd frontend
python -m http.server 8000
