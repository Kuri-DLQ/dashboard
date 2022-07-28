import { useEffect, useState } from "react";
import tableService from '../services/tableService';
import messageService from "../services/messageService";
import TableItems from './TableItems';
import Header from "./Header";
import Footer from "./Footer";
import TableInfo from "./TableInfo";
import TablePagination from "./Pagination";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [messageCount, setMessageCount] = useState(0);
  const [sortFactor, setSortFactor] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  // const [recordsPerPage] = useState(10);
  const baseUrl = "http://localhost:5001";

  // const indexOfLastRecord = currentPage * recordsPerPage;
  // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // const currentMessages = messages.slice(indexOfFirstRecord, indexOfLastRecord);
  // const nPages = Math.ceil(messages.length / recordsPerPage)


  useEffect(() => {
    const run = async () => {
      try {
        const result = await tableService.getAllMessages();
        // setMessages(result.data);
        setMessages(handleSortMessages(result.data));
        setMessageCount(result.data.length);
      } catch (err) {
        console.error(err);
      }
    }

    run();

    const eventSource = new EventSource(`${baseUrl}/table/sse`);
    eventSource.onmessage = (e) => {
      console.log('sse');
      console.log('sortFactor', sortFactor);
      let results = JSON.parse(e.data);
      setMessages(handleSortMessages(results));
      setMessageCount(results.length);
    }
    // return () => {
    //   eventSource.close();
    // };
  }, [])

  const handleSortMessages = (mess) => {
    let copyOfMessages = [...mess];
    console.log('inside sort');
    console.log('sortFactor', sortFactor);
    if (sortFactor === '') {
      return copyOfMessages;
    }

    const sortedMessages = copyOfMessages.sort((a, b) => {
      if (a[sortFactor] < b[sortFactor]) {
        return -1;
      }
      if (a[sortFactor] > b[sortFactor]) {
        return 1;
      }
      return 0;
    });
    return sortedMessages;
  }

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
    setMessageCount(updatedMessageList.length);
  }

  const handleResend = async (messageToResend) => {
    await messageService.resendMessage(messageToResend)
    await handleDelete(messageToResend.id);

    const updatedMessageList = filterMessages(messageToResend.id)
    setMessages(updatedMessageList);
    setMessageCount(updatedMessageList.length);
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
      <TableInfo
        messageCount={messageCount}
        onDeleteAll={handleDeleteAll}
        onResendAll={handleResendAll}
      />
      <TableItems
        messages={messages}
        // currentMessages={currentMessages}
        setMessages={setMessages}
        onDelete={handleDelete}
        onResend={handleResend}
        onSort={handleSortMessages}
        setSortFactor={setSortFactor}
      />
      {/* <TablePagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
      /> */}
      <Footer />
    </div>
  );
}

export default App;
