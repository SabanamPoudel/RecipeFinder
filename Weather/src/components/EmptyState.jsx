export default function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">🌍</div>
      <h2 className="empty-state-title">No City Selected</h2>
      <p className="empty-state-message">
        Search for a city to see current weather information
      </p>
    </div>
  )
}
