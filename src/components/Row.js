import Dropdown from 'react-bootstrap/Dropdown'

const Row = ({ messages, message, setMessages, onDelete, onResend, handleShowModalForm }) => {

  
  return (
    <tr>
      <td>{message.id}</td>
      <td>{message.Message}</td>
      <td>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">Actions</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleShowModalForm}>View details</Dropdown.Item>
            <Dropdown.Item onClick={() => onDelete(message.id)}>Delete</Dropdown.Item>
            <Dropdown.Item onClick={() => onResend(message)}>Resend</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  )
}

export default Row;