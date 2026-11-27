# Verification: Exercise 0.1

## Environment

| Item | Value or source | Evidence status |
| --- | --- | --- |
| Operating system | Windows and PowerShell, based on the student's terminal output | Observed |
| Node.js | v26.12.1, based on the student's output | Observed |
| npm | Version not recorded | Not verified |
| React | `^19.3.1` declared in package.json | Installed version not verified |
| Vite | v8.4.0 in build and dev-server output | Observed |
| Base commit | `0edb6688a4cd711a6150a01790ff981ce66ad1ad` | Local and origin/main matched |
| Exercise branch | `exercise/0-1` | Observed |

## Starter verification before Exercise 0.1

| ID | Command or action | Evidence provided | Status | Scope |
| --- | --- | --- | --- | --- |
| BASE-01 | `npm run lint` | Student reported exit code 0 | PASS | Vite starter before exercise changes |
| BASE-02 | `npm run build` | Vite v8.4.0 transformed 20 modules; exit code 0 | PASS | Starter build before exercise changes |
| BASE-03 | `npm run dev` and open the page | Screenshot shows the Vite and React starter page | PASS | Starter rendering only |
| BASE-04 | `git check-ignore -v .env .env.production node_modules/` | All three paths matched ignore rules | PASS | Git configuration before the exercise |

The BASE results do not verify Exercise 0.1.

## Exercise 0.1 verification

| ID | Acceptance criteria | Command or action | Actual result | Status |
| --- | --- | --- | --- | --- |
| V-01 | AC-01, AC-02, reducer portions of AC-04 and AC-05 | `node --test tests/appReducer.test.js` | Five tests passed at the reducer milestone; final run after the UI fix exited 0, but its test count was not included in the shared excerpt | PASS |
| V-02 | AC-03 and provider portion of AC-07 | Review Context and provider code; run `npm run lint` | Separate Contexts and `useReducer` provider observed; provider lint exit 0 | PASS |
| V-03 | AC-03 and provider JSX portion of AC-06 | `npm run build` after provider integration | Vite v8.4.0 transformed 23 modules; build exit 0 | PASS |
| V-04 | AC-02, AC-04, AC-05 | Browser checks for theme and sections | Screenshots show light/Reels/Off and dark/Evidence/On; student reported reverse transitions passed | PASS |
| V-05 | AC-08 | Tab, Enter, Space, and narrow-width checks | Student reported all passed; no separate keyboard or mobile capture provided | PASS |
| V-06 | Git completion for UI | Inspect staged files and whitespace; push; compare hashes | Six UI and documentation files staged; `git diff --cached --check` produced no errors; local and remote matched at `86f40aa3f16393af7b7118504988135d67b5b9e8` | PASS |
| V-07 | AC-06 and UI portion of AC-07 | Review final JSX; rerun lint and build after AI-02 fix | JSX reviewed; lint exited 0; Vite v8.4.0 transformed 20 modules and build exited 0 | PASS |
| V-08 | Final documentation synchronization | Push this documentation commit; compare local and remote hashes | To be checked after this commit is pushed | NOT_RUN |

### RED and GREEN log

- RED: `node --test tests/appReducer.test.js` failed with exit code 1 while `src/context/appReducer.js` did not exist. One test file failed before its assertions could run. This is missing-module RED evidence, not a behavioral assertion failure.
- GREEN: After adding `src/context/appReducer.js`, the same command reported five tests passed, zero failed, exit code 0.
- Provider milestone: The reducer test and lint exited 0. Vite transformed 23 modules and build exited 0.
- Initial UI milestone: The reducer test and lint exited 0. Vite transformed 20 modules and build exited 0. These outputs precede the AI-02 label correction.
- After AI-02 correction: The reducer test exited 0; lint exited 0; Vite transformed 20 modules and build exited 0. The final test count was not present in the shared output.

## Code review and manual observations

The reducer returns new objects for known actions and the original state for unknown actions. It contains no observed DOM, network, or storage calls. A test freezes its inputs and checks deterministic output.

`AppContexts.js` defines separate state and dispatch contexts. `AppProvider.jsx` provides both values, and `main.jsx` wraps `App`.

The final `ThemeToggle` keeps the button label `Dark theme` stable while `aria-pressed` changes. The visible On/Off status is a separate `aria-hidden` element. The Reels and Evidence buttons have stable labels and `aria-pressed` states. Screenshots demonstrate two combinations of theme and active section. Keyboard and narrow-width results are based on the student's report.

## Limitations

No assistive-technology or React DevTools Profiler measurement was performed; neither result is claimed. The final test run's count was not included in the shared excerpt. Final documentation synchronization is checked separately after its push.