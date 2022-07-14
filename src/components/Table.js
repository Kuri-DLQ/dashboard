const Table = ({messages}) => {
  return (
    <>
      <ul>
        {messages.map(message => {
          return <li key={message.id}>{message.Message}</li>
        })}
      </ul>
    </>
  )
}

export default Table;