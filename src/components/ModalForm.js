import { useState } from 'react';
import messageService from '../services/messageService';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ModalForm = ({ message, messages, handleShowModalForm, showModalForm, setMessages, onResend }) => {
  console.log("from modal:", message)
  const [body, setBody] = useState(message.Message);
  const [attributes, setAttributes] = useState(message.Attributes);

  // const handleShow = () => {
  //   handleShowModalForm();
  //   console.log("modal show state:", showModalForm);
  //   return true;
  // }

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
  
  const handleAttributesChange = (e) => {
    setAttributes(e.target.value);
  };

  const handleUpdateAndSave = async (e) => {
    e.preventDefault();

    const updatedMessage = {
      id: message.id,
      Message: body,
      Attributes: JSON.parse(attributes),
    }

    await messageService.updateMessage(message.id, updatedMessage);
    const updatedMessages = messages.map(msg => {
      if (msg.id === message.id) {
        updatedMessage["Attributes"] = JSON.stringify(updatedMessage["Attributes"]);
        return updatedMessage;
      } else {
        return msg;
      }
    })

    setMessages(updatedMessages);

    clearFields();
    handleShowModalForm();
  }

  const handleUpdateAndResend = async (e) => {
    e.preventDefault();

    const updatedMessage = {
      id: message.id,
      Message: body,
      Attributes: JSON.parse(attributes),
    }

    await messageService.updateMessage(message.id, updatedMessage);
    
    updatedMessage["Attributes"] = JSON.stringify(updatedMessage["Attributes"]);

    onResend(updatedMessage);
    handleShowModalForm();
  }

  const clearFields = () => {
    setBody('');
    setAttributes('');
  }

  return (
    <>
      <Modal show={showModalForm} onHide={handleShowModalForm}>
        <Modal.Header closeButton>
          <Modal.Title>Message details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="id"
            >
              <Form.Label>Message ID</Form.Label>
              <div>
                <Form.Text>{message.id}</Form.Text>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="body"
            >
              <Form.Label>Message Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={body}
                onChange={handleBodyChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="attributes"
            >
              <Form.Label>Message Attributes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={attributes}
                onChange={handleAttributesChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdateAndSave}>
            Update and save
          </Button>
          <Button variant="primary" onClick={handleUpdateAndResend}>
            Update and redrive
          </Button>
          <Button variant="secondary" onClick={handleShowModalForm}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;