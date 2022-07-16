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
    return () => {
      messageService.deleteMessage(id);

      const updatedMessageList = filterMessages(id)
      setMessages(updatedMessageList);
    }
  }

  const handleResend = (id) => {
    return () => {
      const messageToResend = messages.find(message => message.id === id);
      messageService.resendMessage(messageToResend)

      handleDelete(id);

      const updatedMessageList = filterMessages(id)
      setMessages(updatedMessageList);
    }
  }

  const handleDeleteAll = () => {
    tableService.deleteAllMessages();
    setMessages([]);
  }

  const handleResendAll = () => {
    tableService.resendAllMessages();
    setMessages([]);
  }

  const handleView = (id) => {
    return () => {
      console.log('view message');
    }
  }

  return (
    <div>
      <Table
        messages={messages}
        onDelete={handleDelete}
        onResend={handleResend}
        onDeleteAll={handleDeleteAll}
        onResendAll={handleResendAll}
        onView={handleView}
      />
    </div>
  );
}

export default App;
