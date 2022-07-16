const Message = ({ message, handleShowMessage, onDelete, onResend}) => {
  return (
    <>
      <li>{message.Message}</li>
      <button onClick={handleShowMessage}>View</button>
      <button onClick={onDelete(message.id)}>Delete</button>
      <button onClick={onResend(message.id)}>Resend</button>
    </>
  )
}

export default Message