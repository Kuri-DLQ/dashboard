import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import Row from './Row';

const TableItems = ({ messages, setMessages, currentMessages,onDelete, onResend}) => {
  return (
    <div className="message-table">
    <Table className="table-items">
      <thead>
          <tr className='header-row'>
            <th>Message ID</th>
            <th>Message Timestamp</th>
            <th>Message Body</th>
            <th>Action</th>
        </tr>
      </thead>
        <tbody>
          {currentMessages.map(message => {
            return <Row
              key={message.id}
              message={message}
              messages={messages}
              setMessages={setMessages}
              onDelete={onDelete}
              onResend={onResend} />
          })}
      </tbody>
      </Table>
    </div>
  )
}

export default TableItems;