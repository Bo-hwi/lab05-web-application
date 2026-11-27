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

## Exercise 0.1 verification plan

| ID | Acceptance criteria | Planned command or action | Actual result | Status |
| --- | --- | --- | --- | --- |
| V-01 | AC-01, AC-02, AC-04, AC-05 | Run reducer unit tests with the Node test runner | Not run | NOT_RUN |
| V-02 | AC-03, AC-06, AC-07 | Review code and run `npm run lint` | Not run after exercise changes | NOT_RUN |
| V-03 | AC-03, AC-06 | Run `npm run build` | Not run after exercise changes | NOT_RUN |
| V-04 | AC-02, AC-04, AC-05 | Open the page and test theme and tab changes | Not checked | NOT_RUN |
| V-05 | AC-08 | Test controls using Tab, Enter, and Space | Not checked | NOT_RUN |
| V-06 | Git completion | Review staged diff, push, and compare local and remote commit hashes | Not performed for the exercise branch | NOT_RUN |

### RED and GREEN log

- RED: No RED evidence has been observed. Record RED only after a test actually fails for the intended missing behavior.
- GREEN: No GREEN evidence has been observed for Exercise 0.1.
- For each test run, record the exact command, passing and failing counts, exit code, and relevant error details.

## Current limitations

Exercise 0.1 has not been implemented. Reducer purity, theme behavior, tab behavior, keyboard interaction, and exercise-specific lint and build results remain unverified. A successful starter build does not establish that these requirements work.