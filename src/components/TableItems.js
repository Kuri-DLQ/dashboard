import { useState } from 'react';
import Table from 'react-bootstrap/Table';
// import ModalForm from './ModalForm';
// import EditableMessage from './EditableMessage';
import Row from './Row';

const TableItems = ({ messages, setMessages, onDelete, onDeleteAll, onResend, onResendAll }) => {
  const [showModalForm, setShowModalForm] = useState(false);

  const handleShowModalForm = () => {
    setShowModalForm(!showModalForm);
  }

  return (
    <div className="message-table">
    <Table bordered hover>
      <thead>
          <tr>
            <th>Message ID</th>
            <th>Message</th>
            <th>Action</th>
        </tr>
      </thead>
        <tbody>
          {messages.map(message => {
            console.log("from map:", message)
            return <Row
              key={message.id}
              message={message}
              messages={messages}
              setMessages={setMessages}
              onDelete={onDelete}
              onResend={onResend}
              handleShowModalForm={handleShowModalForm}
              showModalForm={showModalForm}
              setShowModalForm={setShowModalForm} />
          })}
      </tbody>
      </Table>
      <div>
        <button onClick={onDeleteAll}>Delete All</button>
        <button onClick={onResendAll}>Redrive All</button>
      </div>
    </div>
  )
}

export default TableItems;