const Notification = ({ message, isError }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={isError ? "error" : "notifications"}>
      {message}
    </div>
  )
}

export default Notification;