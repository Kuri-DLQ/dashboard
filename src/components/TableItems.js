// import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// import ModalForm from './ModalForm';
// import EditableMessage from './EditableMessage';
import Row from './Row';

const TableItems = ({ messages, setMessages, onDelete, onDeleteAll, onResend, onResendAll }) => {
  // const [showModalForm, setShowModalForm] = useState(false);

  // const handleShowModalForm = () => {
  //   console.log("from show modal handler before:", showModalForm)
  //   setShowModalForm(!showModalForm);
  //   console.log("from show modal handler after:", showModalForm)
  // }

  return (
    <div className="message-table">
    <Table className="message-items" >
      <thead>
          <tr className='header-row'>
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
              // handleShowModalForm={handleShowModalForm}
              // showModalForm={showModalForm}
              // setShowModalForm={setShowModalForm}
            />
          })}
      </tbody>
      </Table>
      <div>
        <Button variant="primary" onClick={onDeleteAll}>Delete All</Button>
        <Button variant="primary" onClick={onResendAll}>Redrive All</Button>
      </div>
    </div>
  )
}

export default TableItems;