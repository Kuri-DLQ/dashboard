import { useEffect, useState } from "react";
import tableService from '../services/tableService';
import axios from 'axios';
import Table from './Table';

function App() {
  const url = 'http://localhost:5001';
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

  // const handleDelete = (id) => {
  //   tableService.deleteMessage(id);
  //   const updatedMessageList = messages.filter(message => {
  //     return message.id !== id;
  //   })
  //   setMessages(updatedMessageList);
  // }

  const handleDelete = (id) => {
    return async () => {
      console.log(`message with ${id} passed in`);
      try {
        await axios.delete(url + `/table/deleteMessage/${id}`);
        const updatedMessageList = messages.filter(message => {
          return message.id !== id;
        })
        setMessages(updatedMessageList);
        console.log(`message with ${id} deleted`);
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <div>
      <Table messages={messages} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
