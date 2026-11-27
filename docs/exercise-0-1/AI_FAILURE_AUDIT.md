# AI Failure Audit: Exercise 0.1

## Observed AI failures

No AI failures recorded.

Add an entry only when AI-generated guidance or code actually fails and there is observable evidence. Do not invent failures to fill the document.

| ID | Task | Incorrect suggestion or behavior | Observed evidence | Root cause | Impact | Fix | Retest | Prevention |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| None | | | | | | | | |

## Anticipated risks, not observed failures

| Risk | Control |
| --- | --- |
| Accessing the DOM or storage inside the reducer | Review the reducer and test its pure transitions |
| Combining state and dispatch in one Context | Review AppProvider and the two Context definitions |
| Assuming Split Context prevents every component from rendering again | Make conclusions only for components and behavior actually measured |
| Reporting PASS based on the starter build | Run checks again after implementing this exercise |
| Using `class` instead of `className` in JSX | Review JSX and run lint and build |

## Update rule

For each actual failure, record its task ID, observed output or behavior, root cause, correction, and retest result. Keep the statement “No AI failures recorded” until an actual AI failure is observed.