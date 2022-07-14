import Message from './Message'

const Table = ({messages}) => {
  return (
    <>
      <ul>
        {messages.map(message => {
          return <Message key={message.id} messageBody={message.Message} />
        })}
      </ul>
    </>
  )
}

export default Table;