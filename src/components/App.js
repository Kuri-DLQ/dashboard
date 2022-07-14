import { useEffect, useState } from "react";
import tableService from '../services/tableService';

import Table from './Table'

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

  return (
    <div>
      <Table messages={messages}/>
    </div>
  );
}

export default App;

// var express = require('express')
// var cors = require('cors')
// var app = express()

// app.use(cors())
