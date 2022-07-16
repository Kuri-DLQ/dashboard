import Message from './EditableMessage'

const Table = ({messages, setMessages, onDelete, onDeleteAll, onResend, onResendAll}) => {
  return (
    <>
      <ul>
        {messages.map(message => {
          return <Message
            key={message.id}
            messages={messages}
            message={message}
            setMessages={setMessages}
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