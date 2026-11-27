# Verification: Exercise 1.1

## Environment

| Item | Value or source | Evidence status |
| --- | --- | --- |
| Operating system | Windows and PowerShell, based on student terminal output | Observed |
| Node.js | v26.12.1, based on previous terminal output | Observed |
| npm | Version not recorded | Not verified |
| React | `^19.3.1` declared in package.json | Installed version not verified |
| Vite | v8.4.0 observed in previous build output | Observed |
| Base commit | `0edb668` Vite starter on `main` | Branch created from this commit |
| Exercise branch | `exercise/1-1` | Observed |

## Verification matrix

| ID | Acceptance criteria | Command or action | Actual result | Status |
| --- | --- | --- | --- | --- |
| V-01 | AC-01, AC-02 | Review viewport and video CSS; inspect at desktop and narrow width | Not checked | NOT_RUN |
| V-02 | AC-03, AC-04 | Scroll between reels and observe play/pause behavior | Not checked | NOT_RUN |
| V-03 | AC-05 | Review observer cleanup and unsupported-browser handling | Not checked | NOT_RUN |
| V-04 | AC-06, AC-08 | Review package manifest and marquee CSS | Not checked | NOT_RUN |
| V-05 | AC-07, AC-09 | Operate controls by keyboard and inspect narrow layout | Not checked | NOT_RUN |
| V-06 | Lint | Run `npm run lint` after implementation | Not run | NOT_RUN |
| V-07 | Build | Run `npm run build` after implementation | Not run | NOT_RUN |
| V-08 | Git completion | Review staged diff, push branch, compare local and remote hashes | Not performed | NOT_RUN |

## Test-driven development record

- RED: No RED evidence yet.
- GREEN: No GREEN evidence yet.
- Record only test runs that actually occurred. Lint and build do not prove video playback behavior.

## Current limitations

Exercise 1.1 has not been implemented. Video playback, observer behavior, keyboard operation, and responsive behavior remain unverified.