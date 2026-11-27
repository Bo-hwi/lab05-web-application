# AI Failure Audit: Exercise 1.1

## Observed AI failures

No AI failures recorded.

Add an entry only when AI-generated guidance or code actually fails and there is observable evidence. Do not invent failures to fill this document.

| ID | Task | Incorrect suggestion or behavior | Observed evidence | Root cause | Impact | Fix | Retest | Prevention |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| None | | | | | | | | |

## Anticipated risks, not observed failures

| Risk | Control |
| --- | --- |
| Calling `play()` without handling its rejected promise | Catch the returned promise and record browser behavior |
| Leaving a video playing after it scrolls out of view | Pause it when it no longer meets the observer threshold |
| Forgetting observer cleanup | Disconnect the observer in the effect cleanup |
| Adding deprecated ticker or MUI packages | Use CSS keyframes and native HTML controls |
| Making controls inaccessible by keyboard | Use native buttons and verify keyboard operation |

## Update rule

Record an AI failure only after observing it. Include the task ID, evidence, cause, impact, correction, and retest result.