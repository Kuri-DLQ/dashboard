import { useEffect, useState } from "react";
import tableService from '../services/tableService';
import messageService from "../services/messageService";
import TableItems from './TableItems';
import Header from "./Header";
import Footer from "./Footer";
import TableInfo from "./TableInfo";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [messageCount, setMessageCount] = useState(0);
  const baseUrl = "http://localhost:5001";

  useEffect(() => {
    const run = async () => {
      try {
        const result = await tableService.getAllMessages();
        setMessages(result.data);
        setMessageCount(result.data.length);
      } catch (err) {
        console.error(err);
      }
    }

    run();

    const eventSource = new EventSource(`${baseUrl}/table/sse`);
    eventSource.onmessage = (e) => {
      let results = JSON.parse(e.data);
      console.log('results:', results);
      console.log('type: ', typeof results);
      // let stringifiedResults = results.map(mess => {
      //   let type = typeof mess;
      //   console.log('type of mess: ', type);
      //   return mess;
      //   // return JSON.stringify(message);
      // });
      setMessages(results);
      setMessageCount(results.length);
      // results: [{"Message":"modified test with string jul 21, 4th","Attributes":"{\"order\":{\"Type\":\"Number\",\"Value\":\"4\"}}","id":"354c8c47-5dac-59ca-bd29-d7149bfa3be6"}, ...
      // setMessageCount(parseInt(e.data, 10));
    }
    // return () => {
    //   eventSource.close();
    // };
  }, [])

  const filterMessages = (id) => {
    const updatedMessageList = messages.filter(message => {
      return message.id !== id;
    })

    return updatedMessageList;
  }

  const handleDelete = async (id) => {
    await messageService.deleteMessage(id);

    const updatedMessageList = filterMessages(id)
    setMessages(updatedMessageList);
  }

  const handleResend = async (messageToResend) => {
    await messageService.resendMessage(messageToResend)
    await handleDelete(messageToResend.id);

    const updatedMessageList = filterMessages(messageToResend.id)
    setMessages(updatedMessageList);
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
      <Header />
      <TableInfo messageCount={messageCount} />
      <TableItems
        messages={messages}
        setMessages={setMessages}
        onDelete={handleDelete}
        onResend={handleResend}
        onDeleteAll={handleDeleteAll}
        onResendAll={handleResendAll}
      />
      <Footer />
    </div>
  );
}

export default App;
