// import {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
// import ModalForm from './ModalForm'
import View from './View'
import Delete from './Delete'
import Redrive from './Redrive'

const Actions = ({ message, messages, setMessages, onResend, onDelete }) => {
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
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg> */}
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {/* <svg variant="primary" id="dropdown-basic" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg> */}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <View
          message={message}
          messages={messages}
          setMessages={setMessages}
          onDelete={onDelete}
          onResend={onResend} />
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