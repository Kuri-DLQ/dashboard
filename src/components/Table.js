import Message from './Message'

const Table = ({messages, onDelete}) => {
  return (
    <>
      <ul>
        {messages.map(message => {
          return <Message key={message.id} messageId={message.id} onDelete={onDelete} messageBody={message.Message} />
        })}
      </ul>
    </>
  )
}

export default Table;