# AI Failure Audit: Exercise 0.1

## Observed AI failures

| ID | Task | Incorrect suggestion or behavior | Observed evidence | Root cause | Impact | Fix | Retest | Prevention |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AI-01 | T0, workspace cleanup | The suggested PowerShell guard compared the first line of an accidental diff-output file with an exact plain-text string | The command printed `No file removed. Check the matching file manually.` and `git status` still showed the untracked file | The file's first line contained ANSI color-control characters around the visible `diff --git` text; the exact string comparison could not match | Cleanup was delayed; no project file was deleted or changed by the failed command | Replaced exact equality with a substring regex while retaining checks for one file, its directory, and its size | The corrected command printed `Removed the accidental diff output file.`; `git status --short --branch` showed only `## exercise/0-1...origin/exercise/0-1` | Inspect raw text or match a verified substring when terminal output may contain ANSI control characters; retain narrow path and size checks before deletion |

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