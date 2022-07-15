import Message from './Message'

const Table = ({messages, onDelete, onDeleteAll, onResend, onResendAll}) => {
  return (
    <>
      <ul>
        {messages.map(message => {
          return <Message
            key={message.id}
            message={message}
            onDelete={onDelete}
            onResend={onResend} />
        })}
      </ul>
      <button onClick={onDeleteAll}>Delete All</button>
      <button onClick={onResendAll}>Resend All</button>
    </>
  )
}

export default Table;