import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import Row from './Row';

const TableItems = ({ messages, setMessages, onDelete, onDeleteAll, onResend, onResendAll }) => {
  return (
    <div className="message-table">
    <Table className="table-items">
      <thead>
          <tr className='header-row'>
            <th>Message ID</th>
            <th>Message Body</th>
            <th>Action</th>
        </tr>
      </thead>
        <tbody>
          {messages.map(message => {
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
      {/* <div>
        <Button variant="primary" onClick={onDeleteAll}>Delete All</Button>
        <Button variant="primary" onClick={onResendAll}>Redrive All</Button>
      </div> */}
    </div>
  )
}

export default TableItems;