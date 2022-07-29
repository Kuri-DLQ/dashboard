import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import Row from './Row';

const TableItems = ({ messages, setMessages, currentMessages,onDelete, onResend, onSort, setSortFactor, setAscending}) => {
  return (
    <div className="message-table">
    <Table className="table-items">
      <thead>
          <tr className='header-row'>
            <th>
              Message ID
            </th>
            <th>
              Message Timestamp

              <button type="button" onClick={() => {
                  setSortFactor('Timestamp');
                  setAscending(false);
                  setMessages(onSort(messages));
                  }
                  }><i class="arrow up"></i>
              </button>
              <button type="button" onClick={() => {
                  setSortFactor('Timestamp');
                  setAscending(true);
                  setMessages(onSort(messages));
                  }
                  }><i class="arrow down"></i>
              </button>
            </th>
            <th>
              Message Body

              <button type="button" onClick={() => {
                  setSortFactor('Message');
                  setAscending(false);
                  setMessages(onSort(messages));
                  }
                  }><i class="arrow up"></i>
              </button>
              <button type="button" onClick={() => {
                  setSortFactor('Message');
                  setAscending(true);
                  setMessages(onSort(messages));
                  }
                  }><i class="arrow down"></i>
              </button>
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