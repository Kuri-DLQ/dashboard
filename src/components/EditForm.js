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

  const handleUpdateAndSave = (e) => {
    e.preventDefault();

    const updatedMessage = {
      Message: body,
      Attributes: JSON.parse(attributes),
    }

    messageService.updateMessage(message.id, updatedMessage);
    const updatedMessages = messages.map(msg => {
      if (msg.id === message.id) {
        updatedMessage["Attributes"] = JSON.stringify(updatedMessage["Attributes"]);
        updatedMessage["id"] = message.id;
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
      Attributes: attributes,
    }

    const updatedMessages = messages.map(msg => {
      if (msg.id === message.id) {
        console.log(msg);
        return updatedMessage;
      } else {
        return msg;
      }
    });

    setMessages(updatedMessages);
    onResend(message.id)();
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
          <a href="/#" onClick={handleShowMessage}>Cancel</a>
        </div>
      </form>
    </>
  )
}

export default EditForm;

// const parsedAttributes = JSON.parse(message.Attributes)
// const attributes = Object.keys(parsedAttributes);

//   return (
//     <>
//       <ul>
//         <li>{message.id}</li>
//         <li>{message.Message}</li>
//         <li>{message.Attributes}</li>
//       </ul>

//       {attributes.map(attribute => {
//         return (
//           <>
//             <p>Message attribute: {attribute}</p>
//             <p>
//               Type: {parsedAttributes[attribute]["Type"]}
//             </p>
//             <p>
//               Value: {parsedAttributes[attribute]["Value"]}
//             </p>
//           </>
//           )
//         })
//       }
//       <button onClick={() => {setShowMessage(!showMessage)}}>Cancel</button>
//     </>
//   )
// }