const Message = ({message, onDelete, onResend}) => {
  return (
    <>
      <li>{message.Message}</li>
      <button onClick={onDelete(message.id)}>Delete</button>
      <button onClick={onResend(message.id)}>Resend</button>
    </>
  )
}

export default Message;