import Table from 'react-bootstrap/Table';
import Row from './Row';

const TableItems = ({ messages, setMessages, currentMessages, ascending, onDelete, onResend, onSort, setSortFactor, setAscending}) => {
  const handleSetArrow = (e) => {
    e.preventDefault();
    e.target.classList.toggle('down')
  }
  
  return (
    <div className='message-table'>
    <Table className='table-items'>
      <thead>
          <tr className='header-row'>
            <th>
              Message ID
            </th>
            <th>
              Message Timestamp
              <i className='arrow up' onClick={(e) => {
                handleSetArrow(e);
                setSortFactor('Timestamp');
                setAscending(!ascending);
                setMessages(onSort(messages));
                }
              }></i>
            </th>
            <th>
              Message Body
              <i className='arrow up' onClick={(e) => {
                handleSetArrow(e);
                setSortFactor('Message');
                setAscending(!ascending);
                setMessages(onSort(messages));
                }
              }></i>
            </th>
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