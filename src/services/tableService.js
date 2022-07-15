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

const deleteMessage = async (id) => {
  try {
    await axios.delete(url + `/table/deleteMessage/${id}`);
  } catch (err) {
    console.error(err);
  }
 }

const resendMessage = async (message) => {
  console.log(`resending ${message.id}`)
  try {
    await axios.post(url + `/table/resendMessage`, message)
  } catch (err) {
    console.error(err);
  }
 }

const tableService = {
  getAllMessages,
  deleteMessage,
  resendMessage,
}

export default tableService;