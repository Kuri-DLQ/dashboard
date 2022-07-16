import { useState } from "react";
import CurrMessageView from './CurrMessageView';

const Message = ({message, onDelete, onResend, onView}) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(!showMessage);
  }

  return (
    <>
      <li>{message.Message}</li>
      <button onClick={handleShowMessage}>View Message</button>
      <button onClick={onDelete(message.id)}>Delete</button>
      <button onClick={onResend(message.id)}>Resend</button>
      {showMessage && (<CurrMessageView message={message} onCancel={handleShowMessage} showMessage={showMessage} setShowMessage={setShowMessage} />)}
    </>
  )
}

export default Message;