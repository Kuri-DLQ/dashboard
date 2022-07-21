// import {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
// import ModalForm from './ModalForm'
import View from './View'
import Delete from './Delete'
import Redrive from './Redrive'

const Actions = ({ message, messages, handleShowModalForm, showModalForm, setMessages, onResend, onDelete, setShowModalForm }) => {
  // const [selectedMessage, setSelectedMessage] = useState(message)

  // const handleShowModal = (id) => {
  //   const clickedMessage = messages.find(msg => msg.id === id)
  //   console.log("from row", clickedMessage)
  //   handleShowModalForm();
  //   setSelectedMessage(clickedMessage);
  // }

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">Actions
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <View
          message={message}
          messages={messages}
          setMessages={setMessages}
          onDelete={onDelete}
          onResend={onResend}
          showModalForm={showModalForm}
          setShowModalForm={setShowModalForm}
          handleShowModalForm={handleShowModalForm} />
          {/* <Dropdown.Item onClick={() => handleShowModal(message.id)}>View details</Dropdown.Item> */}
          <Delete
            message={message}
            onDelete={onDelete} />
              {/* <Dropdown.Item onClick={() => onDelete(message.id)}>Delete</Dropdown.Item> */ }
              < Redrive
              message={message}
              onResend={onResend} />
          {/* <Dropdown.Item onClick={() => onResend(message)}>Redrive</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
      {/* {showModalForm && (<ModalForm
        message={selectedMessage}
        messages={messages}
        setMessages={setMessages}
        onResend={onResend}
        handleShowModalForm={handleShowModalForm}
        showModalForm={showModalForm} />)} */}
    </div>
  )
}

export default Actions;