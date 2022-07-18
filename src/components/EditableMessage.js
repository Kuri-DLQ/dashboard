import { useState } from "react";
import EditForm from './EditForm';
import Message from "./Message";

const EditableMessage = ({messages, message, setMessages, onDelete, onResend}) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(!showMessage);
  }

  return (
    <>
      <Message
        message={message}
        handleShowMessage={handleShowMessage}
        onDelete={onDelete}
        onResend={onResend} />
      {showMessage &&
        (<EditForm
        message={message}
        messages={messages}
        setMessages={setMessages}
        onResend={onResend}
        onCancel={handleShowMessage}
        showMessage={showMessage}
        setShowMessage={setShowMessage} />)}
    </>
  )
}

export default EditableMessage;