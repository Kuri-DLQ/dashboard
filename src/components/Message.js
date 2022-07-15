const Message = ({messageId, messageBody, onDelete}) => {
  return (
    <>
      <li>{messageBody}</li>
      <button onClick={onDelete(messageId)}>Delete message</button>
    </>
  )
}

export default Message;