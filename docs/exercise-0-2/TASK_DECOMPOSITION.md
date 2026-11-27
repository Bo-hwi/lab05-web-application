# Exercise 0.2: Zero-Effect Pagination and Responsive Layout

## Goal and scope

Source: Lab 5 Web.pdf, page 8, Exercise 0.2.

Build an EvidenceGrid that derives pagination values during render and uses stable clip IDs as React keys. Create a responsive evidence layout using modern viewport sizing, CSS container queries, and accessible touch target sizes.

The repository starts from the Vite template and does not contain the legacy React 7 or React 8 components described in the assignment. This exercise implements the required behavior on the starter rather than claiming to refactor legacy files.

Use a small local clip dataset for this exercise. A backend API, reels playback, database, authentication, and WebMCP are out of scope.

## Requirements and acceptance criteria

| ID | Assignment requirement | Acceptance criterion | Verification method |
| --- | --- | --- | --- |
| AC-01 | Correct list initialization | Any React state that stores clips is initialized with an empty array, such as `useState([])` | Code review and lint |
| AC-02 | Derived pagination | `totalPages`, start index, and `visibleItems` are computed during render from clips, page, and page size | Code review and interaction |
| AC-03 | No redundant pagination effect | No `useEffect` stores a sliced page array or synchronizes values that can be derived during render | Code review |
| AC-04 | Stable React keys | Each rendered clip uses `key={clip._id}`; array indexes are not used as keys | Code review and browser console |
| AC-05 | Pagination behavior | Previous/Next controls show the correct items, disable at the boundaries, and display the current page and total pages | Manual browser check |
| AC-06 | Responsive viewport layout | The app uses `100dvh` where viewport height is needed and avoids a rigid 800px layout | Code review and narrow viewport check |
| AC-07 | Container query layout | The responsive grid uses a named container and an `@container` rule to adapt its columns | Code review and resize check |
| AC-08 | Touch target size | Interactive controls are at least 44 by 44 CSS pixels | CSS review and browser inspection |
| AC-09 | Usable responsive interface | Grid and pagination remain visible and operable at desktop and narrow widths | Manual browser and keyboard checks |

## Tasks

| ID | Task | Dependencies | Status | Evidence |
| --- | --- | --- | --- | --- |
| T0 | Confirm branch and create exercise documentation | None | IN_PROGRESS | Branch `exercise/0-2` from `main`; clean working tree |
| T1 | Build a local clip fixture and EvidenceGrid structure | T0 | TODO | Code review and rendered clip cards |
| T2 | Implement render-time pagination and boundary states | T1 | TODO | Code review and manual page navigation |
| T3 | Add responsive container query layout and touch targets | T1 | TODO | CSS review and desktop/narrow viewport checks |
| T4 | Run final checks, update evidence, commit, and push | T2, T3 | TODO | Test or manual results, lint, build, staged diff, and matching remote hash |

Move a task to DONE only after recording its evidence in VERIFICATION.md.

## Commit plan

This exercise is small. Plan approximately four to six meaningful commits rather than creating artificial changes to reach fifteen.

1. `docs: plan exercise 0.2 acceptance criteria and verification`
2. `feat: add evidence grid and local clip data`
3. `feat: derive pagination during render`
4. `feat: add responsive container query layout`
5. `docs: record exercise 0.2 verification and audit`

Adjust the plan to match actual changes. Stage only files for this exercise and review the staged diff before each commit.

## Completion criteria

- AC-01 through AC-09 have evidence in VERIFICATION.md.
- No pagination slice is stored redundantly through `useEffect`.
- All clip cards use stable `_id` keys.
- Pagination works at first, middle, and last pages.
- Desktop and narrow viewport layouts were checked.
- Lint and build results are recorded after implementation.
- The branch is pushed and local HEAD matches remote `exercise/0-2`.
- The exercise branch is not merged into `main`.

## Progress update

- T0: DONE. Exercise branch and initial documentation created.
- T1: DONE. Local clip fixture and EvidenceGrid rendered; student reports the clip display check passed.
- T2: DONE. Student reports pagination checks passed.
- T3: DONE. Student reports responsive layout checks passed.
- T4: IN_PROGRESS. Final verification, documentation review, commit, and push remain.