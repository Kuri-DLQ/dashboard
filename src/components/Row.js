import Dropdown from 'react-bootstrap/Dropdown'
// import ModalForm from './ModalForm'

const Row = ({ message, messages, setMessages, onDelete, onResend, showModalForm, handleShowModalForm }) => {
  console.log(message.id)
  
  // if (showModalForm) {
  //   console.log(message.id)
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
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">Actions
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={handleShowModalForm}>View details</Dropdown.Item>
            <Dropdown.Item onClick={() => onDelete(message.id)}>Delete</Dropdown.Item>
            <Dropdown.Item onClick={() => onResend(message)}>Redrive</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  )
}

export default Row;