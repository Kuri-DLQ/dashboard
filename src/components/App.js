import { useEffect, useState } from "react";
import tableService from '../services/tableService';
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
      tableService.deleteMessage(id);

      const updatedMessageList = filterMessages(id)
      setMessages(updatedMessageList);
    }
  }

  const handleResend = (id) => {
    return () => {
      const messageToResend = messages.find(message => message.id === id);
      tableService.resendMessage(messageToResend)

      handleDelete(id);
      
      const updatedMessageList = filterMessages(id)
      setMessages(updatedMessageList);
    }
  }

  return (
    <div>
      <Table
        messages={messages}
        onDelete={handleDelete}
        onResend={handleResend}
      />
    </div>
  );
}

export default App;
