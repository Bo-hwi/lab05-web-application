import test from 'node:test'
import assert from 'node:assert/strict'
import { appReducer, initialState } from '../src/context/appReducer.js'

test('initial state starts with dark theme and reels tab', () => {
  assert.deepEqual(initialState, {
    theme: 'dark',
    activeTab: 'reels',
  })
})

test('TOGGLE_THEME switches dark to light and back to dark', () => {
  const lightState = appReducer(initialState, { type: 'TOGGLE_THEME' })
  const darkState = appReducer(lightState, { type: 'TOGGLE_THEME' })

  assert.equal(lightState.theme, 'light')
  assert.equal(darkState.theme, 'dark')
  assert.equal(lightState.activeTab, 'reels')
  assert.equal(darkState.activeTab, 'reels')
})

test('SET_ACTIVE_TAB changes only the active tab', () => {
  const nextState = appReducer(initialState, {
    type: 'SET_ACTIVE_TAB',
    payload: 'evidence',
  })

  assert.deepEqual(nextState, {
    theme: 'dark',
    activeTab: 'evidence',
  })
  assert.deepEqual(initialState, {
    theme: 'dark',
    activeTab: 'reels',
  })
})

test('unknown actions preserve the current state', () => {
  const state = { theme: 'light', activeTab: 'evidence' }
  const nextState = appReducer(state, { type: 'UNKNOWN_ACTION' })

  assert.strictEqual(nextState, state)
})

test('known actions are deterministic and do not mutate their inputs', () => {
  const state = Object.freeze({ theme: 'dark', activeTab: 'reels' })
  const action = Object.freeze({ type: 'TOGGLE_THEME' })

  const firstResult = appReducer(state, action)
  const secondResult = appReducer(state, action)

  assert.deepEqual(firstResult, secondResult)
  assert.notStrictEqual(firstResult, state)
  assert.deepEqual(state, { theme: 'dark', activeTab: 'reels' })
  assert.deepEqual(action, { type: 'TOGGLE_THEME' })
})