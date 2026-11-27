import { useContext } from 'react'
import { AppDispatchContext, AppStateContext } from './context/AppContexts.js'
import './App.css'

function ThemeToggle() {
  const { theme } = useContext(AppStateContext)
  const dispatch = useContext(AppDispatchContext)

  return (
    <div className="theme-setting">
      <button
        type="button"
        className="control theme-toggle"
        aria-pressed={theme === 'dark'}
        onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
      >
        Dark theme
      </button>
      <span className="theme-status" aria-hidden="true">
        {theme === 'dark' ? 'On' : 'Off'}
      </span>
    </div>
  )
}

function SectionControls() {
  const { activeTab } = useContext(AppStateContext)
  const dispatch = useContext(AppDispatchContext)

  return (
    <div className="section-controls" role="group" aria-label="Archive sections">
      <button
        type="button"
        className="control"
        aria-pressed={activeTab === 'reels'}
        onClick={() => dispatch({ type: 'SET_ACTIVE_TAB', payload: 'reels' })}
      >
        Reels
      </button>
      <button
        type="button"
        className="control"
        aria-pressed={activeTab === 'evidence'}
        onClick={() => dispatch({ type: 'SET_ACTIVE_TAB', payload: 'evidence' })}
      >
        Evidence
      </button>
    </div>
  )
}

function ActiveSection() {
  const { activeTab } = useContext(AppStateContext)

  const section = activeTab === 'reels'
    ? {
        title: 'Reels',
        description: 'Short-video evidence will be presented here in a later exercise.',
      }
    : {
        title: 'Evidence',
        description: 'The evidence archive will be expanded in a later exercise.',
      }

  return (
    <section className="section-panel" aria-live="polite" aria-labelledby="section-title">
      <h2 id="section-title">{section.title}</h2>
      <p>{section.description}</p>
    </section>
  )
}

function App() {
  const { theme } = useContext(AppStateContext)

  return (
    <div className="app-shell" data-theme={theme}>
      <main className="app-content">
        <header className="app-header">
          <div>
            <p className="eyebrow">UIT Lab 5 | Exercise 0.1</p>
            <h1>Evidence Archive</h1>
            <p className="intro">
              A small interface demonstrating pure reducer state and separate contexts.
            </p>
          </div>
          <ThemeToggle />
        </header>

        <SectionControls />
        <ActiveSection />
      </main>
    </div>
  )
}

export default App