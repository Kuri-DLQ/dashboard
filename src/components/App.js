import { useEffect, useState } from "react";
import tableService from '../services/tableService';
import Table from './Table';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const run = async () => {
      try {
        let data = await tableService.getAllMessages();
        setMessages(data.data);
      } catch (err) {
        console.error(err);
      }
    }

    run();
  }, [])

  const handleDelete = (id) => {
    return () => {
      tableService.deleteMessage(id);
      const updatedMessageList = messages.filter(message => {
        return message.id !== id;
      })
      setMessages(updatedMessageList);
    }
  }

  return (
    <div>
      <Table messages={messages} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
