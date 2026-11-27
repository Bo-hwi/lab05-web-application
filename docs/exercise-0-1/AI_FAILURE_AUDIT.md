# AI Failure Audit: Exercise 0.1

## Observed AI failures

| ID | Task | Incorrect suggestion or behavior | Observed evidence | Root cause | Impact | Fix | Retest | Prevention |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AI-01 | T0, workspace cleanup | The suggested PowerShell guard compared the first line of an accidental diff-output file with an exact plain-text string | The command printed `No file removed. Check the matching file manually.` and `git status` still showed the untracked file | The file contained ANSI color-control characters around the visible `diff --git` text | Cleanup was delayed; no project file was deleted | Used a substring regex while retaining checks for one file, its directory, and its size | The corrected command removed the file; Git showed a clean branch | Inspect raw text or match a verified substring when terminal output may contain ANSI characters |
| AI-02 | T4, theme control | The first AI-generated `ThemeToggle` changed its button text between `Dark theme: On` and `Dark theme: Off` while also using `aria-pressed` | Code review found both the changing text and `aria-pressed`; this conflicts with the WAI-ARIA button pattern | The AI combined a changing action label with toggle-button semantics | The toggle's accessible name changed with its pressed state; automated lint and build did not detect this | Kept the button label `Dark theme` constant; moved visible On/Off text into a separate `aria-hidden` element | Final code review confirms a stable button label; screenshots show separate On/Off text, and the student reports interaction passed. Screen-reader output was not tested | Review toggle semantics against the WAI-ARIA Button Pattern before treating accessibility as verified |

Reference for AI-02: https://www.w3.org/WAI/ARIA/apg/patterns/button/

## Anticipated risks, not observed failures

| Risk | Control |
| --- | --- |
| Accessing the DOM or storage inside the reducer | Review the reducer and test its pure transitions |
| Combining state and dispatch in one Context | Review AppProvider and the two Context definitions |
| Assuming Split Context prevents every component from rendering again | Make conclusions only for components and behavior actually measured |
| Reporting PASS based on the starter build | Run checks again after implementing this exercise |
| Using `class` instead of `className` in JSX | Review JSX and run lint and build |

## Update rule

For each actual failure, record its task ID, observed output or behavior, root cause, correction, and retest result. Do not add hypothetical failures to the observed-failures table.