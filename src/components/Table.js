import EditableMessage from './EditableMessage';

const Table = ({messages, setMessages, onDelete, onDeleteAll, onResend, onResendAll}) => {
  return (
    <>
      <ul>
        {messages.map(message => {
          return <EditableMessage
            key={message.id}
            message={message}
            messages={messages}
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