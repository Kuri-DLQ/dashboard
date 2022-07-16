import { useEffect, useState } from "react";
import tableService from '../services/tableService';
import messageService from "../services/messageService";
import Table from './Table';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const run = async () => {
      try {
        const result = await tableService.getAllMessages();
        setMessages(result.data);
      } catch (err) {
        console.error(err);
      }
    }

    run();
  }, [])

  const filterMessages = (id) => {
    const updatedMessageList = messages.filter(message => {
      return message.id !== id;
    })

    return updatedMessageList;
  }

  const handleDelete = (id) => {
    return async () => {
      await messageService.deleteMessage(id);

      const updatedMessageList = filterMessages(id)
      setMessages(updatedMessageList);
    }
  }

  const handleResend = (id) => {
    return async () => {
      const messageToResend = messages.find(message => message.id === id);
      await messageService.resendMessage(messageToResend)

      handleDelete(id);

      const updatedMessageList = filterMessages(id)
      setMessages(updatedMessageList);
    }
  }

  const handleDeleteAll = async () => {
    await tableService.deleteAllMessages();
    setMessages([]);
  }

  const handleResendAll = async () => {
    await tableService.resendAllMessages();
    setMessages([]);
  }

  return (
    <div>
      <Table
        messages={messages}
        setMessages={setMessages}
        onDelete={handleDelete}
        onResend={handleResend}
        onDeleteAll={handleDeleteAll}
        onResendAll={handleResendAll}
      />
    </div>
  );
}

export default App;
