export default function ErrorMessage({ message }) {
  return (
    <div className="error-container">
      <div className="error-message">
        <span className="error-icon">⚠️</span>
        <p>{message}</p>
      </div>
    </div>
  )
}
