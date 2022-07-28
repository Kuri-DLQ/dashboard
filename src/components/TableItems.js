import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import Row from './Row';

const TableItems = ({ messages, setMessages, currentMessages,onDelete, onResend, onSort, setSortFactor}) => {
  return (
    <div className="message-table">
    <Table className="table-items">
      <thead>
          <tr className='header-row'>
            <th>Message ID</th>
            <th>
            <button type="button" onClick={() => {
                setSortFactor('Timestamp');
                setMessages(onSort(messages));
                }
                }>
              Message Timestamp
              </button>
            </th>
            <th>
              <button type="button" onClick={() => {
                  setSortFactor('Message');
                  setMessages(onSort(messages));
                  }
                  }>
                Message Body
              </button>
            </th>
            <th>Action</th>
        </tr>
      </thead>
        <tbody>
          {/* {messages.map(message => { */}
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