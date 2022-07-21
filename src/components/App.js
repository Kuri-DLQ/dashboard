import { useEffect, useState } from "react";
import tableService from '../services/tableService';
import messageService from "../services/messageService";
import TableItems from './TableItems';
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
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
