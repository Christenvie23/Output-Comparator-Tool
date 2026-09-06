# Output Comparator Tool

A JavaScript-based utility that compares expected and actual output
line-by-line, highlighting exactly where they diverge. Built to speed
up debugging and testing when checking program output against an
expected result.

## Live Demo

Open `index.html` in any browser — no build step or dependencies required.

## How It Works

1. Paste the **expected output** into the left textarea and the
   **actual output** into the right one.
2. Click **Compare**.
3. Each line is checked side-by-side:
   - Matching lines are highlighted green
   - Differing lines are highlighted red, with the exact expected vs.
     actual text shown for that line
4. A summary line reports how many of the total lines differ.

## Why This Exists

When testing scripts, SQL query output, or any text-based program
output, manually scanning two blocks of text for differences is slow
and error-prone — especially with long output. This tool automates
that comparison so mismatches are visible immediately.

## Tech Stack

`HTML5` · `CSS3` · `JavaScript` (vanilla, no frameworks or dependencies)

## Possible Extensions

- Character-level diff highlighting within a mismatched line
- Ignore-whitespace / case-insensitive comparison toggle
- File upload support instead of paste-only

## Author

**Christenvie Nlolo**
[GitHub](https://github.com/christenvie23) · [LinkedIn](https://linkedin.com/in/christenvie-nlolo)
