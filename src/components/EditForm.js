import { useState } from "react";
import messageService from "../services/messageService";

const EditForm = ({ message, messages, setMessages, setShowMessage, showMessage, onResend }) => {
  const [body, setBody] = useState(message.Message);
  const [attributes, setAttributes] = useState(message.Attributes);

  const handleShowMessage = () => {
    setShowMessage(!showMessage);
  };
    
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
    handleShowMessage();
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
  }

  const clearFields = () => {
    setBody('');
    setAttributes('');
  }

  return (
    <>
      <form>
        <div>
          <label>Message Id</label><p>{message.id}</p>
        </div>
        <div>
          <label>Message Body</label>
          <textarea
            type="text"
            id="message-body"
            onChange={handleBodyChange}
            value={body}
          ></textarea>
        </div>
        <div>
          <label>Message Attributes</label>
          <textarea
            type="text"
            id="message-attributes"
            onChange={handleAttributesChange}
            value={attributes}
          ></textarea>
        </div>
        <div>
          <button onClick={handleUpdateAndSave}>Update and Save</button>
          <button onClick={handleUpdateAndResend}>Update and Resend</button>
          <button onClick={handleShowMessage}>Cancel</button>
        </div>
      </form>
    </>
  )
}

export default EditForm;