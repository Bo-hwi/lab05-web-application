# Exercise 0.1: Pure useReducer and Split Context

## Goal and scope

Source: Lab 5 Web.pdf, page 7, Exercise 0.1.

Manage the theme and active tab with a pure reducer. Expose state and dispatch through separate React Contexts. Build a minimal interface to demonstrate and verify both behaviors.

The repository initially contained only the Vite starter. There was no legacy React 3 or React 6 implementation to refactor. The legacy defects described in the assignment were requirements for the new implementation, not defects previously observed in this repository.

Out of scope: pagination, reels, backend APIs, Firebase, WebSockets, WebMCP, and Sprint 1.

## Requirements and acceptance criteria

| ID | Assignment requirement | Acceptance criterion | Verification method |
| --- | --- | --- | --- |
| AC-01 | Pure `appReducer(state, action)` | Identical inputs produce identical outputs; the input state is not mutated; the reducer does not access the DOM, network, or storage | Reducer unit tests and code review |
| AC-02 | Initial state | The initial theme is `dark` and the initial active tab is `reels` | Unit test and browser inspection |
| AC-03 | Split Context | `AppStateContext` and `AppDispatchContext` are separate; `AppProvider` uses `useReducer` and provides both values | Code review, lint, build, and browser inspection |
| AC-04 | Correct theme toggle | One activation changes `dark` to `light`; the next changes it back to `dark` | Unit test and manual browser check |
| AC-05 | Active tab | A tab action updates the state and the selected tab is displayed correctly | Unit test and manual browser check |
| AC-06 | Valid JSX | JSX written for this exercise uses `className`, not `class` | Code review, lint, and build |
| AC-07 | State lifecycle | The reducer contains no side effects; any required effects are outside the reducer with appropriate dependencies | Code review and lint |
| AC-08 | Usable controls | Controls have clear accessible names and work with mouse and keyboard | Manual browser check |

Split Context prevents a dispatch-only consumer from receiving State Context updates. It does not, by itself, guarantee that every state consumer avoids rendering when another state field changes.

## Tasks

| ID | Task | Dependencies | Status | Evidence |
| --- | --- | --- | --- | --- |
| T0 | Confirm the branch and scope; create the three documentation files | None | DONE | Documentation commit `f741da2` pushed; files reviewed |
| T1 | Write reducer tests and record RED only if actually observed | T0 | DONE | Missing-module RED observed; five tests later passed |
| T2 | Implement the pure reducer and initial state | T1 | DONE | Five tests passed; code reviewed; commit `d0a6663` pushed |
| T3 | Add the two Contexts and AppProvider | T2 | DONE | Files reviewed; test, lint, and build exited 0; commit `6a776ca` pushed |
| T4 | Connect the theme and tab controls to application state | T3 | DONE | Code reviewed; two browser states shown; student reported mouse, keyboard, and responsive checks passed; commit `86f40aa` pushed |
| T5 | Run final checks, update documentation, and push the exercise branch | T4 | DONE | Final test, lint, and build exited 0; staged UI diff reviewed; UI commit `86f40aa` matched the remote; final documentation recorded in this commit |

## Commit record

Exercise 0.1 required five meaningful commits. Approximately fifteen commits would have required artificial changes for this scope.

1. `f741da2` `docs: plan exercise 0.1 acceptance criteria and verification`
2. `d0a6663` `feat: implement and test pure app reducer`
3. `6a776ca` `feat: provide separate app state and dispatch contexts`
4. `86f40aa` `feat: connect theme and tab controls to app state`
5. `docs: record exercise 0.1 final verification and audit` (this documentation commit)

Before each implementation commit, only exercise-related files were staged and the staged file list and whitespace check were reviewed.

## Completion criteria

- AC-01 through AC-08 have evidence in VERIFICATION.md, with the source of each result identified.
- The two observed AI failures are recorded in AI_FAILURE_AUDIT.md.
- Tests, lint, and build ran on the exercise branch with exit code 0 after the final UI correction.
- The interface was checked in a browser; keyboard and narrow-width results were reported by the student.
- The final documentation commit must be pushed and its local hash compared with the remote hash before handoff.
- The exercise branch has not been merged into `main`.