import { EvidenceGrid } from './components/EvidenceGrid.jsx'
import { sampleClips } from './data/clips.js'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">UIT Lab 5 | Exercise 0.2</p>
        <h1>Evidence Archive</h1>
        <p className="intro">
          Browse match footage, handcam recordings, and telemetry evidence.
        </p>
      </header>

      <EvidenceGrid clips={sampleClips} />
    </main>
  )
}

export default App