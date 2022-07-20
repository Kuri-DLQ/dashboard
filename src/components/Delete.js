import Dropdown from 'react-bootstrap/Dropdown'

const Delete = ({ message, onDelete }) => {
  return (
    <Dropdown.Item onClick={() => onDelete(message.id)}>Delete</Dropdown.Item>
  )
}

export default Delete