import { useEffect, useState } from "react";
import tableService from '../services/tableService';

import Table from './Table'

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const run = async () => {
      try {
        let data = await tableService.getAllMessages();
        console.log('data', data)
        setMessages(data.data);
        console.log('messages', messages);
      } catch (err) {
        console.error(err);
      }
    }

    run();
  }, [messages])

  return (
    <div>
      <Table messages={messages}x/>
    </div>
  );
}

export default App;

// var express = require('express')
// var cors = require('cors')
// var app = express()

// app.use(cors())
