import { useState } from 'react'

export function EvidenceGrid({ clips, pageSize = 4 }) {
  const [page, setPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(clips.length / pageSize))
  const startIndex = (page - 1) * pageSize
  const visibleItems = clips.slice(startIndex, startIndex + pageSize)

  if (clips.length === 0) {
    return <p className="empty-state">No evidence clips are available.</p>
  }

  return (
    <>
      <section className="evidence-container" aria-label="Evidence archive">
        <ul className="evidence-grid">
          {visibleItems.map((clip) => (
            <li className="evidence-card" key={clip._id}>
              <p className="evidence-category">{clip.category}</p>
              <h2>{clip.title}</h2>
              <p>Player: {clip.player}</p>
            </li>
          ))}
        </ul>
      </section>

      <nav className="pagination" aria-label="Evidence pagination">
        <button
          type="button"
          className="pagination-button"
          onClick={() => setPage((currentPage) => currentPage - 1)}
          disabled={page === 1}
        >
          Previous
        </button>

        <p className="page-status" aria-live="polite">
          Page {page} of {totalPages}
        </p>

        <button
          type="button"
          className="pagination-button"
          onClick={() => setPage((currentPage) => currentPage + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </nav>
    </>
  )
}