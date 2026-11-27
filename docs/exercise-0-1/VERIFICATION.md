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
| Documentation commit | `f741da24a3f134bf090855b1351d77ab96ecd6e4` | Local and remote matched |
| Reducer commit | `d0a666338d780ffda8c07140ccf65255bf6ab828` | Local and remote matched |

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
| V-01 | AC-01, AC-02, reducer portions of AC-04 and AC-05 | `node --test tests/appReducer.test.js` | Five tests passed at reducer milestone; latest run after provider integration exited 0, but its test count was not included in the shared excerpt | PASS |
| V-02 | AC-03 and provider portion of AC-07 | Review `AppContexts.js`, `AppProvider.jsx`, and `main.jsx`; run `npm run lint` | Two separate Contexts and `useReducer` provider observed; lint exit code 0 | PASS |
| V-03 | AC-03 and provider JSX portion of AC-06 | `npm run build` after provider integration | Vite v8.4.0 transformed 23 modules; build exit code 0 | PASS |
| V-04 | AC-02, AC-04, AC-05 | Open the page and test theme and tab changes | Controls not implemented yet | NOT_RUN |
| V-05 | AC-08 | Test controls using Tab, Enter, and Space | Controls not implemented yet | NOT_RUN |
| V-06 | Git completion | Review staged diff, push, and compare local and remote commit hashes | Not performed for the provider milestone | NOT_RUN |
| V-07 | AC-06 and UI portion of AC-07 | Review final JSX and run lint and build after UI integration | UI not implemented yet | NOT_RUN |

### RED and GREEN log

- RED: `node --test tests/appReducer.test.js` failed with exit code 1 while `src/context/appReducer.js` did not exist. One test file failed before its five assertions could run. This is missing-module RED evidence, not a behavioral assertion failure.
- GREEN: After adding `src/context/appReducer.js`, the same command reported five tests passed, zero failed, exit code 0.
- Provider milestone: The latest reducer test run exited 0; lint exited 0; build exited 0. These results verify the current code only, not the future theme and tab interface.

## Code review notes

The reducer returns new objects for known actions and the original state for an unknown action. It contains no observed DOM, network, or storage calls. The test freezes its inputs for one transition and checks deterministic output.

`AppContexts.js` defines separate state and dispatch contexts. `AppProvider.jsx` passes the reducer state and dispatch through those providers. `main.jsx` wraps `App` with `AppProvider`. Build success confirms the imported modules compile; browser behavior remains to be checked.

## Current limitations

Theme behavior in the browser, tab interaction, keyboard interaction, and final UI lint and build remain unverified. The provider milestone has not yet been committed and pushed.