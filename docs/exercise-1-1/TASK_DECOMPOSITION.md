# Exercise 1.1: 60fps Vertical Reels and IntersectionObserver

## Goal and scope

Source: Lab 5 Web.pdf, page 10, Exercise 1.1.

Build a vertical reels interface with CSS scroll snapping. Use IntersectionObserver to play the video that is mostly visible and pause videos outside the viewport. Use native CSS for any marquee and semantic, keyboard-accessible controls.

The repository starts from the Vite template and does not contain the legacy SwipeDeck or the deprecated `react-ticker` and MUI v4 dependencies. Implement the required behavior without adding those dependencies.

Use a small local reel fixture. Reel content and video assets are demonstration data. Backend APIs, Mongoose, endorsements, and real-time messaging are out of scope.

## Requirements and acceptance criteria

| ID | Assignment requirement | Acceptance criterion | Verification method |
| --- | --- | --- | --- |
| AC-01 | Viewport reel layout | The reel viewport uses `100dvh` and vertical `scroll-snap-type: y mandatory` | CSS review and browser check |
| AC-02 | Video presentation | Video elements use `object-fit: cover` without distortion | CSS review and browser check |
| AC-03 | Visibility-based playback | An `IntersectionObserver` uses threshold `0.75`; a visible reel attempts playback and catches rejected `play()` promises | Code review and browser check |
| AC-04 | Offscreen pause | Reels outside the observer threshold are paused | Manual scroll check |
| AC-05 | Observer lifecycle | The observer disconnects during effect cleanup and handles missing browser support safely | Code review and browser check |
| AC-06 | Native marquee | Any ticker uses CSS keyframes, with a reduced-motion alternative; no `react-ticker` dependency is added | Dependency and CSS review |
| AC-07 | Semantic controls | Playback or mute controls are native buttons with accessible names and keyboard operation | Code review and keyboard check |
| AC-08 | Dependency scope | No MUI v4 or `react-ticker` package is added | package manifest review |
| AC-09 | Responsive and usable reels | Reel content and controls remain visible and operable at narrow widths | Manual browser check |

## Tasks

| ID | Task | Dependencies | Status | Evidence |
| --- | --- | --- | --- | --- |
| T0 | Confirm branch and create exercise documentation | None | IN_PROGRESS | Branch `exercise/1-1` from `main`; clean working tree |
| T1 | Add local reel fixture and ReelCard structure | T0 | TODO | Code review and rendered reels |
| T2 | Add vertical viewport and scroll-snap styling | T1 | TODO | CSS review and manual scrolling |
| T3 | Add IntersectionObserver playback and cleanup | T1 | TODO | Code review and play/pause browser check |
| T4 | Add accessible controls and optional native marquee | T2, T3 | TODO | Keyboard and reduced-motion checks |
| T5 | Run final checks, update evidence, commit, and push | T4 | TODO | Lint, build, browser checks, staged diff, and remote hash |

Move tasks to DONE only after recording evidence in VERIFICATION.md.

## Commit plan

This exercise has a focused frontend scope. Plan approximately four to six meaningful commits rather than creating artificial changes to reach fifteen.

1. `docs: plan exercise 1.1 acceptance criteria and verification`
2. `feat: add reel fixture and card structure`
3. `feat: add vertical scroll-snap reel viewport`
4. `feat: control reel playback with IntersectionObserver`
5. `feat: add accessible reel controls and native marquee`
6. `docs: record exercise 1.1 verification and audit`

Adjust the plan to match actual changes. Stage only exercise files and review the staged diff before each commit.

## Completion criteria

- AC-01 through AC-09 have evidence in VERIFICATION.md.
- `play()` rejection is handled and offscreen videos pause.
- Observer cleanup is implemented and reviewed.
- No deprecated ticker or MUI v4 dependency is added.
- Lint, build, keyboard, and browser results are recorded.
- The branch is pushed and local HEAD matches remote `exercise/1-1`.
- The exercise branch is not merged into `main`.