# AI Failure Audit: Exercise 0.2

## Observed AI failures

No AI failures recorded.

Add an entry only when AI-generated guidance or code actually fails and there is observable evidence. Do not invent failures to fill this document.

| ID | Task | Incorrect suggestion or behavior | Observed evidence | Root cause | Impact | Fix | Retest | Prevention |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| None | | | | | | | | |

## Anticipated risks, not observed failures

| Risk | Control |
| --- | --- |
| Storing `visibleItems` in state and synchronizing it with an effect | Derive the slice directly during render |
| Using the array index as a React key | Use each clip's stable `_id` |
| Disabling controls incorrectly at pagination boundaries | Check first, middle, and last pages manually |
| Using viewport media queries where the component needs container-based adaptation | Review the named container and `@container` rule |
| Making controls too small for touch | Verify minimum 44 by 44 CSS pixel dimensions |

## Update rule

Record an AI failure only after observing it. Include the task ID, evidence, cause, impact, correction, and retest result.