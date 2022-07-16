import Message from './Message'

const Table = ({messages, onDelete, onDeleteAll, onResend, onResendAll, onView}) => {
  return (
    <>
      <ul>
        {messages.map(message => {
          return <Message
            key={message.id}
            message={message}
            onDelete={onDelete}
            onResend={onResend}
            onView={onView} />
        })}
      </ul>
      <button onClick={onDeleteAll}>Delete All</button>
      <button onClick={onResendAll}>Resend All</button>
    </>
  )
}

export default Table;