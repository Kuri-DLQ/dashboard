import axios from 'axios'

const url = 'http://localhost:5001';

const getAllMessages = async () => {
  try {
    const data = await axios.get(url + '/table/allMessages');
    return data;
  } catch (err) {
    console.error(err);
  }
}

const deleteAllMessages = async () => {
  try {
    const results = await axios.delete(url + '/table/deleteAllMessages');
    console.log(results);
  } catch (err) {
    console.error(err);
  }
}

const resendAllMessages = async () => {
  try {
    const results = await axios.post(url + '/table/resendAllMessages');
    console.log(results);
  } catch (err) {
    console.error(err);
  }
}

const tableService = {
  getAllMessages,
  deleteAllMessages,
  resendAllMessages,
}

export default tableService;