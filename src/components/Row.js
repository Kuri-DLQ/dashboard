// import { useState } from 'react'
// import Dropdown from 'react-bootstrap/Dropdown'
// import ModalForm from './ModalForm'
import Actions from './Actions'

const Row = ({ message, messages, setMessages, onDelete, onResend, showModalForm, setShowModalForm, handleShowModalForm }) => {
  // const [selectedMessage, setSelectedMessage] = useState(message)
  // const [count, setCount] = useState(0)
  
  // const handleShowModal = (id) => {
  //   const clickedMessage = messages.find(msg => msg.id === id)
  //   console.log("from row", clickedMessage)
  //   setShowModalForm(true);
  //   setSelectedMessage(clickedMessage);
  //   setCount(1)
  // }
  // if (showModalForm) {
    // console.log(message.id)
  //   return  <ModalForm
  //             message={message}
  //             messages={messages}
  //             setMessages={setMessages}
  //             onResend={onResend}
  //             handleShowModalForm={handleShowModalForm}
  //             showModalForm={showModalForm}/>
  // }
  return (
    <tr>
      <td>{message.id}</td>
      <td>{message.Message}</td>
      <td>
        <Actions
          message={message}
          messages={messages}
          setMessages={setMessages}
          onDelete={onDelete}
          onResend={onResend}
          showModalForm={showModalForm}
          setShowModalForm={setShowModalForm}
          handleShowModalForm={handleShowModalForm} />
        
      </td>
    </tr>
  )
}

export default Row;