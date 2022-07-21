import {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import ModalForm from './ModalForm'

const View = ({ message, messages, setMessages, onResend }) => {
  console.log(message.id)
  const [selectedMessage, setSelectedMessage] = useState([message])
  const [showModalForm, setShowModalForm] = useState(false);

  const handleShowModalForm = () => {
    console.log("from show modal handler before:", showModalForm)
    setShowModalForm(!showModalForm);
    console.log("from show modal handler after:", showModalForm)
  }

  const handleShowModal = (id) => {
    const clickedMessage = messages.find(msg => msg.id === id)
    console.log("from view", clickedMessage)
    handleShowModalForm();
    setSelectedMessage(clickedMessage);
  }

  return (
    <div>
    <Dropdown.Item onClick={() => handleShowModal(message.id)}>View details</Dropdown.Item>
      {showModalForm && (<ModalForm
        selectedMessage={selectedMessage}
        setSelectedMessage={setSelectedMessage}
        messages={messages}
        setMessages={setMessages}
        onResend={onResend}
        showModalForm={showModalForm}
        handleShowModalForm={handleShowModalForm} />)}
    </div>
  )
}

export default View