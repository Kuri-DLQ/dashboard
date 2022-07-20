// import {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import ModalForm from './ModalForm'

const View = ({ message, messages, handleShowModalForm, showModalForm, setMessages, onResend, setShowModalForm }) => {
  console.log(message.id)
  // const [selectedMessage, setSelectedMessage] = useState(message)

  // const handleShowModal = (id) => {
  //   const clickedMessage = messages.find(msg => msg.id === id)
  //   console.log("from view", clickedMessage)
  //   setShowModalForm(true);
  //   setSelectedMessage(clickedMessage);
  // }

  return (
    <div>
    <Dropdown.Item onClick={handleShowModalForm}>View details</Dropdown.Item>
      {showModalForm && (<ModalForm
        message={message}
        messages={messages}
        setMessages={setMessages}
        onResend={onResend}
        handleShowModalForm={handleShowModalForm}
        showModalForm={showModalForm} />)}
    </div>
  )
}

export default View