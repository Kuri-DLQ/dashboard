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
        messages={messages}
        message={message}
        setMessages={setMessages}
        onResend={onResend}
        onCancel={handleShowMessage}
        showMessage={showMessage}
        setShowMessage={setShowMessage} />)}
    </>
  )
}

export default EditableMessage;

  // return (
  //   <>
  //     <li>{message.Message}</li>
  //     <button onClick={handleShowMessage}>View Message</button>
  //     <button onClick={onDelete(message.id)}>Delete</button>
  //     <button onClick={onResend(message.id)}>Resend</button>
  //     {showMessage && (<CurrMessageView message={message} onCancel={handleShowMessage} showMessage={showMessage} setShowMessage={setShowMessage} />)}
  //   </>
  // )