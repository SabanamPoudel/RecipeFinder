function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <span className="error-icon">⚠️</span>
      <div>
        <h3>Oops! Something went wrong</h3>
        <p>{message || 'We encountered an error while searching for recipes. Please try again.'}</p>
      </div>
    </div>
  )
}

export default ErrorMessage
